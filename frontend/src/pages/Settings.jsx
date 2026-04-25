import React, { useContext, useEffect, useState } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';

const Settings = () => {
  const { setPlaybackRate, playbackRate } = useContext(PlayerContext);
  const [isOnekoEnabled, setIsOnekoEnabled] = useState(false);
  const [isSpeedEnabled, setIsSpeedEnabled] = useState(false);

  // Broadcast Channel for communication with main music player (mimicking legacy broadcast setup if needed, 
  // though Context is better within the same app, I'll keep the logic for compatibility if other tabs open)
  useEffect(() => {
    const channel = new BroadcastChannel("music_channel");
    
    channel.onmessage = (event) => {
      const { action, value } = event.data;
      if (action === "toggleOneko") setIsOnekoEnabled(value);
      if (action === "toggleSpeedControl") setIsSpeedEnabled(value);
    };

    return () => channel.close();
  }, []);

  const toggleOneko = () => {
    const newVal = !isOnekoEnabled;
    setIsOnekoEnabled(newVal);
    const channel = new BroadcastChannel("music_channel");
    channel.postMessage({ action: "toggleOneko", value: newVal });
    channel.close();
  };

  const toggleSpeed = () => {
    const newVal = !isSpeedEnabled;
    setIsSpeedEnabled(newVal);
    const channel = new BroadcastChannel("music_channel");
    channel.postMessage({ action: "toggleSpeedControl", value: newVal });
    channel.close();
  };

  return (
    <section className="settings-page" style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Music Player Settings</h1>
      
      <div className="setting" style={{ 
        background: 'rgba(255, 255, 255, 0.1)', 
        padding: '20px', 
        borderRadius: '10px', 
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <label style={{ fontSize: '18px' }}>Oneko Cat:</label>
        <button 
          onClick={toggleOneko}
          style={{
            padding: '10px 20px',
            backgroundColor: isOnekoEnabled ? '#ff4d4d' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          {isOnekoEnabled ? 'Disable Oneko' : 'Enable Oneko'}
        </button>
      </div>

      <div className="setting" style={{ 
        background: 'rgba(255, 255, 255, 0.1)', 
        padding: '20px', 
        borderRadius: '10px', 
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label style={{ fontSize: '18px' }}>Speed Control UI:</label>
          <button 
            onClick={toggleSpeed}
            style={{
              padding: '10px 20px',
              backgroundColor: isSpeedEnabled ? '#ff4d4d' : '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {isSpeedEnabled ? 'Hide Speed Control' : 'Show Speed Control'}
          </button>
        </div>
        
        {isSpeedEnabled && (
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <span style={{ fontSize: '16px' }}>Current Playback Speed: {playbackRate}x</span>
          </div>
        )}
      </div>

      <p style={{ opacity: 0.6, textAlign: 'center', marginTop: '40px' }}>
        Settings are synced across active player windows via Broadcast Channel.
      </p>
    </section>
  );
};

export default Settings;
