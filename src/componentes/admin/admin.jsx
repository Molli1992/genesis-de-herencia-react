import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./post/post";
import Put from "./put/put";
import Delete from "./delete/delete";
import UsuarioPost from "./usuarioPost/usuarioPost";
import UsuariosPut from "./usuarioPut/usuariosPut";
import DeleteUser from "./usuarioDelete/userDelete";
import MensajesNoLeidos from "./zmessageNoLeidos/messageNoLeidos";
import MessageLeidos from "./zmessageLeidos/mensajesLeidos";
import Swal from "sweetalert2";
import "./admin.css";

function Admin() {
  const [data, setData] = useState(false);

  const [mensajesLeidos, setMensajesLeidos] = useState(false);
  const [mensajesNoLeidos, setMensajesNoLeidos] = useState(false);

  const [post, setPost] = useState(false);
  const [put, setPut] = useState(false);
  const [borrar, setBorrar] = useState(false);

  const [postUsuario, setPostUsuario] = useState(false);
  const [putUsuario, setPutUsuarioUsuario] = useState(false);
  const [borrarUsuario, setBorrarUsuario] = useState(false);

  const [state, setState] = useState(false);
  const [dataUsers, setDataUsers] = useState(false);
  const [usuarioLogeado, setUsuarioLogeado] = useState(false);
  const [user, setUser] = useState({
    usuario: "",
    contraseña: "",
  });

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    let filter = dataUsers.filter((i) => {
      return i.contraseña === user.contraseña && i.usuario === user.usuario;
    });

    setUsuarioLogeado(filter);

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
    setPostUsuario(false);
    setPutUsuarioUsuario(false);
    setBorrarUsuario(false);
    setMensajesNoLeidos(false);
    setMensajesLeidos(false);
  };

  const onClickModificarVinos = () => {
    setPost(false);
    setPut(true);
    setBorrar(false);
    setPostUsuario(false);
    setPutUsuarioUsuario(false);
    setBorrarUsuario(false);
    setMensajesNoLeidos(false);
    setMensajesLeidos(false);
  };

  const onClickBorrarVinos = () => {
    setPost(false);
    setPut(false);
    setBorrar(true);
    setPostUsuario(false);
    setPutUsuarioUsuario(false);
    setBorrarUsuario(false);
    setMensajesNoLeidos(false);
    setMensajesLeidos(false);
  };

  const onClickAgregarUsuario = () => {
    setPostUsuario(true);
    setPost(false);
    setPut(false);
    setBorrar(false);
    setPutUsuarioUsuario(false);
    setBorrarUsuario(false);
    setMensajesNoLeidos(false);
    setMensajesLeidos(false);
  };

  const onClickModificarUsuario = () => {
    setPutUsuarioUsuario(true);
    setPost(false);
    setPut(false);
    setBorrar(false);
    setPostUsuario(false);
    setBorrarUsuario(false);
    setMensajesNoLeidos(false);
    setMensajesLeidos(false);
  };

  const onClickBorrarUsuario = () => {
    setBorrarUsuario(true);
    setPutUsuarioUsuario(false);
    setPost(false);
    setPut(false);
    setBorrar(false);
    setPostUsuario(false);
    setMensajesNoLeidos(false);
    setMensajesLeidos(false);
  };

  const onClickMensajesLeidos = () => {
    setMensajesLeidos(true);
    setMensajesNoLeidos(false);
    setBorrarUsuario(false);
    setPutUsuarioUsuario(false);
    setPost(false);
    setPut(false);
    setBorrar(false);
    setPostUsuario(false);
  };

  const onClickMensajesNoLeidos = () => {
    setMensajesNoLeidos(true);
    setMensajesLeidos(false);
    setBorrarUsuario(false);
    setPutUsuarioUsuario(false);
    setPost(false);
    setPut(false);
    setBorrar(false);
    setPostUsuario(false);
  };

  useEffect(() => {
    if (data === false) {
      axios
        .get("https://vinos-marcelo-api-production.up.railway.app/api/vinos")
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    if (dataUsers === false) {
      axios
        .get("https://vinos-marcelo-api-production.up.railway.app/api/admin")
        .then((response) => {
          setDataUsers(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [data, dataUsers]);

  if (state === false) {
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
          <h1 style={{ margin: "15px" }}>
            {usuarioLogeado !== false ? usuarioLogeado[0].usuario : ""}
          </h1>
        </div>

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

        <div className="buttons-container">
          <button class="btn btn-primary" onClick={onClickAgregarUsuario}>
            Agregar User
          </button>

          <button class="btn btn-primary" onClick={onClickModificarUsuario}>
            Modificar User
          </button>

          <button class="btn btn-primary" onClick={onClickBorrarUsuario}>
            Borrar User
          </button>
        </div>

        <div className="buttons-container">
          <button class="btn btn-primary" onClick={onClickMensajesNoLeidos}>
            Mensajes no Leidos
          </button>

          <button class="btn btn-primary" onClick={onClickMensajesLeidos}>
            Mensajes Leidos
          </button>
        </div>

        {post === true ? <Post /> : null}

        {put === true ? <Put data={data} /> : null}

        {borrar === true ? <Delete data={data} /> : null}

        {postUsuario === true ? <UsuarioPost /> : null}

        {putUsuario === true ? <UsuariosPut data={dataUsers} /> : null}

        {borrarUsuario === true ? <DeleteUser data={dataUsers} /> : null}

        {mensajesNoLeidos === true ? <MensajesNoLeidos /> : null}

        {mensajesLeidos === true ? <MessageLeidos /> : null}
      </div>
    );
  }
}

export default Admin;
