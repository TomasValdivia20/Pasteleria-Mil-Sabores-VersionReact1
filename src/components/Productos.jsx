import React, { useContext } from "react";
import { CarritoContext } from "./CarritoContext";
import data from "../assets/data/categoriasyproductos.json";

function Productos() {
  const { agregarProducto } = useContext(CarritoContext);

  return (
    <div className="row productos-container">
      {data.productos.map((producto) => (
        <div key={producto.id} className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text text-muted">{producto.descripcion}</p>
              <p><strong>Categoría:</strong> {producto.categoria}</p>
              <p><strong>Precio:</strong> ${producto.precio}</p>
              <p><strong>Disponibilidad:</strong> {producto.disponibilidad}</p>

              <button
                className="btn btn-primary w-100"
                onClick={() => agregarProducto(producto)}
              >
                🛒 Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Productos;
