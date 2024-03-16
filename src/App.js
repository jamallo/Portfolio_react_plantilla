import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav.js";
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Cv from "./cv/Cv";
import Contact from "./contact/Contact";
import "./styles/app.css";
import Background from "./background/Background.js";
import LogoInicio from "./logoInicio/LogoInicio.js";
import Presentacion1 from "./presentacion/Presentacion1";
import Presentacion2 from "./presentacion/Presentacion2";
import Presentacion3 from "./presentacion/Presentacion3";
import Presentacion4 from "./presentacion/Presentacion4";
import Presentacion5 from "./presentacion/Presentacion5";
import Privacidad from "./contact/Privacidad.js";
import AvisoLegal from "./contact/AvisoLegal.js";

const App = () => {
  return (
    <Router>
      <Nav />
      <Background />
      <LogoInicio />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/presentacion1" element={<Presentacion1 />} />
        <Route path="/presentacion2" element={<Presentacion2 />} />
        <Route path="/presentacion3" element={<Presentacion3 />} />
        <Route path="/presentacion4" element={<Presentacion4 />} />
        <Route path="/presentacion5" element={<Presentacion5 />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/aviso_legal" element={<AvisoLegal />} />
      </Routes>
    </Router>
  );
};

export default App;
