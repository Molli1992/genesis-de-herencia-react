import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import imagen from "../../imagenes/imagen-10.jpg";
import "./inicio.css";

function Inicio() {
  const arrayVinos = JSON.parse(sessionStorage.getItem("arrayVinos"));
  const [sliderVinos, setSliderVinos] = useState(false);
  const [stateSlider, setStateSlider] = useState(false);
  const history = useNavigate();

  const onClickStateSlider = () => {
    if (stateSlider === false) {
      setStateSlider(true);
    } else {
      setStateSlider(false);
    }
  };

  const onClickStateSliderVinos = () => {
    if (sliderVinos === false) {
      setSliderVinos(true);
    } else {
      setSliderVinos(false);
    }
  };

  const routeViñedosOnClick = () => {
    history("/nuestros-viñedos");
    window.scrollTo(0, 0);
  };

  const routeNosotrosOnClick = () => {
    history("/conocenos");
    window.scrollTo(0, 0);
  };

  //---------------------------------------------- animaciones- ----------------------------------------------

  window.addEventListener("scroll", function () {
    let elemento = document.querySelector(".animacion-inicio");

    if (elemento) {
      let posicion = elemento.getBoundingClientRect();
      if (posicion.top < 550 && posicion.top > -450) {
        elemento.classList.add("animation-top-viñedos");
        elemento.classList.add("opacity-viñedos");
      }
    }
  });

  window.addEventListener("scroll", function () {
    let elemento = document.querySelector(".animacion-inicio-2");

    if (elemento) {
      let posicion = elemento.getBoundingClientRect();
      if (posicion.top < 550 && posicion.top > -450) {
        elemento.classList.add("animation-left-viñedos");
        elemento.classList.add("opacity-viñedos");
      }
    }
  });

  window.addEventListener("scroll", function () {
    let elemento = document.querySelector(".animacion-inicio-3");

    if (elemento) {
      let posicion = elemento.getBoundingClientRect();
      if (posicion.top < 750 && posicion.top > -450) {
        elemento.classList.add("animation-top-viñedos");
        elemento.classList.add("opacity-viñedos");
      }
    }
  });

  window.addEventListener("scroll", function () {
    let elemento = document.querySelector(".animacion-inicio-4");

    if (elemento) {
      let posicion = elemento.getBoundingClientRect();
      if (posicion.top < 550 && posicion.top > -450) {
        elemento.classList.add("animation-left-viñedos");
        elemento.classList.add("opacity-viñedos");
      }
    }
  });

  window.addEventListener("scroll", function () {
    let elemento = document.querySelector(".animacion-inicio-5");

    if (elemento) {
      let posicion = elemento.getBoundingClientRect();
      if (posicion.top < 750 && posicion.top > -450) {
        elemento.classList.add("animation-top-viñedos");
        elemento.classList.add("opacity-viñedos");
      }
    }
  });

  if (arrayVinos !== null) {
    return (
      <div className="body-inicio">
        {stateSlider === false ? (
          <div className="container-inicio-1 imagen-de-fond-1">
            <img
              src={arrayVinos.length !== 0 ? arrayVinos[0].img : ""}
              alt="vino"
            />

            <p className="animation-bottom-inicio">
              NUESTROS VINOS REPRESENTAN EXCELENCIA Y SOSTENIBILIDAD
            </p>

            <button
              onClick={routeViñedosOnClick}
              className="button-slider animation-bottom-inicio"
            >
              CONOCE NUESTROS VIÑEDOS
            </button>

            <div className="container-buttons-slider animation-bottom-inicio">
              <button className="button-select-slider"></button>
              <button
                className="button-select-slider-2"
                onClick={onClickStateSlider}
              ></button>
            </div>
          </div>
        ) : (
          <div className="container-inicio-1 imagen-de-fond-2">
            <div className="img-frutas animation-bottom-inicio">
              <img
                src="https://surdelosandes.com/wp-content/uploads/2023/02/im07.png"
                alt="frutas"
              />
            </div>

            <div className="img-slider-2">
              <img
                src={arrayVinos.length !== 0 ? arrayVinos[3].img : ""}
                alt="vino"
              />
            </div>

            <p className="animation-bottom-inicio" style={{ color: "#000000" }}>
              NUESTROS VINOS REPRESENTAN EXCELENCIA Y SOSTENIBILIDAD
            </p>

            <button
              onClick={routeViñedosOnClick}
              className="animation-bottom-inicio button-new-slider button-slider"
            >
              CONOCE NUESTROS VIÑEDOS
            </button>

            <div className="animation-bottom-inicio container-buttons-slider">
              <button
                className="button-select-slider-2"
                onClick={onClickStateSlider}
              ></button>
              <button className="button-select-slider"></button>
            </div>
          </div>
        )}

        <div className="container-inicio-2">
          <div className="container-flex-inicio">
            <h3>NOSOTROS</h3>
          </div>

          <div className="container-flex-inicio animacion-inicio">
            <h1>
              MEZCLAMOS EL SABER PROFESIONAL Y EL ARTE MILENARIO PARA CREAR
              VINOS EXCEPCIONALES
            </h1>
          </div>

          <div className="container-flex-inicio contaner-block-inicio">
            <div className="container-inicio-2-left animacion-inicio-2">
              <img src={imagen} alt="vinos" />
            </div>

            <div className="container-inicio-2-right">
              <p>
                Marcelo J. Ruiz es un abogado que tiene varias pasiones: la
                familia, sus hijos, su mujer, los amigos, el rugby y el derecho.
              </p>

              <p>
                Lector de novelas jurídicas y de espionaje acompañadas por el
                humo de habanos cubanos y buen vino.
              </p>

              <p>
                Asador por herencia de su abuelo y de su padre, hoy dejando el
                legado a su hijo Estanislao, suele compartir el quincho de su
                casa, bautizado como “La Parrilla del Doctor”, con amigos para
                disfrutar de un buen asado, acompañado con anécdotas, risas y
                vinos de excelencia en donde es ley que “lo que se habla en la
                parrilla queda en la parrilla”.
              </p>

              <p>
                Esta edición de vinos fue creada en honor a la profesión, en la
                que se inició por influencia de sus padres, quienes abrazaron la
                Ley como él y su hija Milagros.
              </p>

              <p>
                Es por ello que, en homenaje a la familia, la amistad y su
                pasión por el derecho se embarcó en esta aventura para compartir
                con sus amigos y honrar la LEY.
              </p>

              <p>
                Nuestra bodega se encuentra al pie de la cordillera de los
                Andes, ubicada en Las Compuertas, en Luján de Cuyo, Mendoza,
                República Argentina. Allí, recibimos las mejores uvas para la
                vinificación y procesamos los secretos de la tierra, creando
                vinos exquisitos, destinados a complacer los paladares más
                exigentes.
              </p>

              <p>SERA JUSTICIA. </p>

              <div className="container-flex-inicio">
                <button
                  onClick={routeNosotrosOnClick}
                  className="button-1-container-inicio2"
                >
                  Conocenos
                </button>
                <button
                  onClick={routeViñedosOnClick}
                  className="button-2-container-inicio2"
                >
                  Nuestros Viñedos
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container-inicio-3 imagen-de-fond-2">
          <div className="container-flex-inicio">
            <h3>NUESTROS VINOS</h3>
          </div>

          <div className="container-flex-inicio animacion-inicio-3">
            <h1>DESCUBRE EL ARTE EN CADA SORBO</h1>
          </div>

          {sliderVinos === false ? (
            <div className="container-inicio-3-slider">
              {arrayVinos &&
                arrayVinos.map((i) => {
                  if (
                    i.nombre === "TRIBUNAL" ||
                    i.nombre === "CADENA PERPETUA"
                  ) {
                    return (
                      <Link
                        to={"/reserva/" + i.nombre}
                        className="card-container-inicio-3"
                      >
                        <div className="container-card-left">
                          <img src={i.img} alt="vinos" />
                        </div>

                        <div className="container-card-right">
                          <p className="tittle-card">{i.nombre}</p>

                          <p className="sub-tittle-card">{i.resumen}</p>
                        </div>
                      </Link>
                    );
                  }
                  return null;
                })}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-arrow-right-circle-fill"
                viewBox="0 0 16 16"
                onClick={onClickStateSliderVinos}
              >
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
              </svg>
            </div>
          ) : (
            <div className="container-inicio-3-slider">
              {arrayVinos &&
                arrayVinos.map((i) => {
                  if (i.nombre === "ARREPENTIDO" || i.nombre === "FISCAL") {
                    return (
                      <Link
                        to={"/reserva/" + i.nombre}
                        className="card-container-inicio-3"
                      >
                        <div className="container-card-left">
                          <img src={i.img} alt="vinos" />
                        </div>

                        <div className="container-card-right">
                          <p className="tittle-card">{i.nombre}</p>

                          <p className="sub-tittle-card">{i.resumen}</p>
                        </div>
                      </Link>
                    );
                  }
                  return null;
                })}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-arrow-right-circle-fill"
                viewBox="0 0 16 16"
                onClick={onClickStateSliderVinos}
              >
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
              </svg>
            </div>
          )}
        </div>

        <div className="container-inicio-4">
          <h1 className="animacion-inicio-4">
            ENCUENTRA LA PASIÓN EN CADA COPA
          </h1>

          <p>
            Sumérgete en el deleite de sabores exquisitos, capturados en cada
            botella que encierra el auténtico sabor de nuestra tierra.
          </p>

          <button
            onClick={routeViñedosOnClick}
            className="button-1-container-inicio2 margin-left-container-4"
          >
            Saber Mas
          </button>
        </div>

        <div className="container-inicio-5">
          <div className="container-flex-inicio">
            <h3>¿POR QUÉ ELEGIR NUESTROS VINOS?</h3>
          </div>

          <div className="container-flex-inicio animacion-inicio-5">
            <h1 className="container-flex-inicio">
              NUESTROS EXQUISITOS VINOS ESTÁN DISEÑADOS PARA SATISFACER LOS
              PALADARES MÁS EXIGENTES, BRINDANDO UNA EXPERIENCIA INIGUALABLE.
            </h1>
          </div>

          <div className="container-cards-inicio-5">
            <div className="card-inicio-5">
              <img
                src="https://surdelosandes.com/wp-content/uploads/2023/05/icono-7.png"
                alt="dibujo"
              />

              <h5>TRABAJADORES CON TRADICIÓN</h5>

              <p>
                Las manos que cultivan nuestros viñedos, conocen por tradición
                el arte de la viticultura.
              </p>
            </div>

            <div className="card-inicio-5">
              <img
                src="https://surdelosandes.com/wp-content/uploads/2023/05/icono-8.png"
                alt="dibujo"
              />

              <h5>TRAYECTORIA</h5>

              <p>
                La historia de Genesis de Herencia comienza con la innovación
                productiva y comercial que introduce Marcelo J. Ruiz.
              </p>
            </div>

            <div className="card-inicio-5">
              <img
                src="https://surdelosandes.com/wp-content/uploads/2023/05/icono-9.png"
                alt="dibujo"
              />

              <h5>SOSTENIBILIDAD</h5>

              <p>
                Estamos comprometidos con una economía responsable, con el pleno
                empleo y el crecimiento en armonía con la naturaleza.
              </p>
            </div>

            <div className="card-inicio-5">
              <img
                src="https://surdelosandes.com/wp-content/uploads/2023/05/icono-6.png"
                alt="dibujo"
              />

              <h5>SUELOS DE ORIGEN</h5>

              <p>
                Nuestros vinos traducen el lenguaje oculto de la tierra
                mendocina: Luján de Cuyo y Valle de Uco.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="body-loader">
        <h1>Cargando...</h1>
      </div>
    );
  }
}

export default Inicio;
