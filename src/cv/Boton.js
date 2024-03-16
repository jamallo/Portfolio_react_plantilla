import React, { Component } from 'react';
import pdf from "../assets/Curriculo_programacion.pdf";
import "../styles/boton.css";

export default class Boton extends Component {
  render() {
    return (
      <div className={`curriculo`}>
        <button className={`button_slide slide_right`} type='button'>
            <a href={pdf} target="_blank" rel="noopener noreferrer" download="Curriculo_vitae.pdf"> 
                Descargar pdf
            </a>
        </button>       
      </div>
    )
  }
}
