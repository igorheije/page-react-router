import React from 'react';
import foto from '../img/foto.jpg';
import './Contato.css';
import { Head } from './Head';

export const Contato = () => {
  return (
    <div className="contato animaLeft">
      <Head title="Contato" />
      <img src={foto} alt="contato" />
      <div className="dados">
        <h1>Entre em contato:</h1>
        <p>Nome: Igor Heije</p>
        <p>Email: igorhe@gmail.com</p>
        <p>telefone: 9999999999</p>
      </div>
    </div>
  );
};
