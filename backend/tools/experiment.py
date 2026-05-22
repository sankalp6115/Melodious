import library_sync
from pathlib import Path
# print(library_sync.ALBUM_ARTS_DIR)
# library_sync.fallback_art()

file_path='/Users/sankalpomar/Documents/Coding/Projects/Melodious/songs/Batman Arkham Series - Heaven For Bad Guys.mp3'
file_path = Path(file_path)
print(library_sync.extract_metadata(file_path))