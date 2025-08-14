import os
import json
import platform
from pathlib import Path
from mutagen.easyid3 import EasyID3
from mutagen.mp3 import MP3
from mutagen.id3 import ID3
from argparse import ArgumentParser

# -------------------- CONFIGURATION --------------------

def get_default_music_dir():
    system = platform.system()
    home = Path.home()
    return home / "Music"

DEFAULT_MUSIC_DIR = Path(os.environ.get("MUSIC_DIR", get_default_music_dir()))
DEFAULT_OUTPUT_FILE = r"D:\\Coding\\WebD\\Music_Player\\Playlist\\Artists\\artists.js"

# -------------------- CORE FUNCTION --------------------

def extract_artists_from_library(music_dir, output_file):
    music_dir = Path(music_dir)
    if not music_dir.exists():
        print(f"[FATAL] Music directory not found: {music_dir}")
        return

    print(f"[INFO] Scanning for artists in: {music_dir}")

    unique_artists = set()

    for root, _, files in os.walk(music_dir):
        for file in files:
            if file.lower().endswith(".mp3"):
                mp3_path = Path(root) / file
                try:
                    audio = MP3(mp3_path, ID3=EasyID3)
                    artists = audio.get("artist", ["Unknown Artist"])[0].split("/")
                    for artist in artists:
                        cleaned = artist.strip()
                        if cleaned:
                            unique_artists.add(cleaned)
                except Exception as e:
                    print(f"[WARNING] Failed to read artist from {mp3_path.name} -> {e}")

    artist_list = [{"name": artist, "image": "../../../Assets/Images/artist/" + str(artist).lower() + ".jpg"} for artist in sorted(unique_artists)]

    # Convert to JSON string with indent
    json_str = json.dumps(artist_list, ensure_ascii=False, indent=2)
    
    # Add // before "image" lines to comment them out
    lines = json_str.split("\n")
    for i, line in enumerate(lines):
        if '"image":' in line:
            lines[i] = line.replace('"image":', '// "image":')
    
    # Write to file with const artists prefix
    with open(output_file, "w", encoding="utf-8") as f:
        f.write("const artists = ")
        f.write("\n".join(lines))
        f.write(";")

    print(f"[SUCCESS] {len(artist_list)} unique artists written to: {output_file}")

# -------------------- CLI ENTRY --------------------

if __name__ == "__main__":
    parser = ArgumentParser(description="Extract unique artists from MP3 metadata and export as artists.js")
    parser.add_argument("--music-dir", type=str, default=DEFAULT_MUSIC_DIR, help="Path to music directory")
    parser.add_argument("--output", type=str, default=DEFAULT_OUTPUT_FILE, help="Output JS file path")

    args = parser.parse_args()
    extract_artists_from_library(args.music_dir, args.output)