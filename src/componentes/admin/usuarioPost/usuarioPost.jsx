import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function UsuarioPost() {
  const history = useNavigate();
  const [dataPost, setDataPost] = useState({
    usuario: "",
    contraseña: "",
    repetircontraseña: "",
  });

  const handleInputChangePost = (e) => {
    setDataPost({
      ...dataPost,
      [e.target.name]: e.target.value,
    });
    console.log(dataPost);
  };

  const onSubmit = () => {
    if (
      dataPost.usuario === "" ||
      dataPost.contraseña === "" ||
      dataPost.repetircontraseña === ""
    ) {
      Swal.fire({
        title: "Error!",
        text: "Completar todos los campos",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else if (dataPost.contraseña !== dataPost.repetircontraseña) {
      Swal.fire({
        title: "Error!",
        text: "Contraseña y Repetir Contraseña deben ser iguales",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else {
      axios
        .post(
          "https://vinos-marcelo-api-production.up.railway.app/api/admin",
          dataPost
        )
        .then((res) => {
          console.log(res);
          Swal.fire({
            title: "Success!",
            text: "Vino creado correctamente!",
            icon: "success",
            confirmButtonText: "Ok",
          }).then(() => {
            history("/link");
            window.scrollTo(0, 0);
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

  return (
    <div className="body-admin">
      <h1>Crea tu usuario</h1>

      <div className="container-1-admin">
        <div class="mb-3">
          <label class="form-label">Usuario</label>
          <input
            class="form-control"
            name="usuario"
            style={{ border: "1px solid gray" }}
            onChange={handleInputChangePost}
          />
        </div>
      </div>

      <div className="container-1-admin">
        <div class="mb-3">
          <label class="form-label">Contraseña</label>
          <input
            type="password"
            class="form-control"
            name="contraseña"
            style={{ border: "1px solid gray" }}
            onChange={handleInputChangePost}
          />
        </div>
      </div>

      <div className="container-1-admin">
        <div class="mb-3">
          <label class="form-label">Repetir Contraseña</label>
          <input
            type="password"
            class="form-control"
            name="repetircontraseña"
            style={{ border: "1px solid gray" }}
            onChange={handleInputChangePost}
          />
        </div>
      </div>

      <button class="btn btn-primary" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
}

export default UsuarioPost;
