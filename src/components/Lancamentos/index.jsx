// hooks são funções especiais do React;
//useState controla os estados de algo na interface
import { useState } from "react";

//IMPORT DAS IMAGENS
import vermelho from "../../assets/vermelho.png";
import azul from "../../assets/azul.png";
import marrom from "../../assets/marrom.png";

function Lancamentos(){
//estado inicial
    //cor a variavel inicial, setCor a função
    const [cor, setCor] = useState(vermelho);


    return (
        <section>
        <h2>APROVEITE OS LANÇAMENTOS</h2>
        <img src={cor} alt="" />

        <button onClick={()=>setCor(azul)}>Azul</button>
        <button onClick={()=>setCor(marrom)}>Marrom</button>
        <button onClick={()=>setCor(vermelho)}>Vermelho</button>

        </section>
    );
}

export default Lancamentos;