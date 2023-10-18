import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./messageNoLeidos.css";

function MessageNoLeidos(props) {
  const [buttonValue, setButtonValue] = useState("Mover a Leidos");
  const [data, setData] = useState(false);

  const onSubmit = (i) => {
    setButtonValue("Cargando...");
    axios
      .put("https://vinos-marcelo-api-production.up.railway.app/api/message", {
        ledio: "FALSE",
        id: i.id,
      })
      .then((res) => {
        Swal.fire({
          title: "Success!",
          text: "Mensaje movido a leidos!",
          icon: "success",
          confirmButtonText: "Ok",
        }).then(() => {
          axios
            .get(
              "https://vinos-marcelo-api-production.up.railway.app/api/message"
            )
            .then((response) => {
              setData(response.data);
              setButtonValue("Mover a Leidos");
            })
            .catch((error) => {
              console.error(error);
            });
        });
      })
      .catch((err) => {
        const message = err.response.data;
        Swal.fire({
          title: "Error!",
          text: message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  useEffect(() => {
    if (data === false) {
      axios
        .get("https://vinos-marcelo-api-production.up.railway.app/api/message")
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  });

  if (data !== false && data.message.length === 0) {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "35vh",
        }}
      >
        <h1>No hay mensajes</h1>
      </div>
    );
  } else if (data !== false && data.message.length !== 0) {
    return (
      <div className="body-no-leidos">
        <h1>Mensaje no Leidos:</h1>

        {data &&
          data.message.map((i) => {
            if (i.ledio === "TRUE") {
              return (
                <div className="card-mensajes">
                  <div class="info">
                    <h1>Asunto:</h1>
                    <p>{i.asunto}</p>
                  </div>

                  <div class="info">
                    <h1>Correo:</h1>
                    <p>{i.correo}</p>
                  </div>

                  <div class="info">
                    <h1>Nombre:</h1>
                    <p>{i.nombre}</p>
                  </div>

                  <div class="info">
                    <h1>Apellido:</h1>
                    <p>{i.apellido}</p>
                  </div>

                  <div class="info">
                    <h1>Comentario:</h1>
                    <p>{i.comentarios}</p>
                  </div>

                  <button onClick={() => onSubmit(i)} class="btn btn-primary">
                    {buttonValue}
                  </button>
                </div>
              );
            } else {
              return null;
            }
          })}
      </div>
    );
  }
}

export default MessageNoLeidos;
