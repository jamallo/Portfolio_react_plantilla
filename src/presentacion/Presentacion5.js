import React, { Component } from 'react';
import "../styles/presentacion.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Pagina1 from "../assets/Pag1_PRESENTACION_5.png";
import Pagina2 from "../assets/Pag2_PRESENTACION_5.png";
import Pagina3 from "../assets/Pag3_PRESENTACION_5.png";
import Pagina4 from "../assets/Pag4_PRESENTACION_5.png";
import Pagina5 from "../assets/Pag5_PRESENTACION_5.png";
import Pagina6 from "../assets/Pag6_PRESENTACION_5.png";
import Pagina7 from "../assets/Pag7_PRESENTACION_5.png";
import Pagina8 from "../assets/Pag8_PRESENTACION_5.png";
import Pagina9 from "../assets/Pag9_PRESENTACION_5.png";
import Pagina10 from "../assets/Pag10_PRESENTACION_5.png";
import Pagina11 from "../assets/Pag11_PRESENTACION_5.png";
import Pagina12 from "../assets/Pag12_PRESENTACION_5.png";
import pdf from "../assets/manual de identidad corporativa.pdf";
import tipografia from "../assets/trapaga.ttf";

class Presentacion4 extends Component {
    render() {
        return (
          <div className="contenedor_carrousel">
            <h1>Diseño Gráfico</h1>
            <Carousel
              className="crsl"
              autoPlay
              infiniteLoop
              centerMode
              interval={5000}
            >
                <div>
                    <img src={Pagina1} alt='Logotipo'/>
                </div>
                <div>
                    <img src={Pagina2} alt='Cartel Nerja'/>
                </div>
                <div>
                    <img src={Pagina3} alt='Cartel carnaval' />
                </div>
                <div>
                    <img src={Pagina4} alt='Tríptico rediseñado' />
                </div>
                <div>
                    <img src={Pagina5} alt='Manual identidad corporativa' />
                    <p className="legenda">
                    <a href={pdf} target="_blank" rel="noopener noreferrer" download="Manual_identidad_corporativa.pdf"> 
                      Descargar pdf
                    </a>
                    </p>
                </div>
                <div>
                    <img src={Pagina6} alt='Logotipo' />
                </div>
                <div>
                    <img src={Pagina7} alt='Wireframes en papel' />
                    <p className="legenda">
                    <a href={tipografia} target="_blank" rel="noopener noreferrer" download="tipografia.ttf"> 
                      Descargar tipografía
                    </a>
                    </p>
                </div>
                <div>
                    <img src={Pagina8} alt='Calendario' />
                </div>
                <div>
                    <img src={Pagina9} alt='Anuncio' />
                </div>
                <div>
                    <img src={Pagina10} alt='Cuaderno de viaje' />
                </div>
                <div>
                    <img src={Pagina11} alt='Animales' />
                </div>
                <div>
                    <img src={Pagina12} alt='Maquetación' />
                </div>
            </Carousel>
          </div>
        );
    }
};

export default Presentacion4;

/** 


import "../styles/presentacion.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Pagina1 from "../assets/PRESENTACION_1_Partidos_Politicos.png"

export default function Presentacion1() {
  const images = [
    {
      id: "102",
      pagina: "Portada",
      width: 4320,
      height: 3240,
      imagen: Pagina1,
    },
    {
      id: "103",
      author: "Ilham Rahmansyah",
      width: 2592,
      height: 1936,
      url: "https://unsplash.com/photos/DwTZwZYi9Ww",
      download_url: "https://picsum.photos/id/103/2592/1936"
    },
    {
      id: "104",
      author: "Dyaa Eldin",
      width: 3840,
      height: 2160,
      url: "https://unsplash.com/photos/2fl-ocJ5MOA",
      download_url: "https://picsum.photos/id/104/3840/2160"
    },
    {
      id: "106",
      author: "Arvee Marie",
      width: 2592,
      height: 1728,
      url: "https://unsplash.com/photos/YnfGtpt2gf4",
      download_url: "https://picsum.photos/id/106/2592/1728"
    },
    {
      id: "107",
      author: "Lukas Schweizer",
      width: 5000,
      height: 3333,
      url: "https://unsplash.com/photos/9VWOr22LhVI",
      download_url: "https://picsum.photos/id/107/5000/3333"
    },
    {
      id: "108",
      author: "Florian Klauer",
      width: 2000,
      height: 1333,
      url: "https://unsplash.com/photos/t1mqA3V3-7g",
      download_url: "https://picsum.photos/id/108/2000/1333"
    },
    {
      id: "109",
      author: "Zwaddi",
      width: 4287,
      height: 2392,
      url: "https://unsplash.com/photos/YvYBOSiBJE8",
      download_url: "https://picsum.photos/id/109/4287/2392"
    }
  ];
        return (
          <div className="contenedor_carrousel">
            <h1>Partidos Políticos</h1>
            <Carousel
            className="crsl"
            autoPlay
            infiniteLoop
            centerMode
            interval={3000}
            >
            {images.map((image) => (
            <img src={image.imagen} alt={image.pagina} />
            ))}
            </Carousel>
          </div>
        );
    }

    */