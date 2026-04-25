from fastapi import APIRouter, HTTPException
from database import get_connection

router = APIRouter()

@router.get("/")
def get_artists():
    """List all artists in the system."""
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT id, name, image FROM artists ORDER BY name")
    rows = cursor.fetchall()
    conn.close()
    return [{"id": r["id"], "name": r["name"], "image": r["image"]} for r in rows]

@router.get("/{artist_id}")
def get_artist_by_id(artist_id: int):
    """Get artist details and their catalog of songs."""
    conn = get_connection()
    cursor = conn.cursor()

    # Get artist basic info
    cursor.execute("SELECT id, name, image FROM artists WHERE id = ?", (artist_id,))
    artist = cursor.fetchone()

    if not artist:
        conn.close()
        raise HTTPException(status_code=404, detail="Artist not found")

    # Get songs for this artist
    cursor.execute("""
    SELECT 
        s.id, s.title, s.album, s.genre, s.year,
        s.duration, s.file_path, s.album_art, s.rating,
        GROUP_CONCAT(a2.name, '|||') AS artist_list
    FROM song_artists sa
    JOIN songs s          ON sa.song_id = s.id
    LEFT JOIN song_artists sa2 ON s.id = sa2.song_id
    LEFT JOIN artists a2       ON sa2.artist_id = a2.id
    WHERE sa.artist_id = ?
    GROUP BY s.id
    ORDER BY s.title
    """, (artist_id,))
    
    songs = cursor.fetchall()
    conn.close()

    return {
        "id": artist["id"],
        "name": artist["name"],
        "image": artist["image"],
        "songs": [
            {
                "id": s["id"],
                "title": s["title"],
                "album": s["album"],
                "genre": s["genre"],
                "year": s["year"],
                "duration": s["duration"],
                "file": s["file_path"],
                "albumArt": s["album_art"],
                "rating": s["rating"],
                "artists": s["artist_list"].split("|||") if s["artist_list"] else []
            }
            for s in songs
        ]
    }

@router.get("/name/{artist_name}")
def get_artist_by_name(artist_name: str):
    """Get artist details and their catalog by artist name (useful for URL slugs)."""
    conn = get_connection()
    cursor = conn.cursor()

    # Get artist basic info
    cursor.execute("SELECT id FROM artists WHERE LOWER(name) = LOWER(?)", (artist_name,))
    row = cursor.fetchone()

    if not row:
        conn.close()
        raise HTTPException(status_code=404, detail="Artist not found")

    conn.close()
    return get_artist_by_id(row["id"])
