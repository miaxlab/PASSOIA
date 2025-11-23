//aqui importamos os arquivos
import Header from "./components/Header";
import Lancamentos from "./components/Lancamentos";
import Banner from "./components/Banner";
import Produtos from "./components/Produtos";
import Footer from "./components/Footer";

//Arquivo principal
 function App() {
  return(
    <>
   <Header/>
   <Banner imagem="./banner1.png" alt="Banner inicial"/>
   <Lancamentos />
   <Produtos />
   <Banner imagem="./banner2.png" alt="Banner meio" />
   <Footer/>
    </>
  )
 }
 export default App