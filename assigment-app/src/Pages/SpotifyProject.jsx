// SpotifyProject.jsx
import React from "react";
import Header from "../components/Spotify-Project/Header";
import Sidebar from "../components/Spotify-Project/Sidebar";
import Player from "../components/Spotify-Project/Player";
import Home from "../components/Spotify-Project/Home";
import Playlist from "../components/Spotify-Project/Playlist";
import Album from "../components/Spotify-Project/Album";
import Search from "../components/Spotify-Project/Search";

const SpotifyProject = () => {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        {/* Routes for Playlist, Album, Search, and Home */}
      </div>
      <Player />
    </div>
  );
};

export default SpotifyProject;
