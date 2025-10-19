// src/components/Header.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";
import { useUser } from "../context/UserContext"; // 👈 usamos el nuevo contexto
import "../css/Header.css";
import "../css/general.css";
import logo from "../assets/img/Logo.png";

function Header() {
  const { carrito, vaciarCarrito } = useCarrito();
  const { usuario, logout } = useUser(); // 👈 datos y funciones del contexto
  const navigate = useNavigate();

  const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  const handleLogout = () => {
    logout(); // 👈 limpia sesión y localStorage
    vaciarCarrito(); // Limpia el carrito
    navigate("/login");
  };

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

      {/* Navbar */}
      <nav className="header-navbar">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/acerca">Acerca de Nosotros</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/carrito">Carrito de Compras</Link></li>
          <li><Link to="/registro">Registro</Link></li>

          {/* Mostrar según sesión */}
          {usuario ? (
            <>
              <li><Link to="/perfil">Mi Cuenta</Link></li>
              <li>
                <button onClick={handleLogout} className="logout-btn">
                  Cerrar Sesión
                </button>
              </li>
            </>
          ) : (
            <li><Link to="/login">Iniciar Sesión</Link></li>
          )}

          <li><Link to="/empleados">Empleados</Link></li>
        </ul>

        {/* Carrito */}
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
