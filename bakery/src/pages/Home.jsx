import Seccion from "../components/Seccion";
import { productos } from "../data/productos";
import RenderCards from "../components/RenderCards.jsx";
import Banner from "../components/Banner.jsx";

function Home() {
  return (
    <>

<Banner
  imagen="https://i.ibb.co/BHkPNrcv/pan-rustico.jpg"
  titulo="Bienvenido a Bakery++"
  contenido="Descubre nuestros productos frescos y artesanales cada día"
/>

      <Seccion titulo="Top Ventas">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center items-stretch">
          <RenderCards elementos={productos} options={{maxItems: 8}}/>
        </ul>
      </Seccion>
    </>
  );
}

export default Home;