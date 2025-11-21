import { Link } from "react-router-dom";
import Card from "./Card";

/*
* Componente RenderCards
* Recibe una lista de elementos y opciones para renderizar tarjetas.
*
* @param {Array} elementos - Lista de elementos a renderizar.
* @param {Object} options - Opciones adicionales (maxItems, order).
*
*/
function RenderCards({ elementos, options = {} }) {
  const { maxItems, order } = options;

  // Copia del array para no modificar el original
  let items = [...elementos];

  // Aplicar orden si se proporciona
  if (order) {
    items.sort(order); // order debe ser una función de comparación
  }

  // Limitar cantidad de elementos si se indica
  if (maxItems) items = items.slice(0, maxItems);

  // Generar lista de tarjetas dentro de <li> para que el <ul> padre gestione la rejilla
  return items.map((item) => (
    <li key={item.id} className="w-full">
      <Link to={`/productos/${item.id}`} className="contents">
        <Card {...item} />
      </Link>
    </li>
  ));
}

export default RenderCards;
