import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/general.css";
import { CarritoProvider } from "./context/CarritoContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Carrito from "./pages/Carrito";
import Registro from "./pages/Registro";
import Login from "./pages/Login";
import ConfirmacionCompra from "./pages/ConfirmacionCompra";

function App() {
  return (
    <CarritoProvider>
      <Router>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/confirmacion" element={<ConfirmacionCompra />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </CarritoProvider>
  );
}

export default App;
