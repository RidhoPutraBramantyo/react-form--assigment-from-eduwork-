import React from "react";
import { Link } from "react-router-dom";
import "../../css/Spotify-Project/Sidebar.css";
const Sidebar = () => {
  return (
    <aside className="sidebar">
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
    </aside>
  );
};

export default Sidebar;
