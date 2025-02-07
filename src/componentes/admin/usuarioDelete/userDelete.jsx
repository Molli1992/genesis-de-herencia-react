import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import usersStore from "../../../zustand/usersStore";

function DeleteUser(props) {
  const { users, setUsers } = usersStore();
  const data = props.data;
  const [loading, setLoading] = useState(false);
  const [dataDelete, setDataDelete] = useState({
    id: "",
    usuario: "",
  });

  const onChangeSelect = (e) => {
    if (e.target.value === "Slecciona tu usuario") {
      setDataDelete({
        id: "",
        usuario: "",
      });
    } else {
      const filter = data.filter((i) => {
        return i.usuario === e.target.value;
      });

      setDataDelete({
        id: filter[0].id,
        usuario: filter[0].usuario,
      });
    }
  };

  const onSubmit = () => {
    if (!dataDelete.usuario) {
      Swal.fire({
        title: "Info!",
        text: "Seleccionar un usuario",
        icon: "info",
        confirmButtonText: "Ok",
      });
    } else {
      setLoading(true);
      axios
        .delete(
          `${process.env.REACT_APP_API_URL}/api/admin/${dataDelete.usuario}`
        )
        .then((res) => {
          console.log(res);
          const deleteUser = users.filter((user) => {
            return user.usuario !== dataDelete.usuario;
          });
          setUsers(deleteUser);
          setLoading(false);
          setDataDelete({
            id: "",
            usuario: "",
          });
          Swal.fire({
            title: "Success!",
            text: "Usuario eliminado correctamente!",
            icon: "success",
            confirmButtonText: "Ok",
          });
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          setDataDelete({
            id: "",
            usuario: "",
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
      <h1>Borrar Usuario</h1>

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
            value={dataDelete.id}
          />
        </div>
      </div>

      <div className="container-1-admin">
        <div class="mb-3">
          <label class="form-label">Usuario</label>
          <input
            class="form-control"
            style={{ border: "1px solid gray" }}
            value={dataDelete.usuario}
            name="usuario"
            readOnly
          />
        </div>
      </div>

      <button class="btn btn-primary" onClick={onSubmit} disabled={loading}>
        {loading ? <i className="fa fa-spinner fa-spin"></i> : "Submit"}
      </button>
    </div>
  );
}

export default DeleteUser;
