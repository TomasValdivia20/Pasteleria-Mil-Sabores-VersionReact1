import React from "react";
import { Link } from "react-router-dom";

export default function ProductosDestacados() {
  return (
    <>
      {/* SECCIÓN DE PRODUCTOS DE INICIO */}
      <section className="page-section about-heading">
        <div className="container">
          <img
            className="img-fluid rounded about-heading-img mb-3 mb-lg-0"
            src="/src/assets/img/Pasteles.png"
            alt="Pasteles"
          />
          <div className="about-heading-content">
            <div className="row">
              <div className="col-xl-9 col-lg-10 mx-auto">
                <div className="bg-faded rounded p-5">
                  <h2 className="section-heading mb-4">
                    <span className="section-heading-upper lato-regular">
                      Una demostración de lo que tenemos para ofrecer
                    </span>
                    <span className="section-heading-lower colorAcen1 pacifico-regular">
                      Productos más populares
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTO 1 - Red Velvet */}
      <section className="page-section">
        <div className="container">
          <div className="product-item">
            <div className="product-item-title d-flex">
              <div className="bg-faded p-5 d-flex ms-auto rounded">
                <h2 className="section-heading mb-0">
                  <span className="section-heading-upper lato-regular">
                    N°1 en ventas
                  </span>
                  <span className="section-heading-lower colorcherryfuente lato-regular">
                    Pastel Red Velvet
                  </span>
                </h2>
              </div>
            </div>
            <img
              className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
              src="/src/assets/img/Torta Cuadrada.webp"
              alt="Torta Cuadrada Red Velvet"
            />
            <div className="product-item-description d-flex me-auto">
              <div className="bg-faded p-5 rounded">
                <p className="mb-0">
                  Nuestra deliciosa <strong>Red Velvet</strong> en formato
                  cuadrado, perfecta para compartir en ocasiones especiales.
                  Suave, esponjosa y con un toque de cacao, cubierta con un
                  cremoso frosting de queso crema.
                </p>
                <Link
                  to="/producto/red-velvet"
                  className="btn btn-dark text-uppercase mt-3"
                >
                  Comprar Ahora
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTO 2 - Nuez Manjar */}
      <section className="page-section">
        <div className="container">
          <div className="product-item">
            <div className="product-item-title d-flex">
              <div className="bg-faded p-5 d-flex me-auto rounded">
                <h2 className="section-heading mb-0">
                  <span className="section-heading-upper">N°2 en ventas</span>
                  <span className="section-heading-lower colorcherryfuente lato-regular">
                    Torta Nuez Manjar
                  </span>
                </h2>
              </div>
            </div>
            <img
              className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
              src="/src/assets/img/Pastel Nuez Manjar.png"
              alt="Torta Redonda Nuez Manjar"
            />
            <div className="product-item-description d-flex ms-auto">
              <div className="bg-faded p-5 rounded">
                <p className="mb-0">
                  La especialidad desde nuestra inauguración, nuestra torta{" "}
                  <strong>Nuez Manjar</strong> en formato redondo, ha sido
                  sinónimo de nuestra identidad como tienda. Crocante, dulce e
                  irresistible con su nuez molida y manjar, combinación que ha
                  existido por 50 años.
                </p>
                <Link
                  to="/producto/nuez-manjar"
                  className="btn btn-dark text-uppercase mt-3"
                >
                  Comprar Ahora
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTO 3 - Chilenitos */}
      <section className="page-section">
        <div className="container">
          <div className="product-item">
            <div className="product-item-title d-flex">
              <div className="bg-faded p-5 d-flex ms-auto rounded">
                <h2 className="section-heading mb-0">
                  <span className="section-heading-upper">N°3 en ventas</span>
                  <span className="section-heading-lower colorcherryfuente lato-regular">
                    Chilenitos (12 unidades)
                  </span>
                </h2>
              </div>
            </div>
            <img
              className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
              src="/src/assets/img/Chilenito.png"
              alt="Chilenitos"
            />
            <div className="product-item-description d-flex me-auto">
              <div className="bg-faded p-5 rounded">
                <p className="mb-0">
                  Una docena de nuestros tradicionales{" "}
                  <strong>Chilenitos</strong>, perfectos para acompañar tu café
                  o té. Con el clásico relleno de manjar y una masa suave que se
                  deshace en la boca.
                </p>
                <Link
                  to="/producto/chilenitos"
                  className="btn btn-dark text-uppercase mt-3"
                >
                  Comprar Ahora
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
