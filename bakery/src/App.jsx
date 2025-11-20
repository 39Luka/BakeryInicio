import "./assets/styles/index.css";
import MainContent from "./components/MainContent";
import { Route, Routes } from "react-router-dom";
import ProductosPage from "./pages/ProductosPage.jsx";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen" role="application">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="productos" element={<ProductosPage />} />

          </Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
