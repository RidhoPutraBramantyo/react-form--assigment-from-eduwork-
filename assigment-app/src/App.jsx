import React from "react";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<HomePage />} />
      </Router>
    </BrowserRouter>
  );
}

export default App;
