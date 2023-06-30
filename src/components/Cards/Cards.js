import React, { useState, useEffect } from 'react';
import siteFetch from '../../axios/config';
import { Link } from 'react-router-dom';

import './Cards.css';

const Cards = ({ subId }) => {
  const [produtos, setProdutos] = useState([]);

  const getProdutos = async () => {
    try {
      const response = await siteFetch.get('/produto');
      const data = response.data;
      setProdutos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProdutos();
  }, []);

  const filteredProdutos = subId ? produtos.filter((produto) => produto.subId === subId) : produtos;

  return (
    <div>
      <h1 className="title">{subId ? subId : 'Todos os produtos'}</h1>
      <div className="categorias">
        <div className="container">
          <div className="multi-categorias">
            <div className="cont">
              <ul className="grid-produtos">
                {filteredProdutos.length === 0 ? (
                  <p>Carregando...</p>
                ) : (
                  filteredProdutos.map((produto) => (
                    <li className="item-produto" key={produto.id}>
                      <div className="cont">
                        <div className="img">
                          <a href="#">
                            <img src={require('../../images/pdt1.jpg')} alt="Imagem do produto" />
                          </a>
                        </div>
                        <div className="infos">
                          <div className="top-card">
                            <div className="avaliacao">
                              <i className="bx bx-star"></i>
                              <i className="bx bx-star"></i>
                              <i className="bx bx-star"></i>
                              <i className="bx bx-star"></i>
                              <i className="bx bx-star"></i>
                            </div>
                            <div className="favorito">
                              <i className="bx bx-heart"></i>
                            </div>
                          </div>

                          <div className="info-produto">
                            <h3>{produto.nome}</h3>
                            <span>R$ {produto.preco}</span>
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
