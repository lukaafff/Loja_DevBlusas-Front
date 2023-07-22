import React from "react";
import { useFavoritosContext } from "./FavoritosContext";

const Favoritos = () => {
  const { favoritos } = useFavoritosContext();

  return (
    <div className="Fcontainer">
      <h1>Favoritos</h1>
      <ul className="grid-produtos">
        {favoritos.length === 0 ? (
          <p>Nenhum produto favorito encontrado.</p>
        ) : (
          favoritos.map((produto) => (
            <li className="item-produto" key={produto._id}>
              <div className="img">
                <img src={produto.url_imagem} alt="Imagem do produto" />
                <div className="info-produto">
                  <h3>{produto.nome}</h3>
                  <span>R$ {Number(produto.preco).toFixed(2)}</span>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Favoritos;
