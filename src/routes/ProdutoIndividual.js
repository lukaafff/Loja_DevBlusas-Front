import React, { useState, useEffect } from 'react';
import siteFetch from '../axios/config';
import { useParams, Link } from 'react-router-dom';

const ProdutoIndivudial = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);

  const getProduto = async () => {
    try {
      const response = await siteFetch.get(`/produto/${id}`);
      const data = response.data;
      setProduto(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduto();
  }, [id]);

  return (
    <div>
      {produto ? (
        <div>
          <h1>{produto.nome}</h1>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
  
};

export default ProdutoIndivudial;