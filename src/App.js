import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Navibar, LandingPage, Dashboard, UserProfile } from "./components";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="app">
      <Navibar />
      <div className="main">
        <div className="routes">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/hoomans" element={<Dashboard />} />
            <Route exact path="/hooman/:hoomanId" element={<UserProfile />} />
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
