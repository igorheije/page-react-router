import React from 'react';
import foto from '../img/foto.jpg';
import './Contato.css';
import { Head } from './Head';

export const Contato = () => {
  return (
    <div className="contato animaLeft">
      <Head title="Contato" />
      <img src={foto} alt="contato" />
      <div>dados</div>
    </div>
  );
};
