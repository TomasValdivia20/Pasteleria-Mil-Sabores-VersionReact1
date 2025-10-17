import React, { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

function Carrito() {
  const { carrito, eliminarDelCarrito, vaciarCarrito } = useContext(CarritoContext);

  const total = carrito.reduce(
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0
  );

  if (!carrito || carrito.length === 0) {
    return <p className="text-center mt-4">🛒 El carrito está vacío.</p>;
  }

  return (
    <div className="container mt-4">
      <h2>🛍 Tu carrito</h2>
      <ul className="list-group mb-3">
        {carrito.map((producto) => (
          <li key={producto.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{producto.nombre}</strong> x {producto.cantidad}
            </div>
            <div>
              ${(producto.precio * producto.cantidad).toLocaleString()}
              <button
                className="btn btn-danger btn-sm ms-3"
                onClick={() => eliminarDelCarrito(producto.id)}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>

      <h4>Total: ${total.toLocaleString()}</h4>
      <button className="btn btn-secondary mt-3" onClick={vaciarCarrito}>
        Vaciar carrito
      </button>
    </div>
  );
}

export default Carrito;
