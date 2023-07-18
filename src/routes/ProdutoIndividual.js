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

  const calcularDesconto = (preco) => {
    return preco * 0.95; // Aplica desconto de 5%
  };

  const calcularParcela = (preco) => {
    const valorParcela = preco / 4; // Divide o preço em 4 parcelas iguais
    const valorParcelaArredondado = valorParcela.toFixed(2); // Arredonda o valor da parcela para 2 casas decimais
    
    return valorParcelaArredondado;
  };

  return (
    <div>
      {produto ? (
        <div className='product-view'>
          <div className='containerP'>
            <div className='img-produto'>
              <img src={produto.url_imagem} alt="Imagem do produto" />
            </div>
            <div className='produto-infos'>
              <div className='wrapper centered-items'>
                <div className='produto-nome'>
                  <h1 className='tituloP'>{produto.nome}</h1>
                </div>
                <div className='detalhes'>
                  <span className='descricaoP'>Descrição:</span>
                  <p>{produto.descricao}</p>
                  <span className='detalhestecnicosP'>Detalhes técnicos:</span>
                  <p>{produto.detalhes_tecnicos}</p>
                </div>
                <div className='produto-grupo'>
                  <div className='produto-btns'>
                    <div className='add-carrinho'>
                      <button className='btn-comprar'>Comprar</button>
                      <div className='fvt'>
                      <i className="bx bx-heart"></i>
                      </div>
                    </div>
                    <div className='precos'>
                      <div className='precos-box'>
                        <div className='desc-preco'>
                          <p className='preco-pix'>R$ {calcularDesconto(produto.preco).toFixed(2)} <span>no pix</span></p>
                          <div className='preco-wrapper'>
                            <div className='precoP'>
                              <p>ou <span className='preco-int ngt'>R$ {produto.preco.toFixed(2)}</span>  <span className='parcelas'>em até 4x de <span className='calcula-preco ngt'>R$ {calcularParcela(produto.preco)}</span></span></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default ProdutoIndivudial;
