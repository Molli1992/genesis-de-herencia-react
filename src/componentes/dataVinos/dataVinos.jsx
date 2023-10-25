import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function DataVinos() {
  const arrayVinos = JSON.parse(sessionStorage.getItem("arrayVinos"));
  const history = useNavigate();

  useEffect(() => {
    if (arrayVinos !== null) {
      history("/inicio");
    } else {
      axios
        .get("https://vinos-marcelo-api-production.up.railway.app/api/vinos")
        .then((res) => {
          sessionStorage.setItem("arrayVinos", JSON.stringify(res.data.vinos));
          history("/inicio");
        })
        .catch((err) => {
          console.error("Error en la solicitud:", err);
        });
    }
  });

  return (
    <div
      style={{
        width: "100%",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div class="spinner-grow text-dark" role="status">
        <span class="sr-only"></span>
      </div>
    </div>
  );
}

export default DataVinos;
