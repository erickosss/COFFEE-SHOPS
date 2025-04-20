import React from 'react';
import logo from '../assets/logo.png';

const Header = () => (
  <header className="header">
    <img src={logo} alt="Coffee Shops Tia Rosa" />
    <nav>
      <a href="#home">Início</a>
      <a href="#menu">Cardápio</a>
      <a href="#about">Sobre</a>
      <a href="#contact">Contato</a>
    </nav>
  </header>
);

export default Header;