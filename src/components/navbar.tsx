import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="my-navbar d-flex p-2">
      <div className="navbar-logo-container">
        <Link to='/' className="my-navbar-logo">
          EASY INFO
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/about" className="my-navbar-link">
          Sobre nós
        </Link>
        <Link to="/contact" className="my-navbar-link">
          Contato
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
