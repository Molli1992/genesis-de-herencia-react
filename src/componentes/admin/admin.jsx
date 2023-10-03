import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./post/post";
import Put from "./put/put";
import Delete from "./delete/delete";
import "./admin.css";

function Admin() {
  const [data, setData] = useState(false);
  const [post, setPost] = useState(false);
  const [put, setPut] = useState(false);
  const [borrar, setBorrar] = useState(false);

  const onClickAgregarVinos = () => {
    setPost(true);
    setPut(false);
    setBorrar(false);
  };

  const onClickModificarVinos = () => {
    setPost(false);
    setPut(true);
    setBorrar(false);
  };

  const onClickBorrarVinos = () => {
    setPost(false);
    setPut(false);
    setBorrar(true);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/vinos")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div style={{ minHeight: "67vh" }}>
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

      {post === true ? <Post /> : null}

      {put === true ? <Put data={data} /> : null}

      {borrar === true ? <Delete data={data} /> : null}
    </div>
  );
}

export default Admin;
