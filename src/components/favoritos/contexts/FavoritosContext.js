import React, { createContext, useContext, useState } from "react";

const FavoritosContext = createContext();

export const useFavoritosContext = () => {
  return useContext(FavoritosContext);
};

const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);

  const adicionarFavorito = (produto) => {
    setFavoritos((prevFavoritos) => [...prevFavoritos, produto]);
  };

  const removerFavorito = (produtoId) => {
    setFavoritos((prevFavoritos) =>
      prevFavoritos.filter((produto) => produto._id !== produtoId)
    );
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, adicionarFavorito, removerFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export default FavoritosProvider;