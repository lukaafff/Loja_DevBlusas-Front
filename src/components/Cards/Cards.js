import React, { useState, useEffect } from 'react';
import siteFetch from '../../axios/config';
import { Link } from 'react-router-dom';

import { useFavoritosContext } from "../favoritos/contexts/FavoritosContext";

import './Cards.css';

const Cards = ({ categoria }) => {
  const [produtos, setProdutos] = useState([]);
  const [busca, setBusca] = useState('');
  const [resultados, setResultados] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getProdutos = async () => {
      try {
        const response = await siteFetch.get('/produto');
        const data = response.data;
        setProdutos(data);
        setResultados(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProdutos();
  }, []);

  const buscarProdutos = async () => {
    if (busca) {
      setIsLoading(true);
      try {
        const response = await siteFetch.get(`/produto/busca?descricao=${busca}`);
        const data = response.data;
        setResultados(data);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    } else {
      setResultados(produtos);
    }
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setBusca(searchTerm);
  };

  const handleClickBuscar = () => {
    buscarProdutos();
  };

  const { favoritos, adicionarFavorito, removerFavorito } = useFavoritosContext();

  const isFavorito = (produtoId) => {
    return favoritos.some((produto) => produto._id === produtoId);
  };

  const handleFavoritoClick = (produto) => {
    if (isFavorito(produto._id)) {
      removerFavorito(produto._id);
    } else {
      adicionarFavorito(produto);
    }
  };

  const filteredProdutos = categoria
    ? resultados.filter((produto) => produto.categoria === categoria)
    : resultados;

  return (
    <div>
      <h1 className="title">{categoria ? categoria : 'Todos os produtos'}</h1>
      <div className="categorias">
        <div className="busca-input">
          <input
            type="search"
            className="input"
            value={busca}
            onChange={handleSearch}
          />
          <label>Busca</label>
        </div>
        <button onClick={handleClickBuscar}>Buscar</button>
        {isLoading && <p>Carregando...</p>}
        <div className="container">
          <div className="multi-categorias">
            <div className="cont">
              <ul className="grid-produtos">
                {filteredProdutos.length === 0 ? (
                  <p>Nenhum produto encontrado.</p>
                ) : (
                  filteredProdutos.map((produto) => (
                    <li className="item-produto" key={produto._id}>
                      <div className="cont">
                        <div className="img">
                          <Link to={`/produto/${produto._id}`}>
                            <img src={produto.url_imagem} alt="Imagem do produto" />
                          </Link>
                        </div>
                        <div className="infos">
                          <div className="top-card">
                            <div className="avaliacao">
                              <i className="bx bxs-star"></i>
                              <i className="bx bxs-star"></i>
                              <i className="bx bxs-star"></i>
                              <i className="bx bxs-star"></i>
                              <i className="bx bxs-star"></i>
                            </div>
                            <div className="favorito" onClick={() => handleFavoritoClick(produto)}>
                               <i className={isFavorito(produto._id) ? "bx bxs-heart" : "bx bx-heart"}></i>
                            </div>
                          </div>

                          <div className="info-produto">
                            <h3>{produto.nome}</h3>
                            <span>R$ {Number(produto.preco).toFixed(2)}</span>
                          </div>
                          <div className="btn-carrinho">
                            <a href="#">
                              <i className="bx bx-cart-add"></i> Adicionar no carrinho
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;