import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { CentralData } from "./DataCentral";

import { Outlet } from 'react-router-dom';

import './centralAtendimento.css';

const CentralAtendimento = () => {
  return (
    <section className="centralAtendimento">
      <div className="ct-conteiner">
        <h2 className="ct-conteiner-titulo">CENTRAL DE ATENDIMENTO</h2>
        <div className="ct-corpo">
          <ul className="ct-menu">
          {CentralData.map((item, index) => {
                        return(
                           <li key={index} className={item.cName}>
                                <Link to={item.url} className={item.cName2}>{item.title}</Link>
                            </li> 
                        )
                    })}
          </ul>
          <div className="ct-componente">
            <Outlet/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CentralAtendimento;
