import os
import json

LYRICS_DIR = r"C:\\Users\\sanka\\Music\\Lyrics"
output = []

for filename in os.listdir(LYRICS_DIR):
    if filename.lower().endswith(".lrc"):
        title = os.path.splitext(filename)[0]
        file_path = os.path.join(LYRICS_DIR, filename)
        try:
            with open(file_path, "r", encoding="utf-8") as f:
                lyrics_content = f.read()
                output.append({
                    "title": title,
                    "lyrics": lyrics_content.strip()
                })
        except Exception as e:
            print(f"Error reading {filename}: {e}")

# Write the JS file
with open("lyrics.js", "w", encoding="utf-8") as jsfile:
    jsfile.write("const lyricsDatabase = ")
    json.dump(output, jsfile, ensure_ascii=False, indent=2)
    jsfile.write(";")

print(f"✅ Generated lyrics.js with {len(output)} entries.")
