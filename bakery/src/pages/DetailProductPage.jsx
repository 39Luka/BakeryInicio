import { useParams } from "react-router-dom";
import {productos} from "../data/productos.js";


function DetailProductPage() {
  const { id } = useParams();
  const producto = productos.find((prod) => prod.id === parseInt(id));

  if (!producto) {
    return (
      <section>
        <h2>Producto no encontrado</h2>
      </section>
    );
  }

  return (
    <>
      <section>
        <h2>{producto.nombre}</h2>
        <h3>{producto.categoria}</h3>
      </section>
    </>
  );
}

export default DetailProductPage;