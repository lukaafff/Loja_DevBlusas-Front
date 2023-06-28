import { Component } from "react";
import { MenuData } from "./MenuData";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
        //trocar icone para quando for para mobile
        state = {clicked: false};
        handleClick = () => {
            this.setState({clicked:
            !this.state.clicked})
        }

    render(){
        return(
            <nav className="NavbarItens">
                <Link to={`/`}><img src={require('../../images/logo.png')}></img></Link>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {/* mapear a lista para renderizar através das cheves criadas */}
                    {MenuData.map((item, index) => {
                        return(
                           <li key={index}>
                                <Link to={item.url} className={item.cName}>{item.title}</Link>
                            </li> 
                        )
                    })}

                        <div className="busca-input">
                            <input type="search" className="input"></input>
                            <label>Busca</label>
                        </div>

                        <div className="nav-rigth">
                            <i className='bx bx-cart'></i>
                            <div className="login">
                                <i className='bx bxs-user'></i>
                                <label>Login</label>
                            </div>
                        </div>
                </ul>
                <div className="menu" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "bx bx-x" : "bx bx-menu"} id="menu-icon"></i>
                </div>
            </nav>
        );
    }
}

export default Navbar;