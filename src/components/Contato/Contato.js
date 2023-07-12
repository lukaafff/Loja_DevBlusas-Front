import './Contato.css'

const Contato = () =>{
    return(
        <div className='contato'>
            <div className='ctt-conteiner'>
                <div className='ctt-preencer'>
                    <h2 className='ctt-preencher-titulo'>PREENCHA SEUS DADOS QUE ENTRAREMOS EM CONTATO ASSIM QUE POSSIVEL</h2>
                    <input className='ctt-input' type="text" placeholder='*NOME'/>
                    <input className='ctt-input' type="text" placeholder='*E-MAIL'/>
                    <input className='ctt-input' type="text" placeholder='*WHATZAPP'/>
                    <input className='ctt-input' type="text" placeholder='*TELEFONE'/>
                    <input className='ctt-input' type="text" placeholder='*MENSAGEM'/>
                    <div className='ctt-nsrobo'>
                        <input type="checkbox"  name='nsrobo'/>
                        <label name='nsrobo'>Não sou robô</label>
                    </div>
                    <button>ENVIAR</button>
                </div>
                <div className='ctt-infos'>
                    <h2 className='ctt-infos-titulo'>ATENDIMENTO</h2>
                    <p>sac@devblusas.com.br</p>
                    <p>De segunda a sexta:</p>
                    <p>08:00 as 16:00</p>
                </div>

            </div>

        </div>
    )
}

export default Contato;