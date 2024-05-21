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
                <Link to="#" className="navbar-link">Info1</Link>
                <Link to="#" className="navbar-link">Info2</Link>
                <Link to="#" className="navbar-link">Info3</Link>
                <Link to="#" className="navbar-link">Info4</Link>
            </div>
            <button className="navbar-logout" onClick={handleLogout}>Logout</button>
        </nav>
    );
};

export default Navbar;
