// Banner.jsx
function Banner({ imagen, titulo, contenido }) {
  return (
    <section
      className="relative w-full max-w-5xl mx-auto my-8"
      aria-label={titulo} // describe la sección para lectores de pantalla
    >
      {/* Imagen redondeada */}
      <img
        src={imagen}
        alt={titulo}
        className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
      />

      {/* Overlay semitransparente */}
      <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

      {/* Texto encima */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4"
        role="banner"
      >
        <h1 className="text-base heading-base heading-h1 text-bold mb-2 drop-shadow-lg">
          {titulo}
        </h1>
        <p className="text-base text-large">{contenido}</p>
      </div>
    </section>
  );
}

export default Banner;
