import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [greeting, setGreeting] = useState('');
  const [name, setName] = useState("Sankalp");
  useEffect(() => {
    const hour = new Date().getHours();
    console.log(hour);
    if (hour >= 5 && hour < 12) setGreeting("Good Morning");
    else if (hour >= 12 && hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);

  return (
    <section className="left-section">
      <div className="greeting-div">
        <h1 className="greeting">{greeting} <br></br> {name}</h1>
        <span>What do you want to hear today ?</span>
      </div>

      <h4 className="left-menu-heading">Menu</h4>
      <NavLink viewTransition className="left-menu-option" to="/explore">
        <img src="/assets/images/ui/cd.png" alt="" /> Explore
      </NavLink>
      <NavLink viewTransition className="left-menu-option" to="/">
        <img src="/assets/images/ui/playlist.png" alt="" /> Playlists
      </NavLink>
      <NavLink viewTransition className="left-menu-option" to="/artists">
        <img src="/assets/images/ui/mic.png" alt="" /> Artists
      </NavLink>
      <NavLink viewTransition className="left-menu-option" to="/radio">
        <img src="/assets/images/ui/radio.png" alt="" /> Enjoy
      </NavLink>
      <NavLink viewTransition className="left-menu-option" to="/test">
        <img src="/assets/images/ui/cd.png" alt="" /> Test
      </NavLink>

      <h4 className="left-menu-heading">Library</h4>
      <NavLink viewTransition className="left-menu-option" to="/recent">
        <img src="/assets/images/ui/recent.png" alt="" /> Recent
      </NavLink>
      <NavLink viewTransition className="left-menu-option" to="/favourites">
        <img src="/assets/images/ui/heart.png" alt="" /> Favourites
      </NavLink>
      <NavLink viewTransition className="left-menu-option" to="/upload">
        <img src="/assets/images/ui/upload.png" alt="" /> Upload
      </NavLink>
    </section>
  );
};

export default Sidebar;
