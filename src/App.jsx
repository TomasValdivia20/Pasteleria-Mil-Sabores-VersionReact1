import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/general.css";
import { CarritoProvider } from "./context/CarritoContext";
import { UserProvider } from "./context/UserContext";

import Header from "./components/Header";  
import Footer from "./components/Footer";  

import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Carrito from "./pages/Carrito";
import Registro from "./pages/Registro";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import ConfirmacionCompra from "./pages/ConfirmacionCompra";

function App() {
  return (
    
    <CarritoProvider>
    <UserProvider>
      <Router>
        <Header />   
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/confirmacion" element={<ConfirmacionCompra />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </UserProvider>
    </CarritoProvider>
    
  );
}

export default App;
