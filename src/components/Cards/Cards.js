import { Component } from "react";
import "./Cards.css";

class Cards extends Component {
    render(){
        return(
            <div className="categorias">
                <div className="container">
                    <div className="title">
                        <h1>Todos os produtos</h1>
                    </div>
                </div>

                <div className="multi-categorias">
                    <div className="cont">
                        <ul className="grid-produtos">
                            <li className="item-produto">
                                <div className="cont">
                                    <div className="img">
                                        <a href="#"><img src={require('../../images/pdt1.jpg')}></img></a>
                                    </div>
                                    <div className="infos">
                                        <div className="top-card">
                                            <div className="avaliacao">
                                                <i className='bx bx-star'></i>
                                                <i className='bx bx-star'></i>
                                                <i className='bx bx-star'></i>
                                                <i className='bx bx-star'></i>
                                                <i className='bx bx-star'></i>
                                            </div>
                                            <div className="favorito">
                                                <i className='bx bx-heart'></i>
                                            </div>
                                        </div>
                                        
                                        <div className="info-produto">
                                            <h3>Nome produto</h3>
                                            <span>R$ 189,90</span>
                                        </div>
                                        <div className="btn-carrinho">
                                            <a href="#">
                                                <i className='bx bx-cart-add'></i> Adicionar no carrinho
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="item-produto">
                                <div className="cont">
                                    <div className="img">
                                        <a href="#"><img src={require('../../images/pdt1.jpg')}></img></a>
                                    </div>
                                    <div className="infos">
                                        <div className="top-card">
                                            <div className="avaliacao">
                                                <i className='bx bx-star'></i>
                                                <i className='bx bx-star'></i>
                                                <i className='bx bx-star'></i>
                                                <i className='bx bx-star'></i>
                                                <i className='bx bx-star'></i>
                                            </div>
                                            <div className="favorito">
                                                <i className='bx bx-heart'></i>
                                            </div>
                                        </div>
                                        
                                        <div className="info-produto">
                                            <h3>Nome produto</h3>
                                            <span>R$ 189,90</span>
                                        </div>
                                        <div className="btn-carrinho">
                                            <a href="#">
                                                <i className='bx bx-cart-add'></i> Adicionar no carrinho
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="item-produto">
                                <div className="cont">
                                    <div className="img">
                                        <a href="#"><img src={require('../../images/pdt1.jpg')}></img></a>
                                    </div>
                                    <div className="infos">
                                        <div className="top-card">
                                            <div className="avaliacao">
                                                <i className='bx bx-star'></i>
                                                <i className='bx bx-star'></i>
                                                <i className='bx bx-star'></i>
                                                <i className='bx bx-star'></i>
                                                <i className='bx bx-star'></i>
                                            </div>
                                            <div className="favorito">
                                                <i className='bx bx-heart'></i>
                                            </div>
                                        </div>
                                        
                                        <div className="info-produto">
                                            <h3>Nome produto</h3>
                                            <span>R$ 189,90</span>
                                        </div>
                                        <div className="btn-carrinho">
                                            <a href="#">
                                                <i className='bx bx-cart-add'></i> Adicionar no carrinho
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="item-produto">
                                <div className="cont">
                                    <div className="img">
                                        <a href="#"><img src={require('../../images/pdt1.jpg')}></img></a>
                                    </div>
                                    <div className="infos">
                                        <div className="top-card">
                                            <div className="avaliacao">
                                                <i className='bx bx-star'></i>
                                                <i className='bx bx-star'></i>
                                                <i className='bx bx-star'></i>
                                                <i className='bx bx-star'></i>
                                                <i className='bx bx-star'></i>
                                            </div>
                                            <div className="favorito">
                                                <i className='bx bx-heart'></i>
                                            </div>
                                        </div>
                                        
                                        <div className="info-produto">
                                            <h3>Nome produto</h3>
                                            <span>R$ 189,90</span>
                                        </div>
                                        <div className="btn-carrinho">
                                            <a href="#">
                                                <i className='bx bx-cart-add'></i> Adicionar no carrinho
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="item-produto">
                                <div className="cont">
                                    <div className="img">
                                        <a href="#"><img src={require('../../images/pdt1.jpg')}></img></a>
                                    </div>
                                    <div className="infos">
                                        <div className="top-card">
                                            <div className="avaliacao">
                                                <i className='bx bx-star'></i>
                                                <i className='bx bx-star'></i>
                                                <i className='bx bx-star'></i>
                                                <i className='bx bx-star'></i>
                                                <i className='bx bx-star'></i>
                                            </div>
                                            <div className="favorito">
                                                <i className='bx bx-heart'></i>
                                            </div>
                                        </div>
                                        
                                        <div className="info-produto">
                                            <h3>Nome produto</h3>
                                            <span>R$ 189,90</span>
                                        </div>
                                        <div className="btn-carrinho">
                                            <a href="#">
                                                <i className='bx bx-cart-add'></i> Adicionar no carrinho
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="item-produto">
                                <div className="cont">
                                    <div className="img">
                                        <a href="#"><img src={require('../../images/pdt1.jpg')}></img></a>
                                    </div>
                                    <div className="infos">
                                        <div className="top-card">
                                            <div className="avaliacao">
                                                <i className='bx bx-star'></i>
                                                <i className='bx bx-star'></i>
                                                <i className='bx bx-star'></i>
                                                <i className='bx bx-star'></i>
                                                <i className='bx bx-star'></i>
                                            </div>
                                            <div className="favorito">
                                                <i className='bx bx-heart'></i>
                                            </div>
                                        </div>
                                        
                                        <div className="info-produto">
                                            <h3>Nome produto</h3>
                                            <span>R$ 189,90</span>
                                        </div>
                                        <div className="btn-carrinho">
                                            <a href="#">
                                                <i className='bx bx-cart-add'></i> Adicionar no carrinho
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="item-produto">
                                <div className="cont">
                                    <div className="img">
                                        <a href="#"><img src={require('../../images/pdt1.jpg')}></img></a>
                                    </div>
                                    <div className="infos">
                                        <div className="top-card">
                                            <div className="avaliacao">
                                                <i className='bx bx-star'></i>
                                                <i className='bx bx-star'></i>
                                                <i className='bx bx-star'></i>
                                                <i className='bx bx-star'></i>
                                                <i className='bx bx-star'></i>
                                            </div>
                                            <div className="favorito">
                                                <i className='bx bx-heart'></i>
                                            </div>
                                        </div>
                                        
                                        <div className="info-produto">
                                            <h3>Nome produto</h3>
                                            <span>R$ 189,90</span>
                                        </div>
                                        <div className="btn-carrinho">
                                            <a href="#">
                                                <i className='bx bx-cart-add'></i> Adicionar no carrinho
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="item-produto">
                                <div className="cont">
                                    <div className="img">
                                        <a href="#"><img src={require('../../images/pdt1.jpg')}></img></a>
                                    </div>
                                    <div className="infos">
                                        <div className="top-card">
                                            <div className="avaliacao">
                                                <i className='bx bx-star'></i>
                                                <i className='bx bx-star'></i>
                                                <i className='bx bx-star'></i>
                                                <i className='bx bx-star'></i>
                                                <i className='bx bx-star'></i>
                                            </div>
                                            <div className="favorito">
                                                <i className='bx bx-heart'></i>
                                            </div>
                                        </div>
                                        
                                        <div className="info-produto">
                                            <h3>Nome produto</h3>
                                            <span>R$ 189,90</span>
                                        </div>
                                        <div className="btn-carrinho">
                                            <a href="#">
                                                <i className='bx bx-cart-add'></i> Adicionar no carrinho
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="item-produto">
                                <div className="cont">
                                    <div className="img">
                                        <a href="#"><img src={require('../../images/pdt1.jpg')}></img></a>
                                    </div>
                                    <div className="infos">
                                        <div className="top-card">
                                            <div className="avaliacao">
                                                <i className='bx bx-star'></i>
                                                <i className='bx bx-star'></i>
                                                <i className='bx bx-star'></i>
                                                <i className='bx bx-star'></i>
                                                <i className='bx bx-star'></i>
                                            </div>
                                            <div className="favorito">
                                                <i className='bx bx-heart'></i>
                                            </div>
                                        </div>
                                        
                                        <div className="info-produto">
                                            <h3>Nome produto</h3>
                                            <span>R$ 189,90</span>
                                        </div>
                                        <div className="btn-carrinho">
                                            <a href="#">
                                                <i className='bx bx-cart-add'></i> Adicionar no carrinho
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards;