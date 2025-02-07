import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import usersStore from "../../../zustand/usersStore";

function UsuarioPost() {
  const { users, setUsers } = usersStore();
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      axios
        .post(`${process.env.REACT_APP_API_URL}/api/admin`, dataPost)
        .then((res) => {
          const addUser = users;
          addUser.push(res.data);
          setUsers(addUser);
          setLoading(false);
          setDataPost({
            usuario: "",
            contraseña: "",
            repetircontraseña: "",
          });
          Swal.fire({
            title: "Success!",
            text: "Vino creado correctamente!",
            icon: "success",
            confirmButtonText: "Ok",
          });
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          setDataPost({
            usuario: "",
            contraseña: "",
            repetircontraseña: "",
          });
          Swal.fire({
            title: "Error!",
            text: "Error creando usuario",
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
            value={dataPost.usuario}
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
            value={dataPost.contraseña}
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
            value={dataPost.repetircontraseña}
          />
        </div>
      </div>

      <button class="btn btn-primary" onClick={onSubmit} disabled={loading}>
        {loading ? <i className="fa fa-spinner fa-spin"></i> : "Submit"}
      </button>
    </div>
  );
}

export default UsuarioPost;
