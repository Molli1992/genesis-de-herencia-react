import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import vinosStore from "../../../zustand/vinosStore";

function Delete(props) {
  const data = props.data;
  const { vinos, setVinos } = vinosStore();
  const [loading, setLoading] = useState(false);
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
    if (dataPut.nombre === "") {
      Swal.fire({
        title: "Error!",
        text: "Seleccionar un vino",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else {
      setLoading(true);
      axios
        .delete(`${process.env.REACT_APP_API_URL}/api/vinos/${dataPut.nombre}`)
        .then((res) => {
          console.log(res);
          const filterVinos = vinos.filter((vino) => {
            return vino.nombre !== dataPut.nombre;
          });
          setVinos(filterVinos);
          setLoading(false);
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
          Swal.fire({
            title: "Success!",
            text: "Vino eliminado correctamente!",
            icon: "success",
            confirmButtonText: "Ok",
          });
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
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
      <h1>Borra tu vino</h1>

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
            style={{ border: "1px solid gray" }}
            value={dataPut.nombre}
            readOnly
          />
        </div>
      </div>

      <div className="container-1-admin">
        <div class="mb-3">
          <label class="form-label">Titulo</label>
          <input
            class="form-control"
            name="titulo"
            style={{ border: "1px solid gray" }}
            value={dataPut.titulo}
            readOnly
          />
        </div>
      </div>

      <div className="container-1-admin">
        <div class="mb-3">
          <label class="form-label">Descripcion</label>
          <textarea
            class="form-control"
            name="descripcion"
            style={{ border: "1px solid gray", minHeight: "150px" }}
            value={dataPut.descripcion}
            readOnly
          />
        </div>
      </div>

      <div className="container-1-admin">
        <div class="mb-3">
          <label class="form-label">Resumen</label>
          <textarea
            class="form-control"
            name="resumen"
            style={{ border: "1px solid gray", minHeight: "150px" }}
            value={dataPut.resumen}
            readOnly
          />
        </div>
      </div>

      <div className="container-1-admin">
        <div class="mb-3">
          <label class="form-label">Varietal</label>
          <input
            class="form-control"
            name="varietal"
            style={{ border: "1px solid gray" }}
            value={dataPut.varietal}
            readOnly
          />
        </div>
      </div>

      <div className="container-1-admin">
        <div class="mb-3">
          <label class="form-label">Fermentacion</label>
          <textarea
            class="form-control"
            name="fermentacion"
            style={{ border: "1px solid gray", minHeight: "150px" }}
            value={dataPut.fermentacion}
            readOnly
          />
        </div>
      </div>

      <div className="container-1-admin">
        <div class="mb-3">
          <label class="form-label">Crianza</label>
          <textarea
            class="form-control"
            name="crianza"
            style={{ border: "1px solid gray", minHeight: "75px" }}
            value={dataPut.crianza}
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

export default Delete;
