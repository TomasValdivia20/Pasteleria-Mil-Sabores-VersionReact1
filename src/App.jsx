import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/general.css";

// Contextos
import { UserProvider } from "./context/UserContext";
import { CarritoProvider } from "./context/CarritoContext";

// Componentes globales
import Header from "./components/Header";
import Footer from "./components/Footer";

// Páginas
import Home from "./pages/Home";
import Categorias from "./pages/Categorias"; // muestra las categorías
import Carrito from "./pages/Carrito";
import Registro from "./pages/Registro";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import ConfirmacionCompra from "./pages/ConfirmacionCompra";
import ProductDetail from "./pages/ProductDetail"; // ✅ Página de detalle de producto

// Componentes del catálogo
import ProductosList from "./components/Catalogo/ProductosList";

function App() {
  return (
    <UserProvider>
      <CarritoProvider>
        <Router>
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productos" element={<Categorias />} /> {/* muestra las categorías */}
              <Route
                path="/productos/:categoriaId"
                element={<ProductosList />}
              /> {/* muestra productos de una categoría */}
              <Route
                path="/producto/:id"
                element={<ProductDetail />}
              /> {/* ✅ detalle del producto */}
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/registro" element={<Registro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/confirmacion" element={<ConfirmacionCompra />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </CarritoProvider>
    </UserProvider>
  );
}

export default App;
