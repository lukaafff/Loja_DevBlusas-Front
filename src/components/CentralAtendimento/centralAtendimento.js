import './centralAtendimento.css'

const CentralAtendimento = ()=>{
    return(

        <section className='centralAtendimento'>
            <div className='ct-conteiner'>
                <h2>CENTRAL DE ATENDIMENTO</h2>
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
                               ----- componentea ser injetado no click -----
                        </div> 
                </div>
            </div>



        </section>

    )
}

export default CentralAtendimento;