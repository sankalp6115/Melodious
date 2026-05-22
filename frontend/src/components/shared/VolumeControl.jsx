import React, { use, useState, useRef, useEffect } from 'react';
import { PlayerContext } from '../../contexts/PlayerContext';
import '../../styles/volumeControl.css';

const VolumeControl = () => {
  const { volume, setVolume } = use(PlayerContext);
  const [prevVolume, setPrevVolume] = useState(40);
  const [isPressed, setIsPressed] = useState(false);

  const knobRef = useRef(null);

  const totalLeds = 20;
  const arcSweep = 270;
  const startAngle = -135;

  const activeLeds = Math.ceil((volume / 100) * totalLeds);
  const knobRotation = (volume / 100) * arcSweep + startAngle;

  useEffect(() => {
    const el = knobRef.current;

    const handleWheel = (e) => {
      e.preventDefault();

      if (e.deltaY > 0) {
        setVolume(v => Math.min(100, v + 1));
      } else if (e.deltaY < 0) {
        setVolume(v => Math.max(0, v - 1));
      }
    };

    if (el) {
      el.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (el) {
        el.removeEventListener('wheel', handleWheel);
      }
    };
  }, [setVolume]);

  const handleKnobClick = () => {
    if (volume > 0) {
      setPrevVolume(volume);
      setVolume(0);
    } else {
      setVolume(prevVolume === 0 ? 40 : prevVolume);
    }
  };

  return (
    <div className="neumorphic-volume-container">
      <div className="volume-shell">
        
        <div className="led-ring">
          {Array.from({ length: totalLeds }).map((_, index) => {
            const angle = startAngle + (arcSweep / (totalLeds - 1)) * index;
            const radius = 35;
            const isActive = index < activeLeds;
            
            return (
              <div 
                key={index} 
                className={`led-dot ${isActive ? 'led-active' : 'led-inactive'}`}
                style={{
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px)`
                }}
              />
            );
          })}
        </div>

        <div 
          ref={knobRef}
          className={`volume-knob ${isPressed ? 'knob-pressed' : ''}`}
          role="slider"
          aria-label="Volume Control"
          aria-valuenow={volume}
          aria-valuemin={0}
          aria-valuemax={100}
          tabIndex={0}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => { setIsPressed(false); handleKnobClick(); }}
          onMouseLeave={() => setIsPressed(false)}
          onKeyDown={(e) => {
            if (e.key === "ArrowUp" || e.key === "ArrowRight") {
              e.preventDefault();
              setVolume(v => Math.min(100, v + 5));
            } else if (e.key === "ArrowDown" || e.key === "ArrowLeft") {
              e.preventDefault();
              setVolume(v => Math.max(0, v - 5));
            } else if (e.key === " " || e.key === "Enter") {
              e.preventDefault();
              handleKnobClick();
            }
          }}
          style={{
            transform: `rotate(${knobRotation}deg) scale(${isPressed ? 0.95 : 0.95})`
          }}
        >
          <div className="knob-indicator"></div>
        </div>

        <div className="volume-label">VOLUME</div>
      </div>
    </div>
  );
};

export default VolumeControl;