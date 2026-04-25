import React, { useContext, useState } from 'react';
import { PlayerContext } from '../../contexts/PlayerContext';
import '../../styles/volumeControl.css'; // Let's isolate this massive CSS into its own file

const VolumeControl = () => {
  const { volume, setVolume } = useContext(PlayerContext);
  const [prevVolume, setPrevVolume] = useState(40); // Backup volume when muted
  const [isPressed, setIsPressed] = useState(false);

  // Total amount of LEDs wrapping the knob
  const totalLeds = 40;
  
  // A 270-degree arc around the knob, starting at -135deg and ending at +135deg
  const arcSweep = 270;
  const startAngle = -135;

  // Calculate active LEDs based on current volume level (0-100)
  const activeLeds = Math.ceil((volume / 100) * totalLeds);

  // Calculate Knob Rotation (-135deg = 0%, +135deg = 100%)
  const knobRotation = (volume / 100) * arcSweep + startAngle;

  const handleWheel = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.deltaY > 0) {
      // Scroll Up -> Increase Volume
      setVolume(Math.min(100, volume + 0.75));
    } else if (e.deltaY < 0) {
      // Scroll Down -> Decrease Volume
      setVolume(Math.max(0, volume - 0.75));
    }
  };

  const handleKnobClick = () => {
    if (volume > 0) {
      setPrevVolume(volume);
      setVolume(0); // Mute
    } else {
      setVolume(prevVolume === 0 ? 40 : prevVolume);
    }
  };

  return (
    <div className="neumorphic-volume-container">
      {/* Outer base shell matching the image */}
      <div className="volume-shell">
        
        {/* Ring of LEDs */}
        <div className="led-ring">
          {Array.from({ length: totalLeds }).map((_, index) => {
            // Distribute LEDs across the arc
            const angle = startAngle + (arcSweep / (totalLeds - 1)) * index;
            // Radius controls distance from center (shell is 65px width)
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

        {/* Central Rotary Knob */}
        <div 
          className={`volume-knob ${isPressed ? 'knob-pressed' : ''}`}
          onWheel={handleWheel}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => { setIsPressed(false); handleKnobClick(); }}
          onMouseLeave={() => setIsPressed(false)}
          style={{
            transform: `rotate(${knobRotation}deg) scale(${isPressed ? 0.95 : 0.95})`
          }}
        >
          {/* Subtle indicator dot on the knob itself */}
          <div className="knob-indicator"></div>
        </div>

        <div className="volume-label">VOLUME</div>
      </div>
    </div>
  );
};

export default VolumeControl;
