from fastapi import Request, APIRouter, HTTPException
from fastapi.responses import StreamingResponse
import os

from database import get_connection
from utils.path_resolver import get_songs_dir

router = APIRouter()

SONGS_DIR = get_songs_dir()


# ---------- HELPER ----------

def row_to_song(row, artists: list[str]) -> dict:
    """Convert a DB row + artists list into the standard song response dict."""
    return {
        "id":       row["id"],
        "title":    row["title"],
        "album":    row["album"],
        "genre":    row["genre"],
        "year":     row["year"],
        "duration": row["duration"],
        "file":     row["file_path"],
        "albumArt": row["album_art"],
        "rating":   row["rating"],
        "artists":  artists,
    }


def fetch_songs_with_artists(cursor, where_clause: str = "", params: tuple = ()) -> list[dict]:
    """
    Run a SELECT over songs + their artists via the join table.
    `where_clause` is appended after the GROUP BY if non-empty.
    """
    sql = f"""
    SELECT
        s.id, s.title, s.album, s.genre, s.year,
        s.duration, s.file_path, s.album_art, s.rating,
        GROUP_CONCAT(a.name, '|||') AS artist_list
    FROM songs s
    LEFT JOIN song_artists sa ON s.id = sa.song_id
    LEFT JOIN artists a       ON sa.artist_id = a.id
    {where_clause}
    GROUP BY s.id
    ORDER BY s.title
    """
    cursor.execute(sql, params)
    rows = cursor.fetchall()
    result = []
    for r in rows:
        artists = r["artist_list"].split("|||") if r["artist_list"] else []
        result.append(row_to_song(r, artists))
    return result


# ---------- ROUTES ----------

@router.get("/")
def get_all_songs():
    conn = get_connection()
    cursor = conn.cursor()
    songs = fetch_songs_with_artists(cursor)
    conn.close()
    return songs


@router.get("/search/")
def search_songs(q: str):
    """Search by title, album, or artist name (case-insensitive)."""
    conn = get_connection()
    cursor = conn.cursor()

    q_like = f"%{q.lower()}%"

    # Use a subquery to find matching song IDs first, then pull full data
    cursor.execute("""
    SELECT DISTINCT s.id
    FROM songs s
    LEFT JOIN song_artists sa ON s.id = sa.song_id
    LEFT JOIN artists a       ON sa.artist_id = a.id
    WHERE LOWER(s.title) LIKE ?
       OR LOWER(s.album) LIKE ?
       OR LOWER(a.name)  LIKE ?
    """, (q_like, q_like, q_like))

    matching_ids = [row["id"] for row in cursor.fetchall()]

    if not matching_ids:
        conn.close()
        return []

    placeholders = ",".join("?" * len(matching_ids))
    songs = fetch_songs_with_artists(
        cursor,
        where_clause=f"WHERE s.id IN ({placeholders})",
        params=tuple(matching_ids),
    )
    conn.close()
    return songs


@router.get("/stream/{filename:path}")
def stream_song(filename: str, request: Request):
    """Stream an MP3 file with HTTP range support."""
    file_path = SONGS_DIR / filename

    if not file_path.exists():
        raise HTTPException(status_code=404, detail=f"File not found: {filename}")

    file_size = os.path.getsize(file_path)
    range_header = request.headers.get("range")

    start = 0
    end = file_size - 1

    if range_header:
        bytes_range = range_header.replace("bytes=", "").split("-")
        start = int(bytes_range[0])
        if bytes_range[1]:
            end = int(bytes_range[1])

    chunk_size = end - start + 1

    def iter_file():
        with open(file_path, "rb") as f:
            f.seek(start)
            remaining = chunk_size
            while remaining > 0:
                chunk = f.read(min(1024 * 1024, remaining))
                if not chunk:
                    break
                remaining -= len(chunk)
                yield chunk

    headers = {
        "Content-Range":  f"bytes {start}-{end}/{file_size}",
        "Accept-Ranges":  "bytes",
        "Content-Length": str(chunk_size),
        "Content-Type":   "audio/mpeg",
    }

    return StreamingResponse(iter_file(), status_code=206, headers=headers)


@router.get("/{song_id}")
def get_song(song_id: int):
    conn = get_connection()
    cursor = conn.cursor()

    songs = fetch_songs_with_artists(
        cursor,
        where_clause="WHERE s.id = ?",
        params=(song_id,),
    )
    conn.close()

    if not songs:
        raise HTTPException(status_code=404, detail="Song not found")

    return songs[0]