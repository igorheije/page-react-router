import React from 'react';
import { useParams } from 'react-router-dom';
import './Produto.css';
export const Produto = () => {
  const [dados, setDados] = React.useState(null);
  const { id } = useParams();
  React.useEffect(() => {
    async function fecthProduto(url) {
      const response = await fetch(url);
      const json = await response.json();
      setDados(json);
    }
    fecthProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);
  if (dados === null) return null;
  return (
    <div className="produto">
      <img src={dados.fotos[0].src} alt={dados.fotos.titulo} />
      <div>
        <h4>Produto: {dados.nome}</h4>
        <p>Preço: R$ {dados.preco},00</p>
      </div>
    </div>
  );
};
