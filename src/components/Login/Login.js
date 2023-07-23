import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleLoginClick = () => {
    setIsLoginForm(true);
  };

  const handleCadastroClick = () => {
    setIsLoginForm(false);
  };

  return (
    <div className="containerL">
      <div className="cont">
        <div className="botoesForm">
          <div className="btnCor" style={{ left: isLoginForm ? "0px" : "110px" }}></div>
          <button id="btnLogin" onClick={handleLoginClick}>Entrar</button>
          <button id="btnCadastro" onClick={handleCadastroClick}>Cadastre-se</button>
        </div>

        <form id="login" style={{ left: isLoginForm ? "25px" : "-450px" }}>
          <input type="text" placeholder="E-mail" required />
          <i className='bx bxs-envelope bxi email'></i>
          <input type="password" placeholder="Senha" required />
          <i className='bx bxs-lock-alt bxi senha'></i>
          <div className="divCheck">
            <input type="checkbox" />
            <span>Lembrar senha</span>
          </div>
          <button type="submit">Entrar</button>
        </form>

        <form id="cadastro" style={{ left: isLoginForm ? "450px" : "25px" }}>
          <input type="text" placeholder="E-mail" required />
          <i className='bx bxs-envelope bxi'></i>
          <input type="password" placeholder="Senha" required />
          <i className='bx bxs-lock-alt bxi senha'></i>
          <input type="password" placeholder="Senha" required />
          <i className='bx bxs-lock-alt bxi senha2'></i>
          <div className="divCheck">
            <input type="checkbox" required />
            <span>Aceito os termos</span>
          </div>
          <button type="submit">Cadastre-se</button>
        </form>

      </div>
    </div>
  );
};

export default Login;
