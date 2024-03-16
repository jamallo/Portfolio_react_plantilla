import React, { Component } from 'react';
import "../styles/presentacion.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Pagina1 from "../assets/PRESENTACION_2_Serigrafia.png";
import Pagina2 from "../assets/Pag2_PRESENTACION_2.png";
import Pagina3 from "../assets/Pag3_PRESENTACION_2.png";
import Pagina4 from "../assets/Pag4_PRESENTACION_2.png";
import Pagina5 from "../assets/Pag5_PRESENTACION_2.png";
import Pagina6 from "../assets/Pag6_PRESENTACION_2.png";
import Pagina7 from "../assets/Pag7_PRESENTACION_2.png";
import Pagina8 from "../assets/Pag8_PRESENTACION_2.png";
import Pagina9 from "../assets/Pag9_PRESENTACION_2.png";
import Pagina10 from "../assets/Pag10_PRESENTACION_2.png";

class Presentacion2 extends Component {
    render() {
        return (
          <div className="contenedor_carrousel">
            <h1>Empresa de serigrafía</h1>
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
                    <img src={Pagina2} alt='Descripcion' />
                </div>
                <div>
                    <img src={Pagina3} alt='Investigacion de usuarios' />
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
                    <img src={Pagina7} alt='Wareframes en papel' />
                </div>
                <div>
                    <img src={Pagina8} alt='Wareframes digitales' />
                </div>
                <div>
                    <img src={Pagina9} alt='Prototipo de baja fidelidad' />
                    <p className="legenda">
                    <a href='https://xd.adobe.com/view/7b37d0c2-eea3-4f4e-93b8-ae11cac6d636-2e64/' target="_blank" rel="noopener noreferrer">Prototipo de baja fidelidad</a>
                    </p>
                </div>
                <div>
                    <img src={Pagina10} alt='Prototipo de alta fidelidad' />
                    <p className="legenda">
                    <a href='https://xd.adobe.com/view/780125e5-b867-42d8-bbb4-c0acf2d391e2-2d52/' target="_blank" rel="noopener noreferrer">Prototipo móvil</a>
                    </p>
                    <p className="legendaa">
                    <a href='https://xd.adobe.com/view/42d72389-0901-4d8d-80d1-bab50c4e7085-1784/' target="_blank" rel="noopener noreferrer">Prototipo pc</a>
                    </p>
                </div>
            </Carousel>
          </div>
        );
    }
};

export default Presentacion2;


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