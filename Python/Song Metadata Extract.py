import os
import sqlite3
from mutagen.easyid3 import EasyID3
from mutagen.mp3 import MP3
from mutagen.id3 import ID3, APIC

# Define the folder containing the music files
folder_path = r"C:\\Users\\sanka\\Music"
albumart_folder = os.path.join(folder_path, "AlbumArt")  # Folder to save album art
db_path = "songs.db"  # SQLite database file

# Create album art folder if it doesn't exist
os.makedirs(albumart_folder, exist_ok=True)

# Connect to SQLite database
with sqlite3.connect(db_path) as conn:
    cursor = conn.cursor()

    # Drop and recreate the table to reset ID and clear old data
    cursor.execute("DROP TABLE IF EXISTS songs")
    cursor.execute("""
    CREATE TABLE songs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        filename TEXT NOT NULL,
        path TEXT NOT NULL,
        song_number TEXT,
        title TEXT,
        artist TEXT,
        year TEXT,
        genre TEXT,
        album_art TEXT  -- Stores the path to the album art image
    )
    """)

    # Function to extract metadata
    def extract_metadata(file_path):
        try:
            audio = MP3(file_path, ID3=EasyID3)
            title = audio.get("title", ["Unknown"])[0]
            artist = audio.get("artist", ["Unknown"])[0]
            year = audio.get("date", ["Unknown"])[0]
            genre = audio.get("genre", ["Unknown"])[0]
            tracknumber = audio.get("tracknumber", ["Unknown"])[0]
            return tracknumber, title, artist, year, genre
        except Exception as e:
            print(f"Error extracting metadata from {file_path}: {e}")
            return "Unknown", "Unknown", "Unknown", "Unknown", "Unknown"

    # Function to extract and save album art
    def extract_album_art(file_path, filename):
        try:
            audio = ID3(file_path)
            for tag in audio.values():
                if isinstance(tag, APIC):
                    album_art_path = os.path.join(albumart_folder, f"{filename}.jpg")
                    with open(album_art_path, "wb") as img_file:
                        img_file.write(tag.data)
                    return album_art_path  # Return the image file path
        except Exception:
            pass
        return None  # Return None if no album art is found

    # Get all MP3 files and insert metadata into database
    files = [file for file in os.listdir(folder_path) if file.endswith(".mp3")]

    for file in files:
        file_path = os.path.join(folder_path, file)
        tracknumber, title, artist, year, genre = extract_metadata(file_path)
        album_art_path = extract_album_art(file_path, os.path.splitext(file)[0])

        cursor.execute("""
        INSERT INTO songs (filename, path, song_number, title, artist, year, genre, album_art)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        """, (file, file_path, tracknumber, title, artist, year, genre, album_art_path))

    # Fetch and display all rows
    cursor.execute("SELECT * FROM songs")
    rows = cursor.fetchall()

# Print stored song details
for row in rows:
    print(row)  # Prints (id, filename, path, song_number, title, artist, year, genre, album_art)

print("Metadata and album art have been extracted and stored in the database.")
