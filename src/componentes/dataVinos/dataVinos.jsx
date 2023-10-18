import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function DataVinos() {
  const history = useNavigate();
  const [data, setData] = useState(false);

  if (data === false) {
    axios
      .get("https://vinos-marcelo-api-production.up.railway.app/api/vinos")
      .then((res) => {
        localStorage.setItem("arrayVinos", JSON.stringify(res.data.vinos));
        history("/inicio");
        setData(true);
      })
      .catch((err) => {
        console.error("Error en la solicitud:", err);
      });
  }

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
      <h1>Cargando...</h1>
    </div>
  );
}

export default DataVinos;
