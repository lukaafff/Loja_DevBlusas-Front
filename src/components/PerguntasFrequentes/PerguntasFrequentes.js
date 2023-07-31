import React, { useState } from 'react';
import { DataPerguntas } from './DataPerguntas';

import "./PerguntasFrequentes.css";

const PerguntasFrequentes = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <div className="contPF">
        <div className="colPF">
          <div className="titlePF">
            <h2>Perguntas Frequentes</h2>
          </div>
          <ul className="accordion">
            {DataPerguntas.map((item, index) => (
              <li className='pf' key={index}>
                <div
                  className={activeIndex === index ? 'perguntasDrop active' : 'perguntasDrop'}
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                </div>
                {activeIndex === index && <div className="desc">{item.desc}</div>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PerguntasFrequentes;
