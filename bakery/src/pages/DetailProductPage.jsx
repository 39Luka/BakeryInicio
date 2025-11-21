import { useParams } from "react-router-dom";
import { productos } from "../data/productos.js";

function DetailProductPage() {
  const { id } = useParams();
  const producto = productos.find((prod) => prod.id === parseInt(id));

  if (!producto) {
    return (
      <section
        aria-label="Producto no encontrado"
        className="max-w-6xl mx-auto px-4 py-12"
      >
        <h1 className="heading-base heading-h1 text-(--color-error)">Producto no encontrado</h1>
        <p className="text-base text-normal text-(--color-grey-2) mt-4">
          Lo sentimos, el producto que buscas no existe.
        </p>
      </section>
    );
  }

  return (
    <article className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-2 gap-8 items-center" role="presentation">
        {/* Contenido del producto */}
        <section className="flex flex-col gap-6">
          <header>
            <h2 className="heading-base heading-h2 text-(--color-primary) mb-1 text-lg md:text-2xl lg:text-3xl">
              {producto.nombre}
            </h2>
            <h3 className="heading-base heading-h3 text-(--color-grey-2) text-sm md:text-base">
              {producto.categoria}
            </h3>
          </header>

          <p
            className="text-base md:text-lg lg:text-xl text-(--color-primary)"
            role="region"
            aria-label="Información de precio"
          >
            {Number(producto.precio).toFixed(2)}€
          </p>

          <p className="text-sm md:text-base text-normal text-(--color-grey-1) leading-relaxed">{producto.descripcion}</p>

          <div className="flex gap-4 pt-4" role="group" aria-label="Acciones del producto">
            <button
              className="px-6 py-3 bg-(--color-primary) text-white rounded-lg font-semibold border-2 border-transparent  hover:bg-(--color-secondary) hover:text-(--color-primary) focus:outline-none focus:ring-0 active:outline-none appearance-none transition-colors duration-300"
              aria-label={`Añadir ${producto.nombre} al carrito`}
            >
              Añadir al carrito
            </button>
          </div>
        </section>

        {/* Imagen del producto */}
        <figure className="flex justify-center">
          <img
            src={producto.imagen}
            alt={`Imagen del producto ${producto.nombre}`}
            className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl shadow-lg"
          />
          <figcaption className="sr-only">Imagen principal del producto {producto.nombre}</figcaption>
        </figure>
      </div>
    </article>
  );
}

export default DetailProductPage;