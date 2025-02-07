import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import vinosStore from "../../../zustand/vinosStore";

function Put(props) {
  const { vinos, setVinos } = vinosStore();
  const data = props.data;
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
    imgsecundaria: "",
    subtitulo: "",
  });

  const handleInputChangePut = (e) => {
    setDataPut({
      ...dataPut,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileSelectPut = (event) => {
    if (event.target.files[0]) {
      setDataPut((prevData) => ({
        ...prevData,
        img: event.target.files[0],
      }));
    }
  };

  const handleFileSelectPut2 = (event) => {
    if (event.target.files[0]) {
      setDataPut((prevData) => ({
        ...prevData,
        imgsecundaria: event.target.files[0],
      }));
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
        imgsecundaria: "",
        subtitulo: "",
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
        imgsecundaria: filter[0].imgsecundaria,
        subtitulo: filter[0].subtitulo,
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
      const formData = new FormData();
      Object.keys(dataPut).forEach((key) => {
        formData.append(key, dataPut[key]);
      });

      if (dataPut.img instanceof File) {
        formData.append("img", dataPut.img);
      }

      if (dataPut.imgsecundaria instanceof File) {
        formData.append("imgsecundaria", dataPut.imgsecundaria);
      }

      setLoading(true);
      axios
        .put(`${process.env.REACT_APP_API_URL}/api/vinos`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          const filterVinos = vinos.filter((vino) => {
            return vino.id !== dataPut.id;
          });
          filterVinos.push(res.data);
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
            imgsecundaria: "",
            subtitulo: "",
          });
          Swal.fire({
            title: "Success!",
            text: "Vino modificado correctamente!",
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
            imgsecundaria: "",
            subtitulo: "",
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
      <h1>Modifica tu vino</h1>

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
          <label class="form-label">Uva</label>
          <input
            class="form-control"
            name="subtitulo"
            onChange={handleInputChangePut}
            style={{ border: "1px solid gray" }}
            value={dataPut.subtitulo}
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
          <label class="form-label">Seleccion tu pdf</label>
          <input
            type="file"
            class="form-control"
            onChange={handleFileSelectPut2}
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

      <button class="btn btn-primary" onClick={onSubmit} disabled={loading}>
        {loading ? <i className="fa fa-spinner fa-spin"></i> : "Submit"}
      </button>
    </div>
  );
}

export default Put;
