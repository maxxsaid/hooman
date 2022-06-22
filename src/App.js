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
        <figure className="text-center">
          <blockquote className="blockquote">
            <p>Hooman</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            by <cite><a href="https://www.maxsaid.com" target="blank" className="footer-name">Max Said</a></cite>
            <br />
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default App;
