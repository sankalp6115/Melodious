import os
from utils.path_resolver import get_songs_dir

def scan_songs():
    songs_dir = get_songs_dir()

    files = []
    for root, _, filenames in os.walk(songs_dir):
        for f in filenames:
            if f.endswith(".mp3"):
                files.append(f)

    return files