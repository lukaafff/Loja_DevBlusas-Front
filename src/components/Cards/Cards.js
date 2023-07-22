// Importando as dependências necessárias do React e outras bibliotecas
import React, { useState, useEffect } from 'react';
import siteFetch from '../../axios/config';
import { Link } from 'react-router-dom';

// Importando o contexto de Favoritos para interagir com a lista de favoritos
import { useFavoritosContext } from "../favoritos/contexts/FavoritosContext";

// Importando o arquivo de estilo associado ao componente
import './Cards.css';

// Definindo o componente "Cards" que recebe duas props: categoria e pagina
const Cards = ({ categoria, pagina }) => {
  // Definindo os estados iniciais do componente usando o Hook "useState"
  const [produtos, setProdutos] = useState([]);
  const [busca, setBusca] = useState('');
  const [resultados, setResultados] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState(pagina || 1);

  // Hook "useEffect" usado para buscar os produtos da API quando o componente é montado ou quando a categoria ou a página muda
  useEffect(() => {
    const getProdutos = async () => {
      try {
        let url = `/produto`;
        if (paginaAtual) {
          url += `?pagina=${paginaAtual}`;
        }
        const response = await siteFetch.get(url);
        const data = response.data;
        setProdutos(data);
        setResultados(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProdutos();
  }, [categoria, paginaAtual]);

  // Filtrando os produtos com base na categoria selecionada
  const filteredProdutos = categoria
    ? resultados.filter((produto) => produto.categoria === categoria)
    : resultados;

  // Função assíncrona para buscar produtos com base na descrição digitada pelo usuário
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

  // Função para atualizar o estado "busca" conforme o usuário digita na caixa de busca
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setBusca(searchTerm);
  };

  // Função para lidar com o clique no botão de busca
  const handleClickBuscar = () => {
    buscarProdutos();
  };

  // Acessando o contexto de Favoritos e definindo uma função para verificar se um produto é favorito
  const { favoritos, adicionarFavorito, removerFavorito } = useFavoritosContext();
  const isFavorito = (produtoId) => {
    return favoritos.some((produto) => produto._id === produtoId);
  };

  // Função para adicionar ou remover um produto dos favoritos
  const handleFavoritoClick = (produto) => {
    if (isFavorito(produto._id)) {
      removerFavorito(produto._id);
    } else {
      adicionarFavorito(produto);
    }
  };

  // Definindo a quantidade de itens por página e o número total de páginas com base nos produtos filtrados
  const itensPorPagina = 9;
  const paginasTotais = Math.ceil(filteredProdutos.length / itensPorPagina);
  const paginas = Array.from({ length: paginasTotais }, (_, index) => index + 1);

  // Função para lidar com o clique no botão da página anterior
  const handlePaginaAnterior = () => {
    if (paginaAtual > 1) {
      setPaginaAtual(paginaAtual - 1);
    }
  };

  // Função para lidar com o clique no botão da próxima página
  const handlePaginaProxima = () => {
    if (paginaAtual < paginasTotais) {
      setPaginaAtual(paginaAtual + 1);
    }
  };

  // Função para lidar com o clique em uma página específica
  const handlePaginaEspecifica = (numPagina) => {
    setPaginaAtual(numPagina);
  };

  // Renderizando os botões de paginação
  const renderBotoesPagina = paginas.map((numPagina) => (
    <button
      key={numPagina}
      onClick={() => handlePaginaEspecifica(numPagina)}
      className={paginaAtual === numPagina ? 'btn-pagina ativo' : 'btn-pagina'}
    >
      {numPagina}
    </button>
  ));

  // Verificando se o último card deve ser excluído com base na rota atual
  const shouldExcludeLastCard = window.location.pathname === "/";
  const filteredProdutosToShow = shouldExcludeLastCard
    ? filteredProdutos.slice(0, -1)
    : filteredProdutos;

  // Renderizando o componente
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
          <button className='btn-buscar' onClick={handleClickBuscar}>Buscar</button>
        </div>
        {isLoading && <p>Carregando...</p>}
        <div className="container">
          <div className="multi-categorias">
            <div className="cont">
              <ul className="grid-produtos">
                {filteredProdutosToShow.length === 0 ? (
                  <p>Nenhum produto encontrado.</p>
                ) : (
                  filteredProdutosToShow.map((produto) => (
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
        <div className="botoes-pagina">
          <button onClick={handlePaginaAnterior} className="btn-pagina">
            Anterior
          </button>
          {renderBotoesPagina}
          <button onClick={handlePaginaProxima} className="btn-pagina">
            Próxima
          </button>
        </div>
      </div>
    </div>
  );
};

// Exportando o componente "Cards" para ser usado em outros arquivos
export default Cards;
