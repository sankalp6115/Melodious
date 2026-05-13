import sqlite3
conn = sqlite3.connect('songs.db')

cursor = conn.cursor()
cursor.execute("select * from songs")

rows = cursor.fetchall()
for row in rows:
    print(row)
conn.commit()
conn.close()