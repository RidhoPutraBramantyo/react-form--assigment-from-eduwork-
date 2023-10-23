import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import RegistrationForm from "./components/RegistrationForm";
import WithFormik from "./components/WithFormik";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/withformik" element={<WithFormik />} />
      </Routes>
    </Router>
  );
}

export default App;
