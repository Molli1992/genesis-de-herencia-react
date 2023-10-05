import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

function Post() {
  const [dataPost, setDataPost] = useState({
    nombre: "",
    titulo: "",
    descripcion: "",
    resumen: "",
    varietal: "",
    fermentacion: "",
    crianza: "",
    img: "",
    subtitulo: "",
    imgsecundaria: "",
  });

  const handleInputChangePost = (e) => {
    setDataPost({
      ...dataPost,
      [e.target.name]: e.target.value,
    });
    console.log(dataPost);
  };

  const handleFileSelect = (event) => {
    console.log(event.target.files[0]);

    if (event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = function (event) {
        setDataPost({
          ...dataPost,
          img: event.target.result,
        });
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleFileSelect2 = (event) => {
    console.log(event.target.files[0]);

    if (event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = function (event) {
        setDataPost({
          ...dataPost,
          imgsecundaria: event.target.result,
        });
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const onSubmit = () => {
    if (
      dataPost.nombre === "" ||
      dataPost.titulo === "" ||
      dataPost.descripcion === "" ||
      dataPost.resumen === "" ||
      dataPost.varietal === "" ||
      dataPost.fermentacion === "" ||
      dataPost.crianza === "" ||
      dataPost.img === "" ||
      dataPost.subtitulo === "" ||
      dataPost.imgsecundaria === ""
    ) {
      Swal.fire({
        title: "Error!",
        text: "Completar todos los campos",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else {
      axios
        .post("http://localhost:3001/api/vinos", dataPost)
        .then((res) => {
          console.log(res);
          Swal.fire({
            title: "Success!",
            text: "Vino creado correctamente!",
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

  console.log(dataPost.img.length);
  console.log(dataPost.imgsecundaria.length);

  return (
    <div className="body-admin">
      <h1>Crea tu vino</h1>

      <div className="container-1-admin">
        <div class="mb-3">
          <label class="form-label">Nombre</label>
          <input
            class="form-control"
            name="nombre"
            onChange={handleInputChangePost}
            style={{ border: "1px solid gray" }}
            value={dataPost.nombre}
          />
        </div>
      </div>

      <div className="container-1-admin">
        <div class="mb-3">
          <label class="form-label">Titulo</label>
          <input
            class="form-control"
            name="titulo"
            onChange={handleInputChangePost}
            style={{ border: "1px solid gray" }}
            value={dataPost.titulo}
          />
        </div>
      </div>

      <div className="container-1-admin">
        <div class="mb-3">
          <label class="form-label">Uva</label>
          <input
            class="form-control"
            name="subtitulo"
            onChange={handleInputChangePost}
            style={{ border: "1px solid gray" }}
            value={dataPost.subtitulo}
          />
        </div>
      </div>

      <div className="container-1-admin">
        <div class="mb-3">
          <label class="form-label">Descripcion</label>
          <textarea
            class="form-control"
            name="descripcion"
            onChange={handleInputChangePost}
            style={{ border: "1px solid gray", minHeight: "150px" }}
            value={dataPost.descripcion}
          />
        </div>
      </div>

      <div className="container-1-admin">
        <div class="mb-3">
          <label class="form-label">Resumen</label>
          <textarea
            class="form-control"
            name="resumen"
            onChange={handleInputChangePost}
            style={{ border: "1px solid gray", minHeight: "150px" }}
            value={dataPost.resumen}
          />
        </div>
      </div>

      <div className="container-1-admin">
        <div class="mb-3">
          <label class="form-label">Varietal</label>
          <input
            class="form-control"
            name="varietal"
            onChange={handleInputChangePost}
            style={{ border: "1px solid gray" }}
            value={dataPost.varietal}
          />
        </div>
      </div>

      <div className="container-1-admin">
        <div class="mb-3">
          <label class="form-label">Fermentacion</label>
          <textarea
            class="form-control"
            name="fermentacion"
            onChange={handleInputChangePost}
            style={{ border: "1px solid gray", minHeight: "150px" }}
            value={dataPost.fermentacion}
          />
        </div>
      </div>

      <div className="container-1-admin">
        <div class="mb-3">
          <label class="form-label">Crianza</label>
          <textarea
            class="form-control"
            name="crianza"
            onChange={handleInputChangePost}
            style={{ border: "1px solid gray", minHeight: "75px" }}
            value={dataPost.crianza}
          />
        </div>
      </div>

      <div className="container-1-admin">
        <div class="mb-3">
          <label class="form-label">Seleccion tu pdf</label>
          <input
            type="file"
            class="form-control"
            onChange={handleFileSelect2}
          />
        </div>
      </div>

      <div className="container-1-admin">
        <div class="mb-3">
          <label class="form-label">Seleccion tu imagen</label>
          <input type="file" class="form-control" onChange={handleFileSelect} />
        </div>
      </div>

      <button class="btn btn-primary" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Post;
