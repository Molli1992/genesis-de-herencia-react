import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./post/post";
import Put from "./put/put";
import Delete from "./delete/delete";
import Swal from "sweetalert2";
import "./admin.css";

function Admin() {
  const [data, setData] = useState(false);
  const [post, setPost] = useState(false);
  const [put, setPut] = useState(false);
  const [borrar, setBorrar] = useState(false);
  const [state, setState] = useState(false);
  const [logeo, setLogeo] = useState(false);
  const [user, setUser] = useState({
    usuario: "",
    contraseña: "",
  });

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    console.log(user);
  };

  const onSubmit = () => {
    let filter = logeo.filter((i) => {
      return i.contraseña === user.contraseña && i.usuario === user.usuario;
    });

    console.log(filter);

    if (filter.length !== 0) {
      Swal.fire({
        title: "Success!",
        text: "Te has logeado correctamente!",
        icon: "success",
        confirmButtonText: "Ok",
      }).then(() => {
        setState(true);
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Usuario o contraseñas incorrectos",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  const onClickAgregarVinos = () => {
    setPost(true);
    setPut(false);
    setBorrar(false);
  };

  const onClickModificarVinos = () => {
    setPost(false);
    setPut(true);
    setBorrar(false);
  };

  const onClickBorrarVinos = () => {
    setPost(false);
    setPut(false);
    setBorrar(true);
  };

  useEffect(() => {
    if (data === false) {
      axios
        .get("http://localhost:3001/api/vinos")
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    if (logeo === false) {
      axios
        .get("http://localhost:3001/api/admin")
        .then((response) => {
          setLogeo(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [data, logeo]);

  if (state === false) {
    console.log(logeo);
    return (
      <div className="body-login">
        <div className="container-login">
          <div class="mb-3">
            <label class="form-label">Usuario</label>
            <input
              type="text"
              class="form-control"
              name="usuario"
              style={{ border: "1px solid gray" }}
              onChange={handleInputChange}
            />
          </div>

          <div class="mb-3">
            <label class="form-label">Contraseña</label>
            <input
              type="password"
              class="form-control"
              name="contraseña"
              style={{ border: "1px solid gray" }}
              onChange={handleInputChange}
            />
          </div>

          <button class="btn btn-primary" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ minHeight: "67vh" }}>
        <div className="buttons-container">
          <button class="btn btn-primary" onClick={onClickAgregarVinos}>
            Agregar Vino
          </button>

          <button class="btn btn-primary" onClick={onClickModificarVinos}>
            Modificar Vino
          </button>

          <button class="btn btn-primary" onClick={onClickBorrarVinos}>
            Borrar Vino
          </button>
        </div>

        {post === true ? <Post /> : null}

        {put === true ? <Put data={data} /> : null}

        {borrar === true ? <Delete data={data} /> : null}
      </div>
    );
  }
}

export default Admin;
