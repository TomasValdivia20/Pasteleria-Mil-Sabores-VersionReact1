import React from 'react';

function SeccionGarantias() {
  const garantias = [
    { icono: "🚚", titulo: "Delivery Gratis", texto: "En compras sobre $30.000" },
    { icono: "💳", titulo: "Pago Seguro", texto: "Transacciones protegidas" },
    { icono: "🛡️", titulo: "Garantía de Seguridad", texto: "Cuidamos tu información" },
    { icono: "🎁", titulo: "Garantía de Ahorro", texto: "Ofertas todo el año" },
  ];

  return (
    <section className="seccion-garantias">
      <h2>Nuestras Garantías</h2>
      <div className="contenedor-garantias">
        {garantias.map((g, i) => (
          <div key={i} className="tarjeta-garantia">
            <span className="icono">{g.icono}</span>
            <h3>{g.titulo}</h3>
            <p>{g.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SeccionGarantias;
