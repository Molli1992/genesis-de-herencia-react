import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function UsuariosPut(props) {
  const history = useNavigate();
  const data = props.data;
  const [dataPut, setDataPut] = useState({
    id: "",
    usuario: "",
    contraseña: "",
    repetircontraseña: "",
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
        repetircontraseña: filter[0].contraseña,
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
    if (
      dataPut.usuario === "" ||
      dataPut.contraseña === "" ||
      dataPut.repetircontraseña === "" ||
      dataPut.id === ""
    ) {
      Swal.fire({
        title: "Error!",
        text: "Falta enviar datos obligatorios",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else if (dataPut.contraseña !== dataPut.repetircontraseña) {
      Swal.fire({
        title: "Error!",
        text: "Contraseña y Repetir contraseña deben ser iguales",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else {
      axios
        .put("http://localhost:3001/api/admin", dataPut)
        .then((res) => {
          console.log(res);
          Swal.fire({
            title: "Success!",
            text: "Usuario modificado correctamente!",
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

      <button class="btn btn-primary" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
}

export default UsuariosPut;
