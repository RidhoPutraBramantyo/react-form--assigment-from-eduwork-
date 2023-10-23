import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/registration" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
