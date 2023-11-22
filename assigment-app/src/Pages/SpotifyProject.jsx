// SpotifyProject.jsx
import React from "react";
import Header from "../components/Spotify-Project/Header";
import Sidebar from "../components/Spotify-Project/Sidebar";
import Player from "../components/Spotify-Project/Player";
import Home from "../components/Spotify-Project/Home";
import Playlist from "../components/Spotify-Project/Playlist";
import Album from "../components/Spotify-Project/Album";
import Search from "../components/Spotify-Project/Search";
import Footer from "../components/Spotify-Project/Footer";
// import "../css/Spotify-Project/SpotifyProject.css"; // Sesuaikan dengan path CSS Anda

const SpotifyProject = () => {
  return (
    // <div className="container">
    //   <Header />
    //   <div className="app__body">
    //     <Sidebar />
    //     <div className="content">

    //       <Home />
    //     </div>
    //   </div>
    //   <Footer />
    //   <Player />
    // </div>
    <center className="container">
      <header>Header</header>
      <div className="content">
        <aside>Aside</aside>
        <nav>Nav</nav>
      </div>
      <main>Main</main>
      <footer>Footer</footer>
    </center>
  );
};

export default SpotifyProject;
