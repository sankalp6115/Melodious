import React, { useEffect, useState, useContext, useRef } from 'react';
import { useParams } from 'react-router-dom'; 
import { PlayerContext } from '../contexts/PlayerContext';
import '../styles/artists.css';
import { getAssetUrl } from '../utils/assets';

const ArtistDetail = () => {
    const { id } = useParams();
    const { playSong, isPlaying, currentSongIndex, activeQueue, currentSong } = useContext(PlayerContext);
    const [artist, setArtist] = useState(null);
    const [headerBg, setHeaderBg] = useState('linear-gradient(to right, #333, #111)');
    const imgRef = useRef(null);

    const BACKEND_HOST = window.location.hostname;
    const BACKEND = `http://${BACKEND_HOST}:8000`;

    useEffect(() => {
        fetch(`${BACKEND}/api/artists/${id}`)
            .then(res => res.json())
            .then(data => {
                const sanitizedSongs = data.songs.map(song => ({
                    ...song,
                    file: `${BACKEND}/api/songs/stream/${encodeURIComponent(song.file)}`,
                    albumArt: getAssetUrl(song.albumArt),
                    artists: Array.isArray(song.artists) ? song.artists : [song.artists]
                }));
                setArtist({ ...data, image: getAssetUrl(data.image), songs: sanitizedSongs });
            })
            .catch(err => console.error("Failed to fetch artist details:", err));
    }, [id, BACKEND]);

    const handleImgLoad = () => {
        if (imgRef.current && window.ColorThief) {
            try {
                const colorThief = new window.ColorThief();
                const [r, g, b] = colorThief.getColor(imgRef.current);
                setHeaderBg(`linear-gradient(to right, rgb(${r},${g},${b}), rgb(${Math.max(r-60,0)}, ${Math.max(g-60,0)}, ${Math.max(b-60,0)}))`);
            } catch (e) {
                console.error("ColorThief failed", e);
            }
        }
    };

    if (!artist) return <div className="loading">Loading Artist...</div>;

    const isCurrentContext = activeQueue.length === artist.songs.length && 
                             activeQueue[0]?.id === artist.songs[0]?.id;

    return (
        <div className="artist-detail-container">
            <section className="artist-hero" style={{ background: headerBg }}>
                <div className="artist-hero-content">
                    <div className="artist-big-poster">
                        <img 
                            ref={imgRef}
                            src={artist.image || `${BACKEND}/assets/artist-images/default-artist.jpg`} 
                            alt={artist.name} 
                            onLoad={handleImgLoad}
                            onError={(e) => { e.target.src = getAssetUrl('album-arts/default.jpg'); }}
                            crossOrigin="anonymous"
                        />
                    </div>
                    <div className="hero-info">
                        <span className="info-badge">Verified Artist</span>
                        <h1 className="artist-name-big">{artist.name}</h1>
                        <p className="artist-meta">
                            80,000+ Monthly Listeners • {artist.songs.length} Tracks In Library
                        </p>
                    </div>
                </div>
            </section>

            <div className="song-list-container">
                <table className="song-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th></th>
                            <th>Title</th>
                            <th>Album</th>
                            <th>Genre</th>
                            <th>⏱︎</th>
                        </tr>
                    </thead>
                    <tbody>
                        {artist.songs.map((song, index) => {
                            const isActive = song.id === currentSong?.id;
                            return (
                                <tr 
                                    key={song.id} 
                                    className={`row ${isActive ? 'active-row' : ''}`}
                                    onClick={() => playSong(index, artist.songs)}
                                >
                                    <td className="table-index">{index + 1}</td>
                                    <td className="table-art">
                                        <img 
                                            src={song.albumArt} 
                                            className={`album-art ${isActive && isPlaying ? 'active-album-art' : ''}`} 
                                            alt="" 
                                            onError={(e) => { e.target.src = getAssetUrl('album-arts/default.jpg'); }}
                                        />
                                    </td>
                                    <td className="table-title">{song.title}</td>
                                    <td className="table-album">{song.album}</td>
                                    <td className="table-genre">{song.genre}</td>
                                    <td className="table-length">
                                        {Math.floor(song.duration / 60)}:{String(song.duration % 60).padStart(2, '0')}
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

export default ArtistDetail;
