import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import usersStore from "../../../zustand/usersStore";

function UsuariosPut(props) {
  const data = props.data;
  const { users, setUsers } = usersStore();
  const [loading, setLoading] = useState(false);
  const [dataPut, setDataPut] = useState({
    id: "",
    usuario: "",
    contraseña: "",
    repetircontraseña: "",
  });

  const onChangeSelect = (e) => {
    if (e.target.value === "Slecciona tu usuario") {
      setDataPut({
        id: "",
        usuario: "",
        contraseña: "",
        repetircontraseña: "",
      });
    } else {
      const filter = data.filter((i) => {
        return i.usuario === e.target.value;
      });

      setDataPut({
        id: filter[0].id,
        usuario: filter[0].usuario,
        contraseña: "",
        repetircontraseña: "",
      });
    }
  };

  const handleInputChangePut = (e) => {
    setDataPut({
      ...dataPut,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;

    if (
      dataPut.usuario === "" ||
      dataPut.contraseña === "" ||
      dataPut.repetircontraseña === "" ||
      dataPut.id === ""
    ) {
      Swal.fire({
        title: "Info!",
        text: "Completar todos los campos",
        icon: "info",
        confirmButtonText: "Ok",
      });
    } else if (!alphanumericRegex.test(dataPut.usuario)) {
      Swal.fire({
        title: "Info!",
        text: "El nombre de usuario solo puede contener letras y números",
        icon: "info",
        confirmButtonText: "Ok",
      });
    } else if (!alphanumericRegex.test(dataPut.contraseña)) {
      Swal.fire({
        title: "Info!",
        text: "La contraseña solo puede contener letras y números",
        icon: "info",
        confirmButtonText: "Ok",
      });
    } else if (dataPut.contraseña !== dataPut.repetircontraseña) {
      Swal.fire({
        title: "Info!",
        text: "Contraseña y Repetir contraseña deben ser iguales",
        icon: "info",
        confirmButtonText: "Ok",
      });
    } else {
      setLoading(true);
      axios
        .put(`${process.env.REACT_APP_API_URL}/api/admin`, dataPut)
        .then((res) => {
          console.log(res);
          const usuarioModificado = users.filter((user) => {
            return user.id !== dataPut.id;
          });
          usuarioModificado.push(res.data);
          setUsers(usuarioModificado);
          setLoading(false);
          setDataPut({
            id: "",
            usuario: "",
            contraseña: "",
            repetircontraseña: "",
          });
          Swal.fire({
            title: "Success!",
            text: "Usuario modificado correctamente!",
            icon: "success",
            confirmButtonText: "Ok",
          });
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          setDataPut({
            id: "",
            usuario: "",
            contraseña: "",
            repetircontraseña: "",
          });
          Swal.fire({
            title: "Error!",
            text: "Error en el sistema intentar mas tarde o ponerse en contacto con el servicio",
            icon: "error",
            confirmButtonText: "Ok",
          });
        });
    }
  };

  return (
    <div className="body-admin">
      <h1>Modificar usurios</h1>

      <select
        class="form-select"
        style={{ marginBottom: "15px" }}
        onChange={onChangeSelect}
      >
        <option>Slecciona tu usuario</option>
        {data &&
          data.map((i) => {
            return <option>{i.usuario}</option>;
          })}
      </select>

      <div className="container-1-admin">
        <div class="mb-3">
          <label class="form-label">ID</label>
          <input
            class="form-control"
            readOnly
            style={{ border: "1px solid gray" }}
            value={dataPut.id}
          />
        </div>
      </div>

      <div className="container-1-admin">
        <div class="mb-3">
          <label class="form-label">Usuario</label>
          <input
            class="form-control"
            style={{ border: "1px solid gray" }}
            value={dataPut.usuario}
            name="usuario"
            onChange={handleInputChangePut}
          />
        </div>
      </div>

      <div className="container-1-admin">
        <div class="mb-3">
          <label class="form-label">Contraseña</label>
          <input
            type="password"
            class="form-control"
            style={{ border: "1px solid gray" }}
            value={dataPut.contraseña}
            name="contraseña"
            onChange={handleInputChangePut}
          />
        </div>
      </div>

      <div className="container-1-admin">
        <div class="mb-3">
          <label class="form-label">Repetir contraseña</label>
          <input
            type="password"
            class="form-control"
            style={{ border: "1px solid gray" }}
            value={dataPut.repetircontraseña}
            name="repetircontraseña"
            onChange={handleInputChangePut}
          />
        </div>
      </div>

      <button class="btn btn-primary" onClick={onSubmit} disabled={loading}>
        {loading ? <i className="fa fa-spinner fa-spin"></i> : "Submit"}
      </button>
    </div>
  );
}

export default UsuariosPut;
