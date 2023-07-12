import "./QuemSomos.css";

const QuemSomos = () => {
    return (
        <div>
            <div className="contS">
                <img className='img-quem-somos' src={require('../../images/banner-qm-somos.jpg')}></img>
                <div className='txt-quem-somos'>
                <h1 className="devtit">DevBlusas</h1>
                    <p>
                        A <b>DevBlusas</b> é uma marca de moda que se destaca por seu compromisso com o conforto das mulheres em todas as fases da vida. Com uma proposta de roupas sem numeração, a marca busca vestir mulheres do tamanho 38 ao 46 convencional, proporcionando versatilidade e elegância em cada peça.
                    </p>
                    <br/>
                    <p>
                        Como a moda está cada vez mais inclusiva, a DevBlusas segue essa tendência com suas roupas versáteis. <b>O fato de não ter numeração torna a compra de roupas menos estressante, permitindo que as mulheres se concentrem no que realmente importa: como elas se sentem ao usá-las.</b>
                    </p>
                    <br/>
                    <p>
                        A marca se preocupa com a sustentabilidade, permitindo que as mulheres tenham um closet com <b>peças que não precisam ser substituídas a cada mudança de numeração do corpo.</b> Com DevBlusas, as mulheres podem se sentir confortáveis e elegantes durante todo o ano, <b>sem ter que se preocupar com as mudanças naturais do corpo.</b>
                    </p>
                    <br/>
                    <p>
                        As coleções trazem peças para todas as ocasiões, desde o dia a dia até eventos formais. As roupas são feitas com tecidos de qualidade, proporcionando conforto e durabilidade. <b>Os modelos também são pensados para valorizar diferentes tipos de corpo, tornando as mulheres mais confiantes e empoderadas.</b>
                    </p>
                </div>
            </div>
            
        </div>
    );
}

export default QuemSomos;