import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const handleLogout = () => {
        console.log('Logout realizado');
        // Adicione aqui a lógica para realizar o logout do usuário
    };

    return (
        <nav className="my-navbar">
            <div className="navbar-links">
                <Link to="/page-name" className="my-navbar-link">Nomes</Link>
                <Link to="/dashboards" className="my-navbar-link">Dashboards</Link>
            </div>
            <button className="my-navbar-logout" onClick={handleLogout}>Logout</button>
        </nav>
    );
};

export default Navbar;
