import React from 'react';
import { Link } from 'react-router-dom';

function SeccionRegistro() {
  return (
    <section className="seccion-registro">
      <div className="contenido">
        <h2>Regístrate y obtén beneficios exclusivos</h2>
        <ul>
          <li>💸 Descuentos especiales por edad</li>
          <li>🎂 Promociones en fechas especiales</li>
          <li>🚚 Seguimiento de tus pedidos</li>
        </ul>
        <Link to="/registro" className="boton">Crear Cuenta</Link>
      </div>
    </section>
  );
}

export default SeccionRegistro;
