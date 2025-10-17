import React from 'react';
import ProductoDestacado from './ProductoDestacado';

function SeccionProductosInicio() {
  return (
    <section className="seccion-productos">
      <h2>Productos más populares</h2>
      <div className="lista-productos">
        <ProductoDestacado titulo="Red Velvet" imagen="/assets/img/red_velvet.jpg" descripcion="Torta esponjosa con un toque de cacao y betún de queso crema." />
        <ProductoDestacado titulo="Torta Nuez Manjar" imagen="/assets/img/torta_nuez.jpg" descripcion="Tradicional receta casera con nueces y manjar artesanal." />
        <ProductoDestacado titulo="Chilenitos" imagen="/assets/img/chilenitos.jpg" descripcion="Deliciosas galletas rellenas con manjar y cubiertas con azúcar flor." />
      </div>
    </section>
  );
}

export default SeccionProductosInicio;
