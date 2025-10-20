// src/components/Productos.jsx
import React, { useEffect, useState } from "react";
import { useCarrito } from "../context/CarritoContext";
import { fetchData } from "../assets/data/dataLoader";
import "../css/ProductosList.css";

export default function Productos() {
  const { agregarAlCarrito } = useCarrito();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetchData("categoriasyproductos")
      .then((data) => {
        if (data && Array.isArray(data.productos)) {
          setProductos(data.productos);
        } else {
          console.warn("El JSON no tiene el formato esperado.");
        }
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
      });
  }, []);

  return (
    <div className="productos-page">
      <h2 className="titulo-productos">Nuestros Productos</h2>

      <div className="productos-grid">
        {productos.length > 0 ? (
          productos.map((producto) => (
            <div key={producto.id} className="producto-card">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="producto-imagen"
              />
              <h5 className="producto-nombre">{producto.nombre}</h5>
              <p className="producto-descripcion">{producto.descripcion}</p>
              <p className="producto-precio">
                <strong>Precio:</strong>{" "}
                {producto.tamaños?.[0]
                  ? `$${producto.tamaños[0].precio.toLocaleString("es-CL")}`
                  : "Consultar"}
              </p>
              <button
                className="btn-agregar"
                onClick={() => agregarAlCarrito(producto)}
              >
                🛒 Agregar al carrito
              </button>
            </div>
          ))
        ) : (
          <p className="text-center">No hay productos para mostrar.</p>
        )}
      </div>
    </div>
  );
}
