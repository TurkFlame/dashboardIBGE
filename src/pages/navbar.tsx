import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const handleLogout = () => {
        console.log('Logout realizado');
        // Adicione aqui a lógica para realizar o logout do usuário
    };

    return (
        <nav className="navbar">
            <div className="navbar-links">
                <Link to="/" className="navbar-link">Nomes</Link>
                <Link to="/dashboards" className="navbar-link">Dashboards</Link>
            </div>
            <button className="navbar-logout" onClick={handleLogout}>Logout</button>
        </nav>
    );
};

export default Navbar;
