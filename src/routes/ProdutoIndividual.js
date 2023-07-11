import React, { useState, useEffect } from 'react';
import siteFetch from '../axios/config';
import { useParams, Link } from 'react-router-dom';
import "./ProdutoIndividual.css";

const ProdutoIndivudial = () => {
  const { _id } = useParams();
  const [produto, setProduto] = useState(null);

  const getProduto = async () => {
    try {
      const response = await siteFetch.get(`/produto/${_id}`);
      const data = response.data;
      setProduto(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduto();
  }, [_id]);

  return (
    <div>
      {produto ? (
        <div>
          <div className="imgP">
            <img src={produto.url_imagem} alt="Imagem do produto" />
          </div>
          <h1 className='titulo'>{produto.nome}</h1>
          <p>{produto.descricao}</p>
          <p>{produto.detalhes_tecnicos}</p>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
  
};

export default ProdutoIndivudial;