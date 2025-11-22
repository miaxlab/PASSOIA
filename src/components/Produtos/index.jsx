import "./produtos.scss"

function Produtos (){
    return (
        <section className="produtos">
            <h2>LOOKS E DICAS DE MAQUIAGEM</h2>
            <figure>
                <img src="./gloss.png" alt="Imagem do produto"/>
                <img src="pincel.png" alt="Imagem do produto"/>
                <img src="./sombra.png" alt="Imagem do produto"/>
                <img src="paleta.png" alt="Imagem do produto"/>
            </figure>
        </section>
    );
}

export default Produtos