import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function DeleteUser(props) {
  const history = useNavigate();
  const data = props.data;
  const [buttonValue, setButtonValue] = useState("Submit");
  const [dataPut, setDataPut] = useState({
    id: "",
    usuario: "",
    contraseña: "",
  });

  const onChangeSelect = (e) => {
    if (e.target.value === "Slecciona tu usuario") {
      setDataPut({
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
        contraseña: filter[0].contraseña,
      });
    }
  };

  const onSubmit = () => {
    setButtonValue("Cargando...");
    axios
      .delete(
        `https://vinos-marcelo-api-production.up.railway.app/api/admin/${dataPut.usuario}`
      )
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Success!",
          text: "Usuario eliminado correctamente!",
          icon: "success",
          confirmButtonText: "Ok",
        }).then(() => {
          history("/link");
          window.scrollTo(0, 0);
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Error!",
          text: "Error en el sistema intentar mas tarde o ponerse en contacto con el servicio",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  console.log(dataPut);
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
            readOnly
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
            readOnly
          />
        </div>
      </div>

      <button class="btn btn-primary" onClick={onSubmit}>
        {buttonValue}
      </button>
    </div>
  );
}

export default DeleteUser;
