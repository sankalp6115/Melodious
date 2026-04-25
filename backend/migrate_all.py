"""
migrate_all.py
--------------
One-time script: reads all JSON data files and populates songs.db.

Run from the backend/ directory:
    python migrate_all.py

Safe to re-run — drops and rebuilds all tables fresh each time.
"""

import json
from database import get_connection, init_db
from utils.path_resolver import get_data_dir

# -------- SETUP --------
DATA_DIR = get_data_dir()   

# Drop all tables and recreate with correct schema
conn = get_connection()
cursor = conn.cursor()

print("Dropping old tables...")
cursor.executescript("""
    PRAGMA foreign_keys = OFF;
    DROP TABLE IF EXISTS lyrics;
    DROP TABLE IF EXISTS playlist_songs;
    DROP TABLE IF EXISTS playlists;
    DROP TABLE IF EXISTS song_artists;
    DROP TABLE IF EXISTS artists;
    DROP TABLE IF EXISTS songs;
    PRAGMA foreign_keys = ON;
""")
conn.commit()
conn.close()

# Recreate from schema
init_db()

conn = get_connection()
cursor = conn.cursor()

# -------- LOAD FILES --------
with open(DATA_DIR / "songs.json", encoding="utf-8") as f:
    songs = json.load(f)

with open(DATA_DIR / "artists.json", encoding="utf-8") as f:
    artists_data = json.load(f)

with open(DATA_DIR / "playlists.json", encoding="utf-8") as f:
    playlists = json.load(f)

with open(DATA_DIR / "lyrics.json", encoding="utf-8") as f:
    lyrics_data = json.load(f)

# -------- SONGS --------
# JSON field  →  DB column
#   id        →  id          (INTEGER)
#   title     →  title
#   album     →  album
#   genre     →  genre
#   year      →  year
#   length    →  duration    ← note the rename
#   file      →  file_path   ← note the rename
#   albumArt  →  album_art   ← note the rename
#   rating    →  rating

print(f"Inserting {len(songs)} songs...")
for s in songs:
    cursor.execute("""
    INSERT OR REPLACE INTO songs
        (id, title, album, genre, year, duration, file_path, album_art, rating)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, (
        int(s["id"]),
        s.get("title"),
        s.get("album"),
        s.get("genre"),
        s.get("year"),
        s.get("length"),       # JSON key is "length"
        s.get("file"),         # JSON key is "file"
        s.get("albumArt"),     # JSON key is "albumArt"
        s.get("rating", 0),
    ))

# -------- ARTISTS --------
print(f"Inserting artists from artists.json...")
artist_map = {}  # name → db id

for a in artists_data:
    cursor.execute("""
    INSERT OR IGNORE INTO artists (name, image)
    VALUES (?, ?)
    """, (a["name"], a.get("image")))

# Also ensure every artist referenced in songs.json exists (even if missing from artists.json)
print("Ensuring all song artists exist in artists table...")
for s in songs:
    for artist_name in s.get("artist", []):
        cursor.execute("INSERT OR IGNORE INTO artists (name, image) VALUES (?, NULL)", (artist_name,))

# Build name→id map
cursor.execute("SELECT id, name FROM artists")
for row in cursor.fetchall():
    artist_map[row["name"]] = row["id"]

# -------- SONG ↔ ARTISTS --------
print("Linking songs to artists...")
for s in songs:
    song_id = int(s["id"])
    for artist_name in s.get("artist", []):
        artist_id = artist_map.get(artist_name)
        if artist_id:
            cursor.execute("""
            INSERT OR IGNORE INTO song_artists (song_id, artist_id)
            VALUES (?, ?)
            """, (song_id, artist_id))
        else:
            print(f"  ⚠ Could not link artist '{artist_name}' (song id={song_id}) — skipping")

# -------- PLAYLISTS --------
print(f"Inserting {len(playlists)} playlists...")
for p in playlists:
    cursor.execute("""
    INSERT INTO playlists (name, poster)
    VALUES (?, ?)
    """, (p["name"], p.get("poster")))

    playlist_id = cursor.lastrowid

    for idx, song_id in enumerate(p.get("ids", [])):
        cursor.execute("""
        INSERT OR IGNORE INTO playlist_songs (playlist_id, song_id, position)
        VALUES (?, ?, ?)
        """, (playlist_id, int(song_id), idx))

# -------- LYRICS --------
print(f"Inserting lyrics entries...")
skipped_lyrics = 0
for entry in lyrics_data:
    raw_id = str(entry.get("song_id", "")).strip()
    if not raw_id.isdigit():
        skipped_lyrics += 1
        continue  # skip blank / non-numeric song_id
    cursor.execute("""
    INSERT OR REPLACE INTO lyrics (song_id, content)
    VALUES (?, ?)
    """, (int(raw_id), entry.get("lyrics", "")))
if skipped_lyrics:
    print(f"  ⚠ Skipped {skipped_lyrics} lyrics entries with invalid song_id")

conn.commit()
conn.close()

print("\n✅ Migration complete.")