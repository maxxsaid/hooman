import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand ms-5">
            Hooman
          </Link>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/" className="nav-link ms-5">
                Home
              </Link>
              <Link to="/hoomans" className="nav-link ms-5">
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
