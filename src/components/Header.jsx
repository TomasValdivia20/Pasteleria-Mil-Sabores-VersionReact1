import React from "react";
import { Link } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";
import "../css/Header.css";
import "../css/general.css";
import logo from "../assets/img/Logo.png"; 

function Header() {
  const { carrito } = useCarrito();
  const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <header className="header-container">
      {/* === Sección superior (logo + título) === */}
      <div className="header-top">
        <div className="logo-container">
          <img src={logo} alt="Logo Mil Sabores" className="header-logo" />
          <div className="header-title">
            <span>PASTELERÍA</span>
            <h1>MIL SABORES</h1>
          </div>
        </div>
      </div>

      {/* === Navbar fusionado === */}
      <nav className="header-navbar">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/acerca">Acerca de Nosotros</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/carrito">Carrito de Compras</Link></li>
          <li><Link to="/login">Iniciar Sesión</Link></li>
          <li><Link to="/registro">Registro</Link></li>
          <li><Link to="/empleados">Empleados</Link></li>
        </ul>

        <div className="header-cart">
          <Link to="/carrito" className="cart-link">
            🛒 <span>({cantidadTotal})</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
