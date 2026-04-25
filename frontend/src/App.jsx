import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PlayerProvider } from './contexts/PlayerContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Playlists from './pages/Playlists';
import Artists from './pages/Artists';
import Settings from './pages/Settings';
import PlaylistDetail from './pages/PlaylistDetail';
import ArtistDetail from './pages/ArtistDetail';
import PlayerControl from './components/player/PlayerControl';
import Oneko from './components/shared/Oneko';
import EasterEggs from './components/shared/EasterEggs';

function App() {
  return (
    <PlayerProvider>
      <BrowserRouter>
        <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="explore" element={<Explore />} />
              <Route path="playlist/:id" element={<PlaylistDetail />} />
              <Route path="artist/:id" element={<ArtistDetail />} />
              <Route path="playlists" element={<Playlists />} />
              <Route path="artists" element={<Artists />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
          <PlayerControl />
          <Oneko />
          <EasterEggs />
        </div>
      </BrowserRouter>
    </PlayerProvider>
  );
}

export default App;
