import React from "react";
import { Link } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";

export default function Navbar() {
  const { carrito } = useCarrito();
  const cantidadTotal = carrito.reduce((acc, p) => acc + p.cantidad, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold text-light">
          Pastelería Mil Sabores
        </Link>

        <div>
          <Link to="/productos" className="btn btn-outline-light mx-2">
            Productos
          </Link>
          <Link to="/carrito" className="btn btn-outline-warning position-relative">
            🛒 Carrito
            {cantidadTotal > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cantidadTotal}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
