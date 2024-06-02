import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="my-navbar d-flex">
      <div className="navbar-logo-container">
        <Link to='/' className="my-navbar-logo">
          EASY INFO
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/sobre-nos" className="my-navbar-link">
          Sobre nós
        </Link>
        <Link to="/contato" className="my-navbar-link">
          Contato
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
