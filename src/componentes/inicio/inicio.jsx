import React, { useState } from "react";
import "./inicio.css";

function Inicio() {
  const [state, setState] = useState({
    nombre: "",
    titulo: "",
    descripcion: "",
    resumen: "",
    varietal: "",
    fermentacion: "",
    crianza: "",
    img: "",
  });

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileSelect = (event) => {
    const fileInput = event.target;

    if (fileInput.files.length > 0) {
      const selectedFile = fileInput.files[0];

      const imageUrl = URL.createObjectURL(selectedFile);

      setState({
        ...state,
        img: imageUrl,
      });
    }
  };

  console.log(state.img);

  return (
    <div className="body-inicio">
      <div></div>
    </div>
  );
}

export default Inicio;
