import React from "react";
import "../../css/Spotify-Project/Player.css";

const Player = () => {
  return (
    <div className="player">
      {/* Kontrol Pemutaran (play, pause, next, previous) */}
      <div className="player__controls">
        {/* Tambahkan ikon atau tombol sesuai kebutuhan */}
        <button>Play</button>
        <button>Pause</button>
        <button>Next</button>
        <button>Previous</button>
      </div>
      {/* Informasi Lagu saat ini */}
      <div className="player__info">
        <h3>Nama Artis - Judul Lagu</h3>
      </div>
    </div>
  );
};

export default Player;
