import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

function Put(props) {
  const data = props.data;
  const [dataPut, setDataPut] = useState({
    id: "",
    nombre: "",
    titulo: "",
    descripcion: "",
    resumen: "",
    varietal: "",
    fermentacion: "",
    crianza: "",
    img: "",
  });

  const handleInputChangePut = (e) => {
    setDataPut({
      ...dataPut,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileSelectPut = (event) => {
    console.log(event.target.files[0]);

    if (event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = function (event) {
        setDataPut({
          ...dataPut,
          img: event.target.result,
        });
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const onChangeSelect = (e) => {
    if (e.target.value === "Slecciona tu vino") {
      setDataPut({
        id: "",
        nombre: "",
        titulo: "",
        descripcion: "",
        resumen: "",
        varietal: "",
        fermentacion: "",
        crianza: "",
        img: "",
      });
    } else {
      const filter = data.filter((i) => {
        return i.nombre === e.target.value;
      });

      console.log(filter);

      setDataPut({
        id: filter[0].id,
        nombre: filter[0].nombre,
        titulo: filter[0].titulo,
        descripcion: filter[0].descripcion,
        resumen: filter[0].resumen,
        varietal: filter[0].varietal,
        fermentacion: filter[0].fermentacion,
        crianza: filter[0].crianza,
        img: filter[0].img,
      });
    }
  };

  const onSubmit = () => {
    if (dataPut.nombre === "" || dataPut.id === "") {
      Swal.fire({
        title: "Error!",
        text: "El nombre y el id son obligatorios",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else {
      axios
        .put("http://localhost:3001/api/vinos", dataPut)
        .then((res) => {
          console.log(res);
          Swal.fire({
            title: "Success!",
            text: "Vino modificado correctamente!",
            icon: "success",
            confirmButtonText: "Ok",
          }).then(() => {
            window.location.reload();
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
      <select
        class="form-select"
        style={{ marginBottom: "15px" }}
        onChange={onChangeSelect}
      >
        <option>Slecciona tu vino</option>
        {data &&
          data.map((i) => {
            return <option>{i.nombre}</option>;
          })}
      </select>

      <h1>Modifica tu vino</h1>

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
          <label class="form-label">Nombre</label>
          <input
            class="form-control"
            name="nombre"
            onChange={handleInputChangePut}
            style={{ border: "1px solid gray" }}
            value={dataPut.nombre}
          />
        </div>
      </div>

      <div className="container-1-admin">
        <div class="mb-3">
          <label class="form-label">Titulo</label>
          <input
            class="form-control"
            name="titulo"
            onChange={handleInputChangePut}
            style={{ border: "1px solid gray" }}
            value={dataPut.titulo}
          />
        </div>
      </div>

      <div className="container-1-admin">
        <div class="mb-3">
          <label class="form-label">Descripcion</label>
          <textarea
            class="form-control"
            name="descripcion"
            onChange={handleInputChangePut}
            style={{ border: "1px solid gray", minHeight: "150px" }}
            value={dataPut.descripcion}
          />
        </div>
      </div>

      <div className="container-1-admin">
        <div class="mb-3">
          <label class="form-label">Resumen</label>
          <textarea
            class="form-control"
            name="resumen"
            onChange={handleInputChangePut}
            style={{ border: "1px solid gray", minHeight: "150px" }}
            value={dataPut.resumen}
          />
        </div>
      </div>

      <div className="container-1-admin">
        <div class="mb-3">
          <label class="form-label">Varietal</label>
          <input
            class="form-control"
            name="varietal"
            onChange={handleInputChangePut}
            style={{ border: "1px solid gray" }}
            value={dataPut.varietal}
          />
        </div>
      </div>

      <div className="container-1-admin">
        <div class="mb-3">
          <label class="form-label">Fermentacion</label>
          <textarea
            class="form-control"
            name="fermentacion"
            onChange={handleInputChangePut}
            style={{ border: "1px solid gray", minHeight: "150px" }}
            value={dataPut.fermentacion}
          />
        </div>
      </div>

      <div className="container-1-admin">
        <div class="mb-3">
          <label class="form-label">Crianza</label>
          <textarea
            class="form-control"
            name="crianza"
            onChange={handleInputChangePut}
            style={{ border: "1px solid gray", minHeight: "75px" }}
            value={dataPut.crianza}
          />
        </div>
      </div>

      <div className="container-1-admin">
        <div class="mb-3">
          <label class="form-label">Seleccion tu imagen</label>
          <input
            type="file"
            class="form-control"
            onChange={handleFileSelectPut}
          />
        </div>
      </div>

      <button class="btn btn-primary" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Put;
