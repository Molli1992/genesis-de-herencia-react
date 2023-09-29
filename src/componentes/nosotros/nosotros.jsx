import React from "react";
import "./nosotros.css";

function Nosotros() {
  window.addEventListener("scroll", function () {
    let elemento = document.querySelector(
      ".container-nosotros-2-container-img"
    );

    if (elemento) {
      let posicion = elemento.getBoundingClientRect();
      if (posicion.top < 450 && posicion.top > -350) {
        elemento.classList.add("animacion-activa");
        elemento.classList.add("opacity-nosotros");
      }
    }
  });

  window.addEventListener("scroll", function () {
    let elemento = document.querySelector(".flex-nostros");

    if (elemento) {
      let posicion = elemento.getBoundingClientRect();
      if (posicion.top < 545 && posicion.top > -50) {
        elemento.classList.add("flex-nostros-animation");
        elemento.classList.add("opacity-nosotros");
      }
    }
  });

  window.addEventListener("scroll", function () {
    let elemento = document.querySelector(".img-nostros");

    if (elemento) {
      let posicion = elemento.getBoundingClientRect();
      if (posicion.top < 525 && posicion.top > 100) {
        elemento.classList.add("img-nostros-animation");
        elemento.classList.add("opacity-nosotros");
      }
    }
  });

  return (
    <div className="body-nosotros">
      <div className="container-nosotros-1">
        <h3>NOSOTROS</h3>
        <h1>CONÓCENOS</h1>
      </div>

      <div className="container-nosotros-2">
        <div className="container-nosotros-2-container-text">
          <h1>CONÓCENOS</h1>
          <p>
            Sur de Los Andes nace en 2005 con la visión empresarial de Guillermo
            Banfi, economista franco-argentino que dejó el terreno de las
            finanzas para dedicarse a la vitivinicultura y que posicionó con
            éxito sus propios vinos en Estados Unidos.
          </p>

          <p>
            Nuestra bodega se encuentra al pie de la cordillera de los Andes,
            ubicada en Las Compuertas, en Luján de Cuyo, Mendoza, Argentina.
            Allí, recibimos las mejores uvas para la vinificación y procesamos
            los secretos de la tierra, creando vinos exquisitos, destinados a
            complacer los paladares más exigentes.
          </p>
        </div>

        <div className="container-nosotros-2-container-img">
          <img
            src="https://surdelosandes.com/wp-content/uploads/2023/06/nosotros-surdelosandes.jpg.png.jpg"
            alt="viñedo"
          />
        </div>
      </div>

      <div className="container-nosotros-3">
        <div className="flex-nostros">
          <h1>PRINCIPIOS</h1>
        </div>

        <div className="container-nosotros-3-container-text">
          <div>
            <h3>MISIÓN</h3>
            <p>
              Producir sensaciones exquisitas en botellas que concentran el
              sabor de nuestra tierra, el trabajo experto, el cuidado ambiental
              y la audacia de nuestra experiencia.
            </p>
          </div>

          <div>
            <h3>VISIÓN</h3>
            <p>
              Seguir innovando en la producción de vinos exclusivos, sostenibles
              y de alta gama, destinados al mercado nacional e internacional.
            </p>
          </div>

          <div>
            <h3>VALORES</h3>
            <p>Innovación, sostenibilidad, trabajo, excelencia.</p>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            className="img-nostros"
            src="https://surdelosandes.com/wp-content/uploads/2023/06/bodega-montana-1024x370.png"
            alt="viñedo"
          />
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
