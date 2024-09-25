import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const loggedInUser = localStorage.getItem('loggedInUser'); // Sem JSON.parse

  return (
    <header>
      <div className="logo-container">
        <img src="/images/formulaelogo.png" alt="Fórmula E Logo" className="logo" />
      </div>
      <nav>
        <ul className="navbar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/events">Eventos</Link></li>
          <li><Link to="/gallery">Galeria</Link></li>
          {!loggedInUser ? (
            <li><Link to="/login">Login</Link></li>
          ) : (
            <li><Link to="/account">Minha Conta</Link></li> // Exibe "Minha Conta" se o usuário estiver logado
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
