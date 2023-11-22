// Player.jsx
import React, { useState } from "react";
import { FiSkipBack, FiPlay, FiPause, FiSkipForward } from "react-icons/fi";
import "../../css/Spotify-Project/Player.css";

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <div className="player">
      <div className="player__info">
        <div className="player__details">
          <div className="player__artist">
            <h3>Nama Artis</h3>
          </div>

          <div className="player__thumbnail">
            {/* Letakkan gambar atau thumbnail di sini */}
            <img src="path/to/your/image.jpg" alt="Nama Artis - Judul Lagu" />
          </div>

          <div className="player__song">
            <h3>Judul Lagu</h3>
          </div>
        </div>
      </div>

      <div className="player__controls">
        <button className="player__control-btn" onClick={handleTogglePlay}>
          {isPlaying ? <FiPause /> : <FiPlay />}
        </button>
        <button className="player__control-btn">
          <FiSkipBack />
        </button>
        <button className="player__control-btn">
          <FiSkipForward />
        </button>
      </div>
    </div>
  );
};

export default Player;
