import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Navbar, LandingPage, Dashboard, UserProfile } from "./components";
import "./App.css";


const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <div className="routes">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/hoomans" element={<Dashboard />} />
            <Route path="/hooman/:id" element={<UserProfile />} />
          </Routes>
        </div>
      </div>
      <div className="footer">
        <h3 className="footer-slogan">
          Hooman
          <br />
          All rights reserved.
        </h3>
      </div>
    </div>
  );
};

export default App;
