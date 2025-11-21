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

  // Generar lista de tarjetas
  return items.map((item, index) => (
    <Link to={`/productos/${item.id}`}  key={index} className="contents" >
    <li key={index}>
      <Card {...item} />
    </li>
    </Link>
  ));
}

export default RenderCards;
