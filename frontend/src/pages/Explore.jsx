import React, { useContext, useEffect, useRef, useState } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';

const Explore = () => {
  const { songs, playSong, currentSongIndex, isPlaying, searchResults, currentSong } = useContext(PlayerContext);
  const containerRef = useRef(null);
  const [highlightStyle, setHighlightStyle] = useState({ top: 0, height: 0, left: 0, width: 0, opacity: 0 });

  // Auto-scroll to search results
  useEffect(() => {
    if (searchResults.length > 0 && containerRef.current) {
        const firstMatchId = searchResults[0];
        const row = containerRef.current.querySelector(`[data-id="${firstMatchId}"]`);
        if (row) {
            row.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
  }, [searchResults]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const tr = e.target.closest("tr");
    if (tr && containerRef.current.contains(tr) && tr.parentElement.tagName === 'TBODY') {
      const rowRect = tr.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      const tableEl = containerRef.current.querySelector(".song-table");
      const tableRect = tableEl ? tableEl.getBoundingClientRect() : containerRect;

      setHighlightStyle({
        top: rowRect.top - containerRect.top,
        height: rowRect.height,
        left: tableRect.left - containerRect.left,
        width: tableRect.width,
        opacity: 1
      });
    } else {
      setHighlightStyle(prev => ({ ...prev, opacity: 0 }));
    }
  };

  const handleMouseLeave = () => {
    setHighlightStyle(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <div 
      id="songList" 
      className="song-list-container" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="hover-highlight" 
        style={{
          top: highlightStyle.top,
          height: highlightStyle.height,
          left: highlightStyle.left,
          width: highlightStyle.width,
          opacity: highlightStyle.opacity
        }}
      />
      <table className="song-table">
        <thead>
          <tr>
            <th>#</th><th></th><th>Title</th><th>Artist</th><th>Album</th><th>Genre</th><th>⏱︎</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => {
            const isActive = song.id === currentSong?.id;
            return (
              <tr 
                key={song.id || index} 
                data-id={song.id}
                data-song-id={song.id}
                className={`row ${isActive ? 'active-row' : ''} ${searchResults.includes(song.id) ? 'searchActive' : ''}`}
                onClick={() => playSong(index, songs)}
              >
                <td className="table-index">{index + 1}</td>
                <td className="table-art">
                   <img src={song.albumArt} loading="lazy" className={`album-art ${isPlaying && isActive ? 'active-album-art' : ''}`} alt="" />
                </td>
              <td className="table-title">{song.title}</td>
              <td className="table-artist">{song.artists?.join(", ") || "Unknown"}</td>
              <td className="table-album">{song.album || "—"}</td>
              <td className="table-genre">{song.genre || "—"}</td>
              <td className="table-length">{`${Math.floor((song.duration || 0) / 60)}:${String((song.duration || 0) % 60).padStart(2, "0")}`}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Explore;
