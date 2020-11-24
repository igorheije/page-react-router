import React from 'react';
import { useParams } from 'react-router-dom';
import './Produto.css';
import { Head } from './Head';

export const Produto = () => {
  const [dados, setDados] = React.useState(null);
  const [error, setError] = React.useState(null);

  const { id } = useParams();
  React.useEffect(() => {
    async function fecthProduto(url) {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setDados(json);
      } catch (err) {
        setError('Um erro ocorreu');
      }
    }
    fecthProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);
  if (error) <p>{error}</p>;
  if (dados === null) return <div className="loading"></div>;
  return (
    <div className="produto animaLeft">
      <Head title={dados.nome}></Head>
      <div>
        {dados.fotos.map((foto) => (
          <img key={foto.src} src={foto.src} alt={foto.titulo} />
        ))}
      </div>

      <div>
        <h1>Produto: {dados.nome}</h1>
        <h4>Preço: R$ {dados.preco},00</h4>
        <h4>Descrição: {dados.descricao}</h4>
      </div>
    </div>
  );
};
