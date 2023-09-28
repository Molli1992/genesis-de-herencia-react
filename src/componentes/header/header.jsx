import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";
import "@fontsource/roboto"; // Defaults to weight 400

function Heaeder() {
  const [stateResponsive, setStateResponsive] = useState(false);
  const [stateResponsiveNosotros, setStateResponsiveNosotros] = useState(false);
  const [stateResponsiveVinos, setStateResponsiveVinos] = useState(false);
  const [stateVinos1, setStateVinos1] = useState(false);
  const [stateVinos2, setStateVinos2] = useState(false);
  const location = useLocation();

  const onClickMenuResponsive = () => {
    if (stateResponsive === false) {
      setStateResponsive(true);
    } else {
      setStateResponsive(false);
      setStateResponsiveNosotros(false);
      setStateResponsiveVinos(false);
      setStateVinos1(false);
      setStateVinos2(false);
    }
  };

  const onClickMenuResponsiveNosotros = () => {
    if (stateResponsiveNosotros === false) {
      setStateResponsiveNosotros(true);
      setStateResponsiveVinos(false);
      setStateVinos1(false);
      setStateVinos2(false);
    } else {
      setStateResponsiveNosotros(false);
    }
  };

  const onClickMenuResponsiveVinos = () => {
    if (stateResponsiveVinos === false) {
      setStateResponsiveVinos(true);
      setStateResponsiveNosotros(false);
    } else {
      setStateResponsiveVinos(false);
      setStateVinos1(false);
      setStateVinos2(false);
    }
  };

  const onClickLineaReserva = () => {
    if (stateVinos1 === false) {
      setStateVinos1(true);
    } else {
      setStateVinos1(false);
    }
  };

  const onClickLineaGranReserva = () => {
    if (stateVinos2 === false) {
      setStateVinos2(true);
    } else {
      setStateVinos2(false);
    }
  };

  const onClickFacebook = () => {
    window.open("https://www.facebook.com", "_blank");
  };

  const onClickInstagram = () => {
    window.open("https://www.facebook.com", "_blank");
  };

  const onClickLink = () => {
    window.open("/link", "_blank");
  };

  var linkHome = document.getElementById("link-home");
  var linkNosotros = document.getElementById("link-nosotros");
  var linkVinos = document.getElementById("link-vinos");
  var linkContactanos = document.getElementById("link-contactanos");

  if (location.pathname === "/" && linkHome !== null) {
    linkHome.classList.add("link-header-2-active");
    linkNosotros.classList.remove("link-header-2-active");
    linkVinos.classList.remove("link-header-2-active");
    linkContactanos.classList.remove("link-header-2-active");
  }

  if (
    location.pathname === "/conocenos" ||
    (location.pathname === "/nuestros-vi%C3%B1edos" && linkNosotros !== null)
  ) {
    linkHome.classList.remove("link-header-2-active");
    linkNosotros.classList.add("link-header-2-active");
    linkVinos.classList.remove("link-header-2-active");
    linkContactanos.classList.remove("link-header-2-active");
  }

  if (
    location.pathname === "/reserva" ||
    (location.pathname === "/gran-reserva" && linkVinos !== null)
  ) {
    linkHome.classList.remove("link-header-2-active");
    linkNosotros.classList.remove("link-header-2-active");
    linkVinos.classList.add("link-header-2-active");
    linkContactanos.classList.remove("link-header-2-active");
  }

  if (location.pathname === "/contactanos" && linkContactanos !== null) {
    linkHome.classList.remove("link-header-2-active");
    linkNosotros.classList.remove("link-header-2-active");
    linkVinos.classList.remove("link-header-2-active");
    linkContactanos.classList.add("link-header-2-active");
  }

  return (
    <div className="body-header">
      <div className="container-header-1">
        <div className="container-header-1-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#858585"
            class="bi bi-geo-alt-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>
          <text>Pasaje La Reta S/N - Las Compuertas Luján de Cuyo</text>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#858585"
            class="bi bi-telephone-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
            />
          </svg>
          <text>+1 000-00-00</text>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#858585"
            class="bi bi-envelope-fill"
            viewBox="0 0 16 16"
          >
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
          </svg>
          <text>contacto@surdelosandes.com</text>
        </div>

        <div className="container-header-1-right">
          <div className="header-icon-facebook" onClick={onClickFacebook}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="white"
              class="bi bi-facebook"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
          </div>

          <div className="header-icon-instagram" onClick={onClickInstagram}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="white"
              class="bi bi-instagram"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
            </svg>
          </div>

          <div className="header-icon-link" onClick={onClickLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              fill="white"
              class="bi bi-link-45deg"
              viewBox="0 0 16 16"
            >
              <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
              <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="container-header-2">
        <img
          src="https://surdelosandes.com/wp-content/uploads/2023/05/logo-sur-de-los-andes-1024x446.png"
          alt="logo-empresa"
        />

        <div className="container-links-header-2">
          <Link id="link-home" to={"/"} className="link-header-2">
            Home
          </Link>

          <div>
            <text id="link-nosotros" className="link-header-2">
              Nosotros
            </text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="#838383"
              class="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>

            <div
              id="menu-1"
              className="div-menu-header"
              style={{ left: "20%" }}
            >
              <div className="menu-header">
                <Link to={"/conocenos"} className="text-menu">
                  Conocenos
                </Link>
                <div className="line-menu" />
                <Link to={"/nuestros-viñedos"} className="text-menu">
                  Nuestros Viñedos
                </Link>
              </div>
            </div>
          </div>

          <div>
            <text id="link-vinos" className="link-header-2">
              Nuestros Vinos
            </text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="#838383"
              class="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>

            <div className="div-menu-header" style={{ left: "42%" }}>
              <div className="menu-header" style={{ height: "90px" }}>
                <div className="container-text-menu">
                  <text className="text-menu">Linea Reserva</text>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="gray"
                    class="bi bi-caret-right-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                  </svg>
                </div>

                <div className="line-menu" />

                <div className="container-text-menu-2">
                  <text className="text-menu">Linea Gran Reserva</text>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="gray"
                    class="bi bi-caret-right-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                  </svg>
                </div>

                <div className="menu-header-2">
                  <Link to={"/reserva"} className="text-menu">
                    Malbec
                  </Link>
                  <div className="line-menu" />

                  <Link to={"/reserva"} className="text-menu">
                    Chardonnay
                  </Link>
                  <div className="line-menu" />

                  <Link to={"/reserva"} className="text-menu">
                    Cabernet Franc
                  </Link>
                  <div className="line-menu" />

                  <Link to={"/reserva"} className="text-menu">
                    Cabernet Sauvignon
                  </Link>
                  <div className="line-menu" />

                  <Link to={"/reserva"} className="text-menu">
                    Malbec Cabernet Sauvignon
                  </Link>
                  <div className="line-menu" />

                  <Link to={"/reserva"} className="text-menu">
                    Pinot Noir
                  </Link>
                </div>

                <div className="menu-header-3">
                  <Link to={"/gran-reserva"} className="text-menu">
                    Malbec
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link
            id="link-contactanos"
            to={"/contactanos"}
            className="link-header-2"
          >
            Contactanos
          </Link>
        </div>
      </div>

      <div className="container-header-3">
        {stateResponsive === false ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="#838383"
            class="bi bi-list"
            viewBox="0 0 16 16"
            onClick={onClickMenuResponsive}
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="#838383"
            class="bi bi-x-lg"
            viewBox="0 0 16 16"
            onClick={onClickMenuResponsive}
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        )}

        <img
          src="https://surdelosandes.com/wp-content/uploads/2023/05/logo-sur-de-los-andes-1024x446.png"
          alt="logo-empresa"
        />

        {stateResponsive === true ? (
          <div className="container-links-responsive-header">
            <div className="container-links-nuevos-header">
              <Link
                to={"/"}
                className="links-responsive-header"
                onClick={onClickMenuResponsive}
              >
                Home
              </Link>
            </div>
            <div className="line-responsive-header"></div>

            <div className="container-text-responsive-header">
              <div className="container-links-nuevos-header">
                <text
                  className="links-responsive-header"
                  onClick={onClickMenuResponsiveNosotros}
                >
                  Nosotros
                </text>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="#838383"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                  onClick={onClickMenuResponsiveNosotros}
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </div>
              {stateResponsiveNosotros === true ? (
                <div className="backColor-responsive-header">
                  <div className="container-nosotros-responsive-header">
                    <div className="container-links-nuevos-header">
                      <Link
                        to={"/conocenos"}
                        className="links-responsive-header"
                        onClick={onClickMenuResponsive}
                      >
                        Conocenos
                      </Link>
                    </div>

                    <div
                      style={{ width: "85%" }}
                      className="line-responsive-header"
                    ></div>

                    <div className="container-links-nuevos-header">
                      <Link
                        to={"/nuestros-viñedos"}
                        className="links-responsive-header"
                        onClick={onClickMenuResponsive}
                      >
                        Nuestros Viñedos
                      </Link>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            <div className="line-responsive-header"></div>

            <div className="container-text-responsive-header">
              <div className="container-links-nuevos-header">
                <text
                  className="links-responsive-header"
                  onClick={onClickMenuResponsiveVinos}
                >
                  Nuestros Vinos
                </text>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="#838383"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                  onClick={onClickMenuResponsiveVinos}
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </div>

              <div className="backColor-responsive-header">
                {stateResponsiveVinos === true ? (
                  <div className="container-nosotros-responsive-header">
                    <div className="container-links-nuevos-header">
                      <div className="flex-display-responsive">
                        <text
                          className="links-responsive-header"
                          onClick={onClickLineaReserva}
                        >
                          Linea Reserva
                        </text>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          fill="#838383"
                          class="bi bi-caret-down-fill"
                          viewBox="0 0 16 16"
                          onClick={onClickLineaReserva}
                        >
                          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg>
                      </div>
                    </div>

                    <div
                      style={{ width: "85%" }}
                      className="line-responsive-header"
                    ></div>

                    {stateVinos1 === true ? (
                      <div className="container-menu-responsive-vinos">
                        <div className="margin-responsive-header">
                          <Link
                            to={"/reserva"}
                            className="links-responsive-header"
                            onClick={onClickMenuResponsive}
                          >
                            Malbec
                          </Link>
                          <div
                            style={{ width: "85%" }}
                            className="line-responsive-header"
                          ></div>
                        </div>

                        <div className="margin-responsive-header">
                          <Link
                            to={"/reserva"}
                            className="links-responsive-header"
                            onClick={onClickMenuResponsive}
                          >
                            Chardonnay
                          </Link>
                          <div
                            style={{ width: "85%" }}
                            className="line-responsive-header"
                          ></div>
                        </div>

                        <div className="margin-responsive-header">
                          <Link
                            to={"/reserva"}
                            className="links-responsive-header"
                            onClick={onClickMenuResponsive}
                          >
                            Cabernet Franc
                          </Link>
                          <div
                            style={{ width: "85%" }}
                            className="line-responsive-header"
                          ></div>
                        </div>

                        <div className="margin-responsive-header">
                          <Link
                            to={"/reserva"}
                            className="links-responsive-header"
                            onClick={onClickMenuResponsive}
                          >
                            Cabernet Sauvignon
                          </Link>
                          <div
                            style={{ width: "85%" }}
                            className="line-responsive-header"
                          ></div>
                        </div>

                        <div className="margin-responsive-header">
                          <Link
                            to={"/reserva"}
                            className="links-responsive-header"
                            onClick={onClickMenuResponsive}
                          >
                            Malbec Cabernet Sauvignon
                          </Link>
                          <div
                            style={{ width: "85%" }}
                            className="line-responsive-header"
                          ></div>
                        </div>

                        <div className="margin-responsive-header">
                          <Link
                            to={"/reserva"}
                            className="links-responsive-header"
                            onClick={onClickMenuResponsive}
                          >
                            Pinot Noir
                          </Link>
                          <div
                            style={{ width: "85%" }}
                            className="line-responsive-header"
                          ></div>
                        </div>
                      </div>
                    ) : null}

                    <div className="flex-display-responsive">
                      <div className="container-links-nuevos-header">
                        <text
                          className="links-responsive-header"
                          onClick={onClickLineaGranReserva}
                        >
                          Linea Gran Reserva
                        </text>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          fill="#838383"
                          class="bi bi-caret-down-fill"
                          viewBox="0 0 16 16"
                          onClick={onClickLineaGranReserva}
                        >
                          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg>
                      </div>
                    </div>

                    {stateVinos2 === true ? (
                      <div className="container-menu-responsive-vinos">
                        <div className="margin-responsive-header">
                          <Link
                            to={"/gran-reserva"}
                            className="links-responsive-header"
                            onClick={onClickMenuResponsive}
                          >
                            Malbec
                          </Link>
                          <div
                            style={{ width: "85%" }}
                            className="line-responsive-header"
                          ></div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="line-responsive-header"></div>

            <div className="container-links-nuevos-header">
              <Link
                to={"/contactanos"}
                className="links-responsive-header"
                onClick={onClickMenuResponsive}
              >
                Contactanos
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Heaeder;
