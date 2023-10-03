import React from "react";
import { Link } from "react-router-dom";
import "./link.css";

function Links() {
  return (
    <div className="body-link">
      <div className="container-1-link">
        <img
          src="https://link.surdelosandes.com/wp-content/uploads/2023/01/surdelosandes-01-1536x556.jpg"
          alt="viñedo"
          className="container-1-link-img-1"
        />

        <img
          src="https://link.surdelosandes.com/wp-content/uploads/2023/01/logo-sdla.png"
          alt="escudo"
          className="container-1-link-img-2"
        />
      </div>

      <div className="flex-container-link">
        <Link to={"/"} className="container-2-link">
          <img
            src="https://link.surdelosandes.com/wp-content/uploads/2023/01/icono-2.jpg"
            alt="chrome"
          />

          <p>Nuestro Sitio Web</p>
        </Link>

        <div className="container-2-link">
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
