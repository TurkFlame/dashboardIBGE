import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faInbox } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="my-navbar d-flex">
      <div>
        <Link to='/' className="my-navbar-logo">
          Easy Info
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/sobre-nos" className="my-navbar-link">
          <FontAwesomeIcon icon={faUserGroup} className="icon-navbar" />
          Sobre nós
        </Link>
        <Link to="/contato" className="my-navbar-link">
          <FontAwesomeIcon icon={faInbox} className="icon-navbar" />
          Contato
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
