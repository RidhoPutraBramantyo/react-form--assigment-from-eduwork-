import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignUp from "./components/Part/SignUp";
import SignIn from "./components/Part/SignIn";
import RegistrationForm from "./components/Part/RegistrationForm";
import WithFormik from "./components/Part/WithFormik";

import NewsApp from "./Pages/NewsApp";
import SpotifyProject from "./Pages/SpotifyProject";
import Redux from "./components/Redux/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/withformik" element={<WithFormik />} />
        <Route path="/news" element={<NewsApp />} />
        <Route path="/spotify-project" element={<SpotifyProject />} />
        <Route path="/redux" element={<Redux />} />
      </Routes>
    </Router>
  );
}

export default App;
