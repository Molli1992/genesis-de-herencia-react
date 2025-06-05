import { useEffect } from "react";
import img from "../../imagenes/imagen-4.jpg";
import "./nosotros.css";

function Nosotros() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  window.addEventListener("scroll", function () {
    let elemento = document.querySelector(
      ".container-nosotros-2-container-img"
    );

    if (elemento) {
      let posicion = elemento.getBoundingClientRect();
      if (posicion.top < 850 && posicion.top > -850) {
        elemento.classList.add("animacion-activa");
        elemento.classList.add("opacity-nosotros");
      }
    }
  });

  window.addEventListener("scroll", function () {
    let elemento = document.querySelector(".flex-nostros");

    if (elemento) {
      let posicion = elemento.getBoundingClientRect();
      if (posicion.top < 850 && posicion.top > -850) {
        elemento.classList.add("flex-nostros-animation");
        elemento.classList.add("opacity-nosotros");
      }
    }
  });

  window.addEventListener("scroll", function () {
    let elemento = document.querySelector(".img-nostros");

    if (elemento) {
      let posicion = elemento.getBoundingClientRect();
      if (posicion.top < 850 && posicion.top > -850) {
        elemento.classList.add("img-nostros-animation");
        elemento.classList.add("opacity-nosotros");
      }
    }
  });

  return (
    <div className="body-nosotros">
      <div className="container-nosotros-1">
        <h1>CONÓCENOS</h1>
      </div>

      <div className="container-nosotros-2">
        <div className="container-nosotros-2-container-text">
          <h1>Nuestra Historia</h1>
          <p>
            Marcelo J. Ruiz es un abogado que tiene varias pasiones: la familia,
            sus hijos, su mujer, los amigos, el rugby y el derecho.
          </p>

          <p>
            Lector de novelas jurídicas y de espionaje acompañadas por el humo
            de habanos cubanos y buen vino.
          </p>

          <p>
            Asador por herencia de su abuelo y de su padre, hoy dejando el
            legado a su hijo Estanislao, suele compartir el quincho de su casa,
            bautizado como “La Parrilla del Doctor”, con amigos para disfrutar
            de un buen asado, acompañado con anécdotas, risas y vinos de
            excelencia en donde es ley que “lo que se habla en la parrilla queda
            en la parrilla”.
          </p>

          <p>
            Esta edición de vinos fue creada en honor a la profesión, en la que
            se inició por influencia de sus padres, quienes abrazaron la Ley
            como él y su hija Milagros.
          </p>

          <p>
            Es por ello que, en homenaje a la familia, la amistad y su pasión
            por el derecho se embarcó en esta aventura para compartir con sus
            amigos y honrar la LEY.
          </p>

          <p>
            Nuestra bodega se encuentra al pie de la cordillera de los Andes,
            ubicada en Las Compuertas, en Luján de Cuyo, Mendoza, Argentina.
            Allí, recibimos las mejores uvas para la vinificación y procesamos
            los secretos de la tierra, creando vinos exquisitos, destinados a
            complacer los paladares más exigentes.
          </p>

          <p>SERA JUSTICIA. </p>
        </div>

        <div className="container-nosotros-2-container-img">
          <img src={img} alt="viñedo" />
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
