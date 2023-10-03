import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componentes/header/header";
import Footer from "./componentes/footer/footer";
import Inicio from "./componentes/inicio/inicio";
import Contacto from "./componentes/contacto/contacto";
import Nosotros from "./componentes/nosotros/nosotros";
import Viñedos from "./componentes/viñedos/viñedos";
import Links from "./componentes/link/link";
import Admin from "./componentes/admin/admin";
import "./App.css";
import "@fontsource/poppins";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contactanos" element={<Contacto />} />
          <Route path="/conocenos" element={<Nosotros />} />
          <Route path="/nuestros-viñedos" element={<Viñedos />} />
          <Route path="/link" element={<Links />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
