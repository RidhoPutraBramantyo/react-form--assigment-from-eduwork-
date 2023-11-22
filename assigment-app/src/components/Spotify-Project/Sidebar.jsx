import React from "react";
import { Link } from "react-router-dom";
import "../../css/Spotify-Project/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/home">Home</Link>
      <Link to="/playlist">Playlist</Link>
      <Link to="/album">Album</Link>
      <Link to="/search">Search</Link>
    </div>
  );
};
export default Sidebar;
