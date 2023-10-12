import React, { useState, useEffect } from "react";
import axios from "axios";

function MessageLeidos() {
  const [data, setData] = useState(false);

  useEffect(() => {
    if (data === false) {
      axios
        .get("http://localhost:3001/api/message")
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  });

  if (data.length === 0) {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "35vh",
          color: "gray",
        }}
      >
        <h1>No hay mensajes</h1>
      </div>
    );
  } else if (data.length !== 0) {
    return (
      <div className="body-no-leidos">
        {data &&
          data.map((i) => {
            if (i.ledio === "FALSE") {
              return (
                <div
                  className="card-mensajes"
                  style={{ backgroundColor: "aliceblue" }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      alignItems: "center",
                      margin: "10px",
                    }}
                  >
                    <h1>Asunto:</h1>
                    <p>{i.asunto}</p>

                    <h1>Correo:</h1>
                    <p>{i.correo}</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      alignItems: "center",
                      margin: "10px",
                    }}
                  >
                    <h1>Nombre:</h1>
                    <p>{i.nombre}</p>

                    <h1>Apellido:</h1>
                    <p>{i.apellido}</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      alignItems: "center",
                      margin: "10px",
                    }}
                  >
                    <h1>Comentario:</h1>
                    <p>{i.comentarios}</p>
                  </div>
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

export default MessageLeidos;
