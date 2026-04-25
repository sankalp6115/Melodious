import React, { useState, useEffect, useRef } from 'react';

const EasterEggs = () => {
  const [cheatMode, setCheatMode] = useState(false);
  const [sequence, setSequence] = useState([]);
  const konami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
  
  const rainAudio = useRef(new Audio("/assets/sounds/rain.mp3"));

  useEffect(() => {
    rainAudio.current.loop = true;
    rainAudio.current.volume = 0.5;

    const handleKeydown = (e) => {
      setSequence(prev => {
        const newSeq = [...prev, e.key].slice(-10);
        if (JSON.stringify(newSeq) === JSON.stringify(konami)) {
          setCheatMode(curr => !curr);
          return [];
        }
        return newSeq;
      });
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  useEffect(() => {
    if (cheatMode) {
      rainAudio.current.play().catch(e => console.log("Rain sound blocked:", e));
    } else {
      rainAudio.current.pause();
      rainAudio.current.currentTime = 0;
    }
  }, [cheatMode]);

  return (
    <>
      {cheatMode && (
        <div className="cheat-code" style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            zIndex: 9999, pointerEvents: 'none', background: 'rgba(0,0,0,0.6)'
        }}>
            <div style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                color: 'cyan', fontSize: '3rem', fontWeight: 'bold', textShadow: '0 0 10px cyan',
                textAlign: 'center'
            }}>
                🌧️ RAIN MODE ACTIVE 🌧️<br/>
                <span style={{ fontSize: '1.2rem' }}>Konami Code Detected</span>
            </div>
            {/* Visual rain filter */}
            <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                boxShadow: 'inset 0 0 100px rgba(0,0,0,0.8)',
                background: 'url("https://media0.giphy.com/media/v1.Y2lkPTZjMDliOTUyMmRoZXh5MjVwcms1ZzVsdWV6aWNla2cyZ3VwdTM2dmFlMGNlY3c3dSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VcUA2cirkzfofFt1BM/200.gif")'
            }}></div>
        </div>
      )}
    </>
  );
};

// We will export a simple handler for the logo click egg as well
export const handleLogoClick = (count) => {
    if (count === 5) {
        alert("Congo! You Unlocked the Easter Egg!");
        // Logic for unlocking drum kit could go here
        return true;
    }
    return false;
};

export default EasterEggs;
