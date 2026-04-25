import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import RightPanel from './RightPanel';

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '/playlists';

  return (
    <div className="layout-root">
      <Navbar />
      <div className="whole">
        <Sidebar />
        <main className="main-section">
          <section className="playlist-container">
            <Outlet />
          </section>
        </main>
        {!isHome && <RightPanel />}
      </div>
    </div>
  );
};

export default Layout;
