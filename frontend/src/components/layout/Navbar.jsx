import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PlayerContext } from '../../contexts/PlayerContext';
import VoiceControl from '../shared/VoiceControl';
import { TegakiRenderer } from 'tegaki';
// import bundle from 'tegaki/fonts/caveat';
import bundle from '../../../cookie/bundle.ts';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const { searchQuery, setSearchQuery } = useContext(PlayerContext);
  const [localSearch, setLocalSearch] = useState(searchQuery);

  // Debounce search query
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchQuery(localSearch);
    }, 400);

    return () => clearTimeout(handler);
  }, [localSearch, setSearchQuery]);

  const handleLogoClick = () => {
    const newCount = clickCount + 1;
    console.log(newCount);
    if(newCount == 5){
      console.log("Drum mode activated");
    }
    setClickCount(newCount);
    if (newCount === 5) {
      setClickCount(0);
    }
  };

  return (
    <header className="main-header">
      {/* <div className="title" onClick={handleLogoClick}>
        <span className="logo-text">Melodious</span>
      </div> */}
      <div className="header-center">
      <TegakiRenderer onClick={handleLogoClick} font={bundle}> Melodious </TegakiRenderer>
      </div>

      <div className="header-right">
        <div className="search-container">
          <input 
            type="text" 
            className="search-input" 
            name="searchBar" 
            placeholder="Type Here to Search" 
            id="search"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
          />
          <button className="search-icon-btn">
            <img src="/assets/images/ui/search.png" alt="Search" />
          </button>
        </div>
        <VoiceControl />

        <section className="profile">
          <div className="user-avatar" id="avatar-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <img className="user-avatar" src="/assets/images/ui/user-avatar.png" alt="user-avatar" />
          </div>
          <div className="profile_menu" id="profile-menu" style={{ visibility: menuOpen ? 'visible' : 'hidden', opacity: menuOpen ? 1 : 0 }}>
            <Link to="/settings" className="profile_menu_option">Settings</Link>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Navbar;
