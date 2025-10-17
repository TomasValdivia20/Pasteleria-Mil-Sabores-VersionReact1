import React from 'react';
import { Link } from 'react-router-dom';

function ProductoDestacado({ titulo, descripcion, imagen }) {
  return (
    <div className="producto-destacado">
      <img src={imagen} alt={titulo} className="imagen-producto" />
      <div className="info">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <Link to="/productos" className="boton">Ver más</Link>
      </div>
    </div>
  );
}

export default ProductoDestacado;
