import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAssetUrl } from '../utils/assets';
import '../styles/home.css';

const Home = () => {
  const [playlists, setPlaylists] = useState([]);
  const [popularArtists, setPopularArtists] = useState([]);

  useEffect(() => {
    // Derive backend dynamically
    const BACKEND_HOST = window.location.hostname;
    const BACKEND = `http://${BACKEND_HOST}:8000`;

    fetch(`${BACKEND}/api/playlists`)
      .then(res => res.json())
      .then(data => setPlaylists(data));
    
    fetch(`${BACKEND}/api/artists`)
      .then(res => res.json())
      .then(data => setPopularArtists(data));
  }, []);

  const genres = [
    { name: 'Dance Beat', color: '#ff0844' },
    { name: 'Electro Pop', color: '#ffb199' },
    { name: 'Alternative Indie', color: 'chartreuse' },
    { name: 'Hip Hop', color: 'violet' }
  ];

  return (
    <div className="home-container">
      {/* Hero Background */}
      <div className="home-hero-bg"></div>

      <div className="home-content">
        {/* Your Playlists */}
        <section className="home-section">
          <h2 className="heading">Your Playlists</h2>
          <div className="playlists-grid">
            {playlists.map(pl => (
              <Link to={`/playlist/${pl.id}`} className="playlist-card-link" key={pl.id}>
                <div className="playlist-card">
                  <div className="playlist-poster">
                    <img 
                      src={getAssetUrl(pl.poster)} 
                      alt={pl.name} 
                      onError={(e) => { e.target.src = getAssetUrl('album-arts/default.jpg'); }}
                    />
                    <div className="playlist-overlay">
                      <span className="playlist-title">{pl.name}</span>
                    </div>
                  </div>
                  <button className="playPauseBtn">
                    <img src="/assets/images/ui/play.jpg" alt="Play" />
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Top Genres */}
        <section className="home-section">
          <div className="section-header">
             <h2 className="heading">Top Genres</h2>
          </div>
          <div className="genres-flex">
            {genres.map(genre => (
              <div 
                className="genre-chip" 
                key={genre.name} 
                style={{ backgroundColor: genre.color }}
              >
                {genre.name}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
