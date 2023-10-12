import React from "react";
import "./viñedos.css";

function Viñedos() {
  window.addEventListener("scroll", function () {
    let elemento = document.querySelector(".tittle-animation-viñedos-2");

    if (elemento) {
      let posicion = elemento.getBoundingClientRect();
      console.log(posicion);
      if (posicion.top < 550 && posicion.top > -450) {
        elemento.classList.add("animation-left-viñedos");
        elemento.classList.add("opacity-viñedos");
      }
    }
  });

  window.addEventListener("scroll", function () {
    let elemento = document.querySelector(".container-viñedos-2-rigth");

    if (elemento) {
      let posicion = elemento.getBoundingClientRect();
      if (posicion.top < 550 && posicion.top > -450) {
        elemento.classList.add("animation-rigth-viñedos");
        elemento.classList.add("opacity-viñedos");
      }
    }
  });

  window.addEventListener("scroll", function () {
    let elemento = document.querySelector(".container-viñedos-3-left");

    if (elemento) {
      let posicion = elemento.getBoundingClientRect();
      if (posicion.top < 550 && posicion.top > -450) {
        elemento.classList.add("animation-left-viñedos");
        elemento.classList.add("opacity-viñedos");
      }
    }
  });

  window.addEventListener("scroll", function () {
    let elemento = document.querySelector(".tittle-animation-viñedos-3");

    if (elemento) {
      let posicion = elemento.getBoundingClientRect();
      if (posicion.top < 550 && posicion.top > -450) {
        elemento.classList.add("animation-rigth-viñedos");
        elemento.classList.add("opacity-viñedos");
      }
    }
  });

  window.addEventListener("scroll", function () {
    let elemento = document.querySelector(".container-viñedos-4-left");

    if (elemento) {
      let posicion = elemento.getBoundingClientRect();
      if (posicion.top < 550 && posicion.top > -450) {
        elemento.classList.add("animation-left-viñedos");
        elemento.classList.add("opacity-viñedos");
      }
    }
  });

  window.addEventListener("scroll", function () {
    let elemento = document.querySelector(".animation-h1-viñedos-4");

    if (elemento) {
      let posicion = elemento.getBoundingClientRect();
      if (posicion.top < 550 && posicion.top > -450) {
        elemento.classList.add("animation-top-viñedos");
        elemento.classList.add("opacity-viñedos");
      }
    }
  });

  window.addEventListener("scroll", function () {
    let elemento = document.querySelector(".container-viñedos-5-left");

    if (elemento) {
      let posicion = elemento.getBoundingClientRect();
      if (posicion.top < 550 && posicion.top > -450) {
        elemento.classList.add("animation-left-viñedos");
        elemento.classList.add("opacity-viñedos");
      }
    }
  });

  window.addEventListener("scroll", function () {
    let elemento = document.querySelector(".container-viñedos-5-h1");

    if (elemento) {
      let posicion = elemento.getBoundingClientRect();
      if (posicion.top < 550 && posicion.top > -450) {
        elemento.classList.add("animation-top-viñedos");
        elemento.classList.add("opacity-viñedos");
      }
    }
  });

  window.addEventListener("scroll", function () {
    let elemento = document.querySelector(".container-viñedos-6-rigth");

    if (elemento) {
      let posicion = elemento.getBoundingClientRect();
      if (posicion.top < 550 && posicion.top > -450) {
        elemento.classList.add("animation-rigth-viñedos");
        elemento.classList.add("opacity-viñedos");
      }
    }
  });

  window.addEventListener("scroll", function () {
    let elemento = document.querySelector(
      ".animacion-2-container-viñedos-6-rigth"
    );

    if (elemento) {
      let posicion = elemento.getBoundingClientRect();
      if (posicion.top < 550 && posicion.top > -450) {
        elemento.classList.add("animation-left-viñedos");
        elemento.classList.add("opacity-viñedos");
      }
    }
  });

  window.addEventListener("scroll", function () {
    let elemento = document.querySelector(
      ".animacion-3-container-viñedos-6-rigth"
    );

    if (elemento) {
      let posicion = elemento.getBoundingClientRect();
      if (posicion.top < 550 && posicion.top > -450) {
        elemento.classList.add("animation-rigth-viñedos");
        elemento.classList.add("opacity-viñedos");
      }
    }
  });

  return (
    <div className="body-viñedos">
      <div className="container-viñedos-1">
        <h3>NOSOTROS</h3>
        <h1>NUESTROS VIÑEDOS</h1>
        <h2>Y BODEGA</h2>
      </div>

      <div className="container-viñedos-2">
        <div className="container-viñedos-2-left">
          <h3>NUESTROS VIÑEDOS</h3>
          <h1 className="tittle-animation-viñedos-2">TIERRA HERMOSA MÁGICA</h1>

          <p className="p-tittle-container-viñedos-2-left">
            “Los trabajadores de Genesis de Herencia son dueños de un saber
            histórico reproducido por generaciones”.
          </p>

          <p>
            En Genesis de Herencia estamos comprometidos con la creación de
            empleos dignos e innovadores que incluyen a mujeres y hombres en
            igualdad de condiciones. Las faenas de nuestra producción apuntan
            siempre a la excelencia, pero también al crecimiento de todos los
            trabajadores implicados, por lo cual queremos destacar por valores
            tan importantes como la integridad ética y la responsabilidad
            corporativa.
          </p>

          <p>
            Nuestros aliados en Luján de Cuyo -en particular en Las Compuertas,
            Vistalba y Agrelo- son los pequeños productores con fincas que
            oscilan entre 5 y 15 hectáreas, ubicadas próximas a nuestra bodega,
            en donde se producen viñedos ya centenarios implantados por el año
            1900. Siendo una de las zonas de producción vitícola más antigua de
            la Argentina, hablamos así de Luján de Cuyo como tradición.
          </p>

          <p>
            En el Valle de Uco, que representa el emblema moderno de la
            vitivinicultura argentina, tenemos una hermosa finca ubicada en
            Chacayes, entre los 1100 y 1250 msnm, en donde cosechamos uvas de
            calidad excepcional: Malbec, Cabernet Sauvignon y Cabernet Franc.
            Aun cuando desarrollamos técnicas de riego y cultivo modernos,
            también en Valle de Uco trabajamos con pequeños productores locales
            detentores del histórico saber vitícola argentino, en Los Árboles y
            La Consulta.
          </p>
        </div>

        <div className="container-viñedos-2-rigth">
          <img
            src="https://surdelosandes.com/wp-content/uploads/2023/05/vinedos-argentina-surdelosandes.jpg.png"
            alt="Viñedo"
          />
        </div>
      </div>

      <div className="container-viñedos-3">
        <div className="container-viñedos-3-left">
          <img
            src="https://surdelosandes.com/wp-content/uploads/2023/09/Imagen3-e1694915926170-768x860.gif"
            alt="Viñedos"
          />
        </div>

        <div className="container-viñedos-3-rigth">
          <h1 className="tittle-animation-viñedos-3">ELABORACIÓN</h1>

          <p>
            La gestión de nuestros viñedos y vinificación es responsabilidad de
            enólogos argentinos, quienes deciden sobre cortes, técnicas de
            cultivo y metodologías de elaboración.
          </p>

          <p>
            En nuestra bodega, adonde logran encontrarse el saber profesional y
            el arte milenario de hacer buen vino, contamos con la
            infraestructura ideal para ello: piletas de cemento tradicionales
            sin epoxi, tanques de acero inoxidable, huevos de cemento, barricas,
            ánforas y foudres.
          </p>

          <p>
            Allí reunimos nuestras propias uvas provenientes de Chacayes, con
            las de aquellos pequeños productores de Las Compuertas, Agrelo,
            Altamira, La Consulta y Los Árboles, todas de altísima calidad y
            especiales para la producción de vinos de alta gama.
          </p>
        </div>
      </div>

      <div className="container-viñedos-4">
        <div className="container-viñedos-4-left">
          <img
            src="https://surdelosandes.com/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-12-at-11.41.06-e1694915529356.jpeg"
            alt="Tanque"
          />
        </div>

        <div className="container-viñedos-4-right">
          <h1 className="animation-h1-viñedos-4">BODEGA</h1>

          <p>
            Rodeada de cerros y montañas, la arquitectura de nuestra bodega
            rinde homenaje a la fisonomía del lugar, donde las enormes paredes
            de concreto, armados con áridos y tierras elegidas del lugar
            armonizan con los colores y formas propias del piedemonte y se
            hermanan con los viñedos de la zona. La misma filosofía de
            edificación se traslada a nuestros vinos, pues los materiales
            naturales utilizados en las vasijas de concreto, cerámica y madera
            les aportan carácter e identidad.
          </p>

          <p>
            La bodega Genesis de Herencia cuenta con un sector experimental de
            alta gama destinado al estudio de diferentes parcelas y expresividad
            de los terroirs. Para ello utilizamos maquinaria Pellenc de última
            generación con el objetivo de preservar la calidad de las uvas
            empleadas.
          </p>

          <p>
            Nuestra bodega ostenta una sala amplia con barricas a temperatura y
            humedad controlada destinada al correcto añejamiento de nuestros
            vinos. Asimismo, se encuentran 2 naves productivas, una principal
            con capacidad de 420.000 litros entre piletas de hormigón y tanques
            de acero inoxidable, y una segunda nave de 100.000 litros con
            vasijas y tanques pequeños de menos de 5.000 litros.
          </p>
        </div>
      </div>

      <div className="container-viñedos-5">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "50px 0px",
          }}
        >
          <h1 className="container-viñedos-5-h1">ATRIBUTOS</h1>
        </div>

        <div className="flex-viñedos-container-5">
          <div className="container-viñedos-5-left">
            <img
              src="https://surdelosandes.com/wp-content/uploads/2023/06/tierradeorigen-surdelosandes.jpg.png.jpg"
              alt="Viñedos"
            />
          </div>

          <div className="container-viñedos-5-right">
            <h3>LOS SUELOS DE ORIGEN</h3>

            <p>
              Al hablar de suelos nos referimos a uno de los atributos más
              definitorios de nuestra identidad como Genesis de Herencia.
            </p>

            <p>
              Nuestras exquisitas uvas provienen de dos enclaves productivos
              asentados en ricas tierras ideales para viñedos de alta gama:
              Luján de Cuyo y el Valle de Uco, en la provincia de Mendoza, que
              concentra el mayor porcentaje de cultivos vitícolas de la
              Argentina.
            </p>

            <p>
              Luján de Cuyo asienta viñedos centenarios todavía cultivados con
              técnicas tradicionales. Allí se encuentran Las Compuertas y
              Agrelo, de donde procede buena parte de las uvas de Sur de Los
              Andes. Con un clima seco de inviernos fríos, temperaturas altas en
              verano y una buena aptitud térmica, los suelos de Luján de Cuyo
              son francos y franco-arcillosos con abundante material grueso,
              tienen buena permeabilidad y escasa materia orgánica.
            </p>

            <p>
              Valle de Uco posee un clima seco y de limitadas lluvias, muy
              favorable al cultivo de la vid, con suelos aluvionales, pedregosos
              y poco fértiles. De allí proviene la otra parte de las uvas de
              Genesis de Herencia, cultivadas en nuestra hermosa finca de
              Chacayes, entre los 1100 y 1250 msnm.
            </p>
          </div>
        </div>
      </div>

      <div className="container-viñedos-6">
        <div className="container-viñedos-6-left">
          <h3>TRABAJADORES CON TRADICIÓN</h3>

          <p>
            La producción vitivinícola de Genesis de Hrencia incorpora varios
            actores, entre los cuales destacan los pequeños y medianos
            productores, dueños de un saber histórico reproducido de generación
            en generación. Herederos de antiguas técnicas, hoy se han integrado
            a una importante trama de relaciones agroindustriales, mientras su
            conocimiento tradicional enriquece la nueva forma de producción
            vitivinícola en Mendoza.
          </p>

          <p>
            Los pequeños y medianos productores de Luján de Cuyo y del valle de
            Uco, son los protagonistas de nuestros territorios, los que han
            dibujado el paisaje social y cultural de donde provienen las uvas de
            Genesis de Hrencia. Trabajamos juntos por un medio ambiente sano y
            sostenible.
          </p>
        </div>

        <div className="container-viñedos-6-rigth">
          <img
            src="https://surdelosandes.com/wp-content/uploads/2023/05/trabajadores-con-tradicion-surdelosandes.jpg"
            alt="Trabajadores"
          />
        </div>
      </div>

      <div className="container-viñedos-6">
        <div className="container-viñedos-6-rigth animacion-2-container-viñedos-6-rigth">
          <img
            src="https://surdelosandes.com/wp-content/uploads/2023/05/sostenibilidad-surdelosandes.jpg"
            alt="Trabajadores"
          />
        </div>

        <div className="container-viñedos-6-left">
          <h3>SOSTENIBILIDAD</h3>

          <p>Cumplimiento de la Agenda 2030 de la ONU.</p>

          <p>
            Para Genesis de Herencia, sostenibilidad significa que los Objetivos
            de Desarrollo Sostenible (ODS) son una hoja de ruta que seguimos de
            manera corporativa. En este sentido, estamos implicados y
            comprometidos puntualmente con el logro de los siguientes ODS:
          </p>

          <p>
            Objetivo 8: La promoción del crecimiento económico inclusivo y
            sostenible, el empleo pleno y productivo y el trabajo decente para
            todos
          </p>

          <p>
            Objetivo 12: Garantizar modalidades de consumo y producción
            responsables y sostenibles.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Viñedos;
