import React from "react";
import { Link } from "react-router-dom";
import video from "../assets/SeaOfQuanta.mp4";
import "../css/HomePage.css"; // Impor file CSS Anda

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="video-background">
        <video autoPlay muted loop className="video">
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <div className="content">
        <h1 className="welcome-heading">Welcome to My App</h1>
        <p className="app-description">Here you can check my Assignment</p>
        <div className="button-container">
          <Link to="/news">
            <button className="news-portal-button">News App</button>
          </Link>{" "}
          <Link to="/spotify-project">
            <button className="spotify-project-button">Spotify Project</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
