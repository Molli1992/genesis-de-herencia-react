import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./contacto.css";

function Contacto() {
  const history = useNavigate();
  const [dataPost, setDataPost] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    asunto: "",
    comentarios: "",
  });

  const onChange = (e) => {
    setDataPost({
      ...dataPost,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (
      dataPost.nombre === "" ||
      dataPost.apellido === "" ||
      dataPost.correo === "" ||
      dataPost.asunto === "" ||
      dataPost.comentarios === ""
    ) {
      Swal.fire({
        title: "Info!",
        text: "Completar todos los campos",
        icon: "info",
        confirmButtonText: "Ok",
      });
    } else {
      axios
        .post(`${process.env.REACT_APP_API_URL}/api/sendEmail`, dataPost)
        .then((res) => {
          Swal.fire({
            title: "Success!",
            text: "Mensaje enviado correctamente!",
            icon: "success",
            confirmButtonText: "Ok",
          }).then(() => {
            setDataPost({
              nombre: "",
              apellido: "",
              correo: "",
              asunto: "",
              comentarios: "",
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
    }
  };

  const onClickInstagram = () => {
    window.open(
      "https://instagram.com/genesisdeherencia?igshid=MzRlODBiNWFlZA==",
      "_blank"
    );
  };

  const onClickWhatsapp = () => {
    window.open("https://api.whatsapp.com/send?phone=5491167839590", "_blank");
  };

  const onClickLink = () => {
    history("/link");
  };

  return (
    <div className="body-contacto">
      <div className="container-contacto-1">
        <h1>CONTACTO</h1>
      </div>

      <div className="container-contacto-2">
        <div className="container-left-contacto">
          <h1>Canales de Contacto</h1>

          <div
            style={{
              marginTop: "50px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#858585"
              class="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              />
            </svg>

            <h3 style={{ height: "10px" }}>+54 9 11 6783-9590</h3>
          </div>

          <div
            style={{
              marginTop: "50px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#858585"
              class="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              />
            </svg>

            <h3 style={{ height: "10px" }}>+54 9 11 3803-1129</h3>
          </div>

          <h1 style={{ marginTop: "100px" }}>Siguenos</h1>

          <div className="container-redes-contacto">
            <div
              className="container-instagram-contacto"
              onClick={onClickInstagram}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="white"
                class="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </div>

            <div
              className="container-whatsapp-contacto"
              onClick={onClickWhatsapp}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="white"
                class="bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
            </div>

            <div className="container-link-contacto" onClick={onClickLink}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="white"
                class="bi bi-link-45deg"
                viewBox="0 0 16 16"
              >
                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="container-rigth-contacto">
          <div className="container-inputs-contacto">
            <div className="container-labels-inputs-contacto">
              <label>Nombre</label>
              <input
                name="nombre"
                placeholder="Nombre"
                onChange={onChange}
                value={dataPost.nombre}
              />
            </div>

            <div className="container-labels-inputs-contacto">
              <label>Apellido</label>
              <input
                name="apellido"
                placeholder="Apellido"
                onChange={onChange}
                value={dataPost.apellido}
              />
            </div>
          </div>

          <div className="container-inputs-contacto">
            <div className="container-labels-inputs-contacto">
              <label>Correo Electronico</label>
              <input
                name="correo"
                placeholder="Correo Electronico"
                onChange={onChange}
                value={dataPost.correo}
              />
            </div>

            <div className="container-labels-inputs-contacto margin-top-contacto">
              <label>Asunto</label>
              <input
                name="asunto"
                placeholder="¿Necesesitas Ayuda?"
                onChange={onChange}
                value={dataPost.asunto}
              />
            </div>
          </div>

          <div className="container-text-area-contacto">
            <label>Comentarios</label>
            <textarea
              name="comentarios"
              placeholder="Comentarios"
              onChange={onChange}
              value={dataPost.comentarios}
            ></textarea>
          </div>

          <button onClick={onSubmit}>Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
