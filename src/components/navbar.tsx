import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleLogout = () => {
    console.log("Logout realizado");
    // Adicione aqui a lógica para realizar o logout do usuário
  };

  return (
    <nav className="my-navbar d-flex p-2">
      <div className="navbar-logo-container">
        <h2>Easy Info</h2>
      </div>
      <div className="navbar-links">
        <Link to="/about" className="my-navbar-link">
          Sobre nós
        </Link>
        <Link to="/contact" className="my-navbar-link">
          Contato
        </Link>
        <Link to="/dashboards" className="my-navbar-link">
          Dashboards
        </Link>
      </div>
      <button className="my-navbar-logout" onClick={handleLogout}>
        Logout
      </button>
      <div>
        Minha foto de perfil
      </div>
    </nav>
  );
};

export default Navbar;
