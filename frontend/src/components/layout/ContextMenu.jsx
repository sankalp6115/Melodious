import React, { useContext, useState, useEffect } from 'react';
import { PlayerContext } from '../../contexts/PlayerContext';
import "../../styles/ContextMenu.css";

const ContextMenu = () => {
    const { songs, addToQueueNext, addToQueueLast, playSong } = useContext(PlayerContext);
    const [menuData, setMenuData] = useState({
        visible: false,
        x: 0,
        y: 0,
        song: null
    });

    useEffect(() => {
        const handleContextMenu = (e) => {
            // Find if we clicked on a song row
            const songRow = e.target.closest('[data-song-id]');
            
            if (songRow) {
                e.preventDefault();
                const songId = songRow.getAttribute('data-song-id');
                const song = songs.find(s => String(s.id) === String(songId));
                
                if (song) {
                    setMenuData({
                        visible: true,
                        x: e.pageX,
                        y: e.pageY,
                        song: song
                    });
                }
            } else {
                // If not clicking on a song, just close the menu
                setMenuData(prev => ({ ...prev, visible: false }));
            }
        };

        const handleClick = () => {
            setMenuData(prev => ({ ...prev, visible: false }));
        };

        window.addEventListener("contextmenu", handleContextMenu);
        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("contextmenu", handleContextMenu);
            window.removeEventListener("click", handleClick);
        };
    }, [songs]);

    if (!menuData.visible || !menuData.song) return null;

    return (
        <div 
            className='context-menu-container' 
            style={{ 
                top: menuData.y, 
                left: menuData.x,
                position: 'fixed' // Ensure it uses viewport coordinates if needed, or stick to e.pageX/Y
            }}
        >
            <div className="context-menu-header">
                {menuData.song.title}
            </div>
            <span className='context-menu-option' onClick={() => playSong(songs.indexOf(menuData.song), songs)}>
                <span className="menu-icon"></span> Play Now
            </span>
            <span className='context-menu-option' onClick={() => addToQueueNext(menuData.song)}>
                <span className="menu-icon"></span> Play Next
            </span>
            <span className='context-menu-option' onClick={() => addToQueueLast(menuData.song)}>
                <span className="menu-icon"></span> Add to Queue
            </span>
        </div>
    );
};

export default ContextMenu;