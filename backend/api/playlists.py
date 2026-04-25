from fastapi import APIRouter, HTTPException
from database import get_connection

router = APIRouter()


@router.get("/")
def get_playlists():
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT id, name, poster FROM playlists ORDER BY name")
    rows = cursor.fetchall()
    conn.close()
    return [{"id": r["id"], "name": r["name"], "poster": r["poster"]} for r in rows]


@router.get("/{playlist_id}")
def get_playlist(playlist_id: int):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("SELECT id, name, poster FROM playlists WHERE id = ?", (playlist_id,))
    playlist = cursor.fetchone()

    if not playlist:
        conn.close()
        raise HTTPException(status_code=404, detail="Playlist not found")

    cursor.execute("""
    SELECT
        s.id, s.title, s.album, s.genre, s.year,
        s.duration, s.file_path, s.album_art, s.rating,
        GROUP_CONCAT(a.name, '|||') AS artist_list
    FROM playlist_songs ps
    JOIN songs s          ON ps.song_id = s.id
    LEFT JOIN song_artists sa ON s.id = sa.song_id
    LEFT JOIN artists a       ON sa.artist_id = a.id
    WHERE ps.playlist_id = ?
    GROUP BY s.id
    ORDER BY ps.position
    """, (playlist_id,))

    songs = cursor.fetchall()
    conn.close()

    return {
        "id":     playlist["id"],
        "name":   playlist["name"],
        "poster": playlist["poster"],
        "songs": [
            {
                "id":       s["id"],
                "title":    s["title"],
                "album":    s["album"],
                "genre":    s["genre"],
                "year":     s["year"],
                "duration": s["duration"],
                "file":     s["file_path"],
                "albumArt": s["album_art"],
                "rating":   s["rating"],
                "artists":  s["artist_list"].split("|||") if s["artist_list"] else [],
            }
            for s in songs
        ],
    }