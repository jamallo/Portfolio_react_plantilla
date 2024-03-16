import React, { Component } from 'react';
import "../styles/presentacion.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Pagina1 from "../assets/PRESENTACION_3_Cafeteria.png";
import Pagina2 from "../assets/Pag2_PRESENTACION_3.png";
import Pagina3 from "../assets/Pag3_PRESENTACION_3.png";
import Pagina4 from "../assets/Pag4_PRESENTACION_3.png";
import Pagina5 from "../assets/Pag5_PRESENTACION_3.png";
import Pagina6 from "../assets/Pag6_PRESENTACION_3.png";
import Pagina7 from "../assets/Pag7_PRESENTACION_3.png";
import Pagina8 from "../assets/Pag8_PRESENTACION_3.png";
import Pagina9 from "../assets/Pag9_PRESENTACION_3.png";
import Pagina10 from "../assets/Pag10_PRESENTACION_3.png";
import Pagina11 from "../assets/Pag11_PRESENTACION_3.png";

class Presentacion3 extends Component {
    render() {
        return (
          <div className="contenedor_carrousel">
            <h1>Cafetería</h1>
            <Carousel
              className="crsl"
              autoPlay
              infiniteLoop
              centerMode
              interval={5000}
            >
                <div>
                    <img src={Pagina1} alt='Portada'/>
                </div>
                <div>
                    <img src={Pagina2} alt='Descripcion'/>
                </div>
                <div>
                    <img src={Pagina3} alt='Investigacion de usuarios'/>
                </div>
                <div>
                    <img src={Pagina4} alt='Persona ficticia 1' />
                </div>
                <div>
                    <img src={Pagina5} alt='Persona ficticia 2' />
                </div>
                <div>
                    <img src={Pagina6} alt='Mapa de viaje del usuario' />
                </div>
                <div>
                    <img src={Pagina7} alt='Wireframes en papel' />
                </div>
                <div>
                    <img src={Pagina8} alt='Wireframes digitales' />
                </div>
                <div>
                    <img src={Pagina9} alt='Prototipo de baja fidelidad' />
                    <p className="legenda">
                    <a href='https://www.figma.com/proto/ClXhUNeGvIF9aXPdW3UU7Q/CAFETER%C3%8DA?type=design&node-id=2-5&t=lLHPMXmSj5nw6N0s-1&scaling=min-zoom&page-id=1%3A3&starting-point-node-id=2%3A5&mode=design' target="_blank" rel="noopener noreferrer">Prototipo de baja fidelidad</a>
                    </p>
                </div>
                <div>
                    <img src={Pagina10} alt='Estudio de usabilidad' />
                </div>
                <div>
                    <img src={Pagina11} alt='Prototipo de alta fidelidad' />
                    <p className="legenda">
                    <a href='https://www.figma.com/proto/ClXhUNeGvIF9aXPdW3UU7Q/CAFETER%C3%8DA?type=design&node-id=47-652&t=UuqtHlcqeQ59pmbn-1&scaling=min-zoom&page-id=47%3A447&starting-point-node-id=47%3A652&mode=design' target="_blank" rel="noopener noreferrer">Prototipo móvil</a>
                    </p>
                    <p className="legendaa">
                    <a href='https://www.figma.com/proto/fzbWprPEHSuQ3l7Wp4hTYv/PARTIDOS-POL%C3%8DTICOS?node-id=166-1554&starting-point-node-id=166%3A1554&mode=design&t=NEFRsiGd9E6H3u0e-1' target="_blank" rel="noopener noreferrer">Prototipo pc</a>
                    </p>
                </div>
            </Carousel>
          </div>
        );
    }
};

export default Presentacion3;

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