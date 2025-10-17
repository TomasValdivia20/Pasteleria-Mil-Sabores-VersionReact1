import React from 'react';
import { Link } from 'react-router-dom';

function SeccionIntro() {
  return (
    <section className="seccion-intro">
      <div className="contenido">
        <h2>Descubre los sabores que encantan</h2>
        <p>Pasteles artesanales, ingredientes naturales y un toque de amor en cada creación.</p>
        <Link to="/productos" className="boton">Ver Productos</Link>
      </div>
      <img src="/assets/img/pasteleria_index.jpg" alt="Pastelería" className="imagen-intro" />
    </section>
  );
}

export default SeccionIntro;
