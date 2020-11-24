import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className="link">
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink to="contato" className="link">
            Contato
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
