import React from "react";
import { Link } from "react-router-dom";
import SpotifyLogo from "../../assets/spotify-logo.svg"; // Gantilah dengan path logo Spotify yang sesuai
import "../../css/Spotify-Project/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={SpotifyLogo} alt="Spotify Logo" />
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/">Beranda</Link>
          </li>
          <li>
            <Link to="/playlist">Daftar Putar</Link>
          </li>
          <li>
            <Link to="/album">Album</Link>
          </li>
          <li>
            <Link to="/search">Cari</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
