import React from 'react';
import { Link } from 'react-router-dom';
import './Produtos.css';

export const Produtos = () => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto`)
      .then((res) => res.json())
      .then((json) => setDados(json));
  }, []);

  return (
    <div className="page-produtos  animaLeft">
      {dados &&
        dados.map((dados) => (
          <Link to={`produto/${dados.id}`} key={dados.id} className="produtos">
            <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
            <h4>{dados.nome}</h4>
          </Link>
        ))}
    </div>
  );
};
