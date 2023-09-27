import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componentes/header/header";
import Footer from "./componentes/footer/footer";
import Inicio from "./componentes/inicio/inicio";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
