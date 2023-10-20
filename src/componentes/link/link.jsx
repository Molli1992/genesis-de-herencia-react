import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./link.css";

function Links() {
  const history = useNavigate();

  const onClickRouteHome = () => {
    history("/inicio");
    window.scroll(0, 0);
  };

  const onClickNuestosVinos = () => {
    Swal.fire({
      title: "Error!",
      text: "En reparacion",
      icon: "error",
      confirmButtonText: "Ok",
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
