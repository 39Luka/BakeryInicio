import { Outlet } from "react-router-dom";

function MainContent() {
  return (
    <main
      className="flex-1 mx-auto pt-24 pb-15"
      id="main-content"
      role="main"
      tabIndex={-1}
    >
      <Outlet />
      {/* Aquí puedes agregar el contenido principal de la página */}
    </main>
  );
}

export default MainContent;
