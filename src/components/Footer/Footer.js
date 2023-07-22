import { Component } from "react";
import './Footer.css';

import { Link } from "react-router-dom";

class Footer extends Component {
    render(){
        return(
            <footer className="footer-itens">
                <div className="container">

                <div className="col">
                    <h3>Contato</h3>
                    <ul className="footer-menu">
                        <li><Link to="/contato" className="footer-links">Contato</Link></li>
                    </ul>
                </div>


                    <div className="col">
                        <h3>Sobre</h3>
                        <ul className="footer-menu">
                            <li><Link to="/quem-somos" className="footer-links">Quem somos</Link></li>
                            <li><Link to="/perguntas-frequentes" className="footer-links">Perguntas frequentes</Link></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h3>Meus dados</h3>
                        <ul className="footer-menu">
                            <li><Link to="/login" className="footer-links">Minha conta</Link></li>
                            <li><Link to="/login" className="footer-links">Meus pedidos</Link></li>
                            <li><Link to="/favoritos" className="footer-links">Minha lista de desejos</Link></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h3>Políticas</h3>
                        <ul className="footer-menu">
                            <li><Link to="/politica-de-privacidade" className="footer-links">Privacidade</Link></li>
                            <li><Link to="/termos-de-uso" className="footer-links">Termos de uso</Link></li>
                            <li><Link to="/trocas-e-devolucoes" className="footer-links">Troca e devolução</Link></li>
                            <li><Link to="/entregas-e-frete" className="footer-links">Entrega e frete</Link></li>
                            <li><Link to="/pagamentos" className="footer-links">Pagamento</Link></li>
                        </ul>
                    </div>
                    
                </div>
            </footer>
        );
    }
}

export default Footer;