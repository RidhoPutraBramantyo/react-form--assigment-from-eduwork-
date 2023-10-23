import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to my App</h1>
      <p>Here can check my Assigment</p>
      <div>
        <Link to="/registration">
          <button>Registration Page</button>
        </Link>
        <Link to="/signin">
          <button>Sign In</button>
        </Link>{" "}
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
