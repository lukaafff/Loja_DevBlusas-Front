import { Component } from "react";
import './Footer.css';

class Footer extends Component {
    render(){
        return(
            <footer className="footer-itens">
                <div className="container">

                <div className="col">
                        <h3>Contato</h3>
                        <ul className="footer-menu">
                            <li><a href="#" className="footer-links">Fale conosco</a></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h3>Sobre</h3>
                        <ul className="footer-menu">
                            <li><a href="#" className="footer-links">Quem somos</a></li>
                            <li><a href="#" className="footer-links">Perguntas frequentes</a></li>
                            <li><a href="#" className="footer-links">Sustentabilidade</a></li>
                            <li><a href="#" className="footer-links">Black Friday 2023</a></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h3>Meus dados</h3>
                        <ul className="footer-menu">
                            <li><a href="#" className="footer-links">Minha conta</a></li>
                            <li><a href="#" className="footer-links">Meus pedidos</a></li>
                            <li><a href="#" className="footer-links">Minha lista de desejos</a></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h3>Políticas</h3>
                        <ul className="footer-menu">
                            <li><a href="#" className="footer-links">Privacidade</a></li>
                            <li><a href="#" className="footer-links">Termos de uso</a></li>
                            <li><a href="#" className="footer-links">Troca e devolução</a></li>
                            <li><a href="#" className="footer-links">Entrega e frete</a></li>
                            <li><a href="#" className="footer-links">Pagamento</a></li>
                        </ul>
                    </div>
                    
                </div>
            </footer>
        );
    }
}

export default Footer;