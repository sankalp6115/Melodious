import React, { useEffect, useState, use, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { PlayerContext } from '../contexts/PlayerContext';
import { getAssetUrl } from '../utils/assets';
import '../styles/playlist-detail.css';
import { backend, port } from "../backend_url";

const PlaylistDetail = () => {
    const { id } = useParams();
    const { playSong, isPlaying, currentSongIndex, activeQueue, currentSong } = use(PlayerContext);
    const [playlist, setPlaylist] = useState(null);
    const [headerBg, setHeaderBg] = useState('linear-gradient(to right, #333, #111)');
    const imgRef = useRef(null);
    const containerRef = useRef(null);
    const [highlightStyle, setHighlightStyle] = useState({ top: 0, height: 0, left: 0, width: 0, opacity: 0 });

    const BACKEND_HOST = backend || window.location.hostname;
    const PORT = port || "8000";
    const BACKEND = `http://${BACKEND_HOST}:${PORT}`;

    const fetchPlaylistDetails = React.useCallback(() => {
        fetch(`${BACKEND}/api/playlists/${id}`)
            .then(res => res.json())
            .then(data => {
                const sanitizedSongs = data.songs.map(song => ({
                    ...song,
                    file: `${BACKEND}/api/songs/stream/${encodeURIComponent(song.file)}`,
                    albumArt: getAssetUrl(song.albumArt),
                    artists: Array.isArray(song.artists) ? song.artists : [song.artists]
                }));
                setPlaylist({ ...data, poster: getAssetUrl(data.poster), songs: sanitizedSongs });
            })
            .catch(err => console.error("Failed to fetch playlist:", err));
    }, [id, BACKEND]);

    useEffect(() => {
        fetchPlaylistDetails();
    }, [fetchPlaylistDetails]);

    useEffect(() => {
        const handleRefresh = (e) => {
            // Refresh if no playlist ID is specified, or if it matches current
            if (!e.detail || String(e.detail.playlistId) === String(id)) {
                fetchPlaylistDetails();
            }
        };
        window.addEventListener('refresh-playlist', handleRefresh);
        return () => window.removeEventListener('refresh-playlist', handleRefresh);
    }, [id, fetchPlaylistDetails]);

    const handleImgLoad = () => {
        if (imgRef.current && window.ColorThief) {
            try {
                const colorThief = new window.ColorThief();
                const [r, g, b] = colorThief.getColor(imgRef.current);
                const dominantColor = `rgb(${r}, ${g}, ${b})`;
                const darkerColor = `rgb(${Math.max(r - 50, 0)}, ${Math.max(g - 50, 0)}, ${Math.max(b - 50, 0)})`;
                setHeaderBg(`linear-gradient(to right, ${dominantColor}, ${darkerColor})`);
            } catch (e) {
                console.error("Color extraction failed", e);
            }
        }
    };

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

    if (!playlist) return <div className="loading">Loading Playlist…</div>;

    return (
        <div className="playlist-detail-container">
            {/* Hero Header */}
            <section className="playlist-hero" style={{ background: headerBg }}>
                <div className="playlist-hero-content">
                    <div className="hero-poster">
                        <img 
                            ref={imgRef}
                            src={playlist.poster} 
                            alt={playlist.name} 
                            onLoad={handleImgLoad}
                            onError={(e) => { e.target.src = getAssetUrl('album-arts/default.jpg'); }}
                            crossOrigin="anonymous"
                        />
                    </div>
                    <div className="hero-info">
                        <span className="info-badge">Playlist</span>
                        <h1 className="playlist-name">{playlist.name}</h1>
                        <p className="playlist-meta">
                            80,000+ Monthly Listeners • {playlist.songs.length} Tracks
                        </p>
                    </div>
                </div>
            </section>

            {/* Song Table */}
            <div 
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
                            <th>#</th>
                            <th></th>
                            <th>Title</th>
                            <th>Artist</th>
                            <th>Album</th>
                            <th>⏱︎</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {playlist.songs.map((song, index) => {
                            const isActive = song.id === currentSong?.id;
                            return (
                                <tr 
                                    key={song.id} 
                                    className={`row ${isActive ? 'active-row' : ''}`}
                                    data-song-id={song.id}
                                    data-in-playlist-id={id}
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => playSong(index, playlist.songs)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            playSong(index, playlist.songs);
                                        }
                                    }}
                                >
                                    <td className="table-index">{index + 1}</td>
                                    <td className="table-art">
                                        <img 
                                            src={song.albumArt} 
                                            loading="lazy"
                                            className={`album-art ${isActive && isPlaying ? 'active-album-art' : ''}`} 
                                            alt="" 
                                            onError={(e) => { e.target.src = getAssetUrl('album-arts/default.jpg'); }}
                                        />
                                    </td>
                                    <td className="table-title">{song.title}</td>
                                    <td className="table-artist">{song.artists.join(", ")}</td>
                                    <td className="table-album">{song.album}</td>
                                    <td className="table-length">
                                        {Math.floor(song.duration / 60)}:{String(song.duration % 60).padStart(2, '0')}
                                    </td>
                                    <td className="star-rating">
                                        {"★".repeat(Math.floor(song.rating))}
                                        {song.rating % 1 > 0 ? "⯨" : ""}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PlaylistDetail;
