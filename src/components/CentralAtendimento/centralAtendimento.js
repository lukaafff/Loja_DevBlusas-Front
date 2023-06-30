import Contato from '../Contato/Contato';
import EntregasFretes from '../EntregasFretes/EntregasFretes';
import Pagamentos from '../Pagamentos/Pagamentos';
import PoliticaPrivacidade from '../PoliticaPrivacidade/PoliticaPrivacidade'
import TermosUso from '../TermosUso/TermosUso';
import TrocasDevolucoes from '../TrocasDevolucoes/TrocasDevolucoes';
import './CentralAtendimento.css'

const CentralAtendimento = ()=>{


    return(

        <section className='centralAtendimento'>
            <div className='ct-conteiner'>
                <h2 className='ct-conteiner-titulo'>CENTRAL DE ATENDIMENTO</h2>
                <div className='ct-corpo'>
                        <ul className="ct-menu">
                                    <li className='ct-li'><a href="#" className="ct-links">CONTATO</a></li>
                                    <li className='ct-li'><a href="#" className="ct-links">PERGUNTAS FREQUENTES</a></li>
                                    <li className='ct-li'><a href="#" className="ct-links">POLITICA DE PRIVACIDADE</a></li>
                                    <li className='ct-li'><a href="#" className="ct-links">TERMOS DE USO</a></li>
                                    <li className='ct-li'><a href="#" className="ct-links">TROCAS E DEVOLUÇÕES</a></li>
                                    <li className='ct-li'><a href="#" className="ct-links">PAGAMENTOS</a></li>
                                    <li className='ct-li'><a href="#" className="ct-links">ENTREGAS E FRETE</a></li>
                        </ul>
                        <div className='ct-componente'>
                               {/*<PoliticaPrivacidade />*/}
                               <Contato />
                               {/*<TermosUso />*/}
                               {/*<TrocasDevolucoes/>*/}
                               {/*<Pagamentos/>*/}
                               {/*<EntregasFretes/>*/}
                        </div> 
                </div>
            </div>



        </section>

    )
}

export default CentralAtendimento;