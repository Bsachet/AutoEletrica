import Banner from "../../component/Layout/Banner";
import NavBar from "../../component/Layout/NavBar";
import Button from '../../component/Button';
import './Pessoas.css';


function Pessoas() {
  return (

 
    <div>
        <NavBar></NavBar>
        <Banner h1="Pessoas"></Banner>
            <header>
                <div className="navInf">
                    <ul>
                        <li><a href="/">Basicas</a></li>
                        <li><a href="/">Endereço</a></li>
                        <li><a href="/">Contatos</a></li>
                        <li><a href="/">Classes</a></li>
                    </ul>
                </div>
            </header>
            
            <section className="form">
                <form className="grid-container">
                    <div>
                        <select>
                            <option value="Juridica"></option>
                            <option value="Fisica"></option>
                        </select>
                            
                    </div>
                    <div><input></input></div>
                    <div><input></input></div>
                    <div><input></input></div>
                    <div><input></input></div>
                    <div><input></input></div>
                </form>               
            </section>

            <Button className="alterButton">Cancelar</Button>
            <Button>Salvar</Button>
        

    </div>

  );
}

export default Pessoas;