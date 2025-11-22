import "./footer.scss";

function Footer(){
    return (
        <footer>
            <nav>
                <h4>ATENDIMENTO</h4>
                <ul>
                    <li>Fale Conosco</li>
                    <li>Perguntas Frequentes</li>
                    <li>Meus Pedidos</li>
                    <li>Nossa Lojas</li>
                </ul>
            </nav>
            <div clssName="pagamento">
                <h4>FORMAS DE PAGAMENTO</h4>
                <figure>
            <img src="mastercard.png" alt="mastercard"/>
            <img src="visa.png" alt="visa"/>
            <img src="pix.png" alt="pix"/>
            <img src="boleto.png" alt="boleto"/>
            </figure>
            </div>
            <div className="redes">
                <h4>SIGA-NOS NAS REDES SOCIAIS</h4>
                <figure>
                    <img src="insta.png" alt="Instagram"/>
                    <img src="twitter.png" alt="Twitter"/>
                    <img src="face.png" alt="Facebook"/>
                    <img src="yout.png" alt="Youtube"/>
                </figure>
            </div>
        </footer>
    );

}

export default Footer