import Seccion from "./components/Seccion";
import "./assets/styles/index.css";
import { productos } from "./data/productos";
import Card from "./components/Card";

function App() {
  return (
    <>
    <main id="main-content"
    role="main"
    tabIndex={-1}
    >
    <Seccion titulo="Nuestros Productos" elementos={productos} Componente={Card}/>    
    </main>
    </>
  );
}

export default App;
