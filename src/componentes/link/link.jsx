import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./link.css";
import vinosStore from "../../zustand/vinosStore";

function Links() {
  const history = useNavigate();
  const { vinos } = vinosStore();

  console.log(vinos);

  const onClickRouteHome = () => {
    history("/");
    window.scroll(0, 0);
  };

  const onClickNuestosVinos = async () => {
    const buttonsHtml = vinos
      .map(
        (vino, index) =>
          `<button class="swal2-vino-button" data-index="${index}">${vino.nombre}</button>`
      )
      .join("");

    const { value: selectedIndex } = await Swal.fire({
      title: "Nuestros Vinos",
      html: `<div style="display: flex; flex-direction: column; gap: 10px;">${buttonsHtml}</div>`,
      showConfirmButton: false,
      didOpen: () => {
        const buttons =
          Swal.getHtmlContainer().querySelectorAll(".swal2-vino-button");
        buttons.forEach((btn) => {
          btn.addEventListener("click", () => {
            const index = btn.getAttribute("data-index");
            Swal.close();
            if (vinos[index]) {
              history(`/reserva/${vinos[index].nombre.toUpperCase()}`);
              window.scroll(0, 0);
            }
          });
        });
      },
    });
  };

  return (
    <div className="body-link">
      <div className="container-1-link">
        <img
          src="https://link.surdelosandes.com/wp-content/uploads/2023/01/surdelosandes-01-1536x556.jpg"
          alt="viñedo"
          className="container-1-link-img-1"
        />

        <img
          src="https://media.istockphoto.com/id/960574664/es/vector/copa-de-vino-tinto-con-splash-dibujo-a-mano-icono-de-la-copa-de-vino-vector-stock-logo.jpg?s=612x612&w=0&k=20&c=COVLBCccwT0GnQeEysOBC172o4aSI7K6YcyyjFtK8DU="
          alt="escudo"
          className="container-1-link-img-2"
        />
      </div>

      <div className="flex-container-link">
        <div className="container-2-link" onClick={onClickRouteHome}>
          <img
            src="https://link.surdelosandes.com/wp-content/uploads/2023/01/icono-2.jpg"
            alt="chrome"
          />

          <p>Nuestro Sitio Web</p>
        </div>

        <div className="container-2-link" onClick={onClickNuestosVinos}>
          <img
            src="https://link.surdelosandes.com/wp-content/uploads/2023/01/icono-5.jpg"
            alt="vinos"
          />

          <p>Nuestros Vinos</p>
        </div>
      </div>

      <div className="flex-container-link">
        <Link to={"/admin"} className="container-2-link">
          <img
            src="https://link.surdelosandes.com/wp-content/uploads/2023/01/icono-4.jpg"
            alt="admin"
          />

          <p>Administrador</p>
        </Link>

        <Link to={"/contactanos"} className="container-2-link">
          <img
            src="https://link.surdelosandes.com/wp-content/uploads/2023/01/icono-3.jpg"
            alt="telefono"
          />

          <p>Contactanos</p>
        </Link>
      </div>
    </div>
  );
}

export default Links;
