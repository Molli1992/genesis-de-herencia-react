import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Post from "./post/post";
import Put from "./put/put";
import Delete from "./delete/delete";
import UsuarioPost from "./usuarioPost/usuarioPost";
import UsuariosPut from "./usuarioPut/usuariosPut";
import DeleteUser from "./usuarioDelete/userDelete";
import Swal from "sweetalert2";
import "./admin.css";
import vinosStore from "../../zustand/vinosStore";
import usersStore from "../../zustand/usersStore";

function Admin() {
  const { vinos } = vinosStore();
  const { users, setUsers } = usersStore();
  const data = vinos;
  console.log(users);

  const [post, setPost] = useState(false);
  const [put, setPut] = useState(false);
  const [borrar, setBorrar] = useState(false);

  const [postUsuario, setPostUsuario] = useState(false);
  const [putUsuario, setPutUsuarioUsuario] = useState(false);
  const [borrarUsuario, setBorrarUsuario] = useState(false);

  const [state, setState] = useState(false);
  const dataUsers = users;
  const [usuarioLogeado, setUsuarioLogeado] = useState(false);
  const [user, setUser] = useState({
    usuario: "",
    contraseña: "",
  });
  const [loading, setLoading] = useState(false);

  const fetchUser = useCallback(async () => {
    if (users === false) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/admin`)
        .then((response) => {
          setUsers(response.data.usuarios);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [setUsers, user]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    setLoading(true);

    axios
      .get(
        `${process.env.REACT_APP_API_URL}/api/admin/${user.usuario}/${user.contraseña}`
      )
      .then((res) => {
        setUsuarioLogeado(res.data.usuario);
        Swal.fire({
          title: "Success!",
          text: "Te has logeado correctamente!",
          icon: "success",
          confirmButtonText: "Ok",
        }).then(() => {
          setLoading(false);
          setState(true);
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Error!",
          text: "Usuario o contraseñas incorrectos",
          icon: "error",
          confirmButtonText: "Ok",
        }).then(() => {
          setLoading(false);
        });
      });
  };

  const onClickAgregarVinos = () => {
    setPost(true);
    setPut(false);
    setBorrar(false);
    setPostUsuario(false);
    setPutUsuarioUsuario(false);
    setBorrarUsuario(false);
  };

  const onClickModificarVinos = () => {
    setPost(false);
    setPut(true);
    setBorrar(false);
    setPostUsuario(false);
    setPutUsuarioUsuario(false);
    setBorrarUsuario(false);
  };

  const onClickBorrarVinos = () => {
    setPost(false);
    setPut(false);
    setBorrar(true);
    setPostUsuario(false);
    setPutUsuarioUsuario(false);
    setBorrarUsuario(false);
  };

  const onClickAgregarUsuario = () => {
    setPostUsuario(true);
    setPost(false);
    setPut(false);
    setBorrar(false);
    setPutUsuarioUsuario(false);
    setBorrarUsuario(false);
  };

  const onClickModificarUsuario = () => {
    setPutUsuarioUsuario(true);
    setPost(false);
    setPut(false);
    setBorrar(false);
    setPostUsuario(false);
    setBorrarUsuario(false);
  };

  const onClickBorrarUsuario = () => {
    setBorrarUsuario(true);
    setPutUsuarioUsuario(false);
    setPost(false);
    setPut(false);
    setBorrar(false);
    setPostUsuario(false);
  };

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

          <button
            className="btn btn-primary"
            onClick={onSubmit}
            disabled={loading}
          >
            {loading ? <i className="fa fa-spinner fa-spin"></i> : "Submit"}
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="altura-body">
        <div className="buttons-container">
          <h1 style={{ margin: "15px" }}>
            {usuarioLogeado !== false ? usuarioLogeado.usuario : ""}
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

        {post === true ? <Post /> : null}

        {put === true ? <Put data={data} /> : null}

        {borrar === true ? <Delete data={data} /> : null}

        {postUsuario === true ? <UsuarioPost /> : null}

        {putUsuario === true ? <UsuariosPut data={dataUsers} /> : null}

        {borrarUsuario === true ? <DeleteUser data={dataUsers} /> : null}
      </div>
    );
  }
}

export default Admin;
