import projectOne from "../assets/1proyecto_partidos_politicos.jpg";
import projectTwo from "../assets/2proyecto_imprenta.jpg";
import projectThree from "../assets/3proyecto_cafeteria.jpg";
import projectFour from "../assets/4proyecto_cachoperia.png";
import disenografico from "../assets/_grafico.jpg"

const projects = {
  1: {
    title: "Partidos políticos",
    image: projectOne,
    description: (
      <>
        <p>
          Web responsive para dar a conocer los diferentes partidos políticos de la localidad con toda información de cada uno, el programa electoral y los candidatos.
        </p>
      </>
    ),
    github: "https://www.figma.com/proto/fzbWprPEHSuQ3l7Wp4hTYv/PARTIDOS-POL%C3%8DTICOS?type=design&node-id=58-496&t=S8QmzQqpfWBrHntF-1&scaling=min-zoom&page-id=58%3A332&starting-point-node-id=58%3A496&mode=design",
    demo: "/presentacion1",
  },
  2: {
    title: "Empresa de serigrafía",
    image: projectTwo,
    description: (
      <>
        <p>
          Web responsive para que los clientes puedan crear y personalizar un pedido online para la empresa Graf Grow dedicada a serigrafía e impresiones en varios formatos.
        </p>
      </>
    ),
    github: "https://xd.adobe.com/view/42d72389-0901-4d8d-80d1-bab50c4e7085-1784/",
    demo: "/presentacion2",
  },
  3: {
    title: "Cafetería",
    image: projectThree,
    description: (
      <>
        <p>
          Aplicación para la creación de pedidos online para recoger los productos en la cafetería sin esperas.
        </p>
      </>
    ),
    github: "https://www.figma.com/proto/ClXhUNeGvIF9aXPdW3UU7Q/CAFETER%C3%8DA?type=design&node-id=47-652&t=1FxEmFBS42xC5s2u-1&scaling=min-zoom&page-id=47%3A447&starting-point-node-id=47%3A652&mode=design",
    demo: "/presentacion3",
  },
  4: {
    title: "Cachopería",
    image: projectFour,
    description: (
      <>
        <p>
          Aplicación para la creación de pedidos online para recoger o comer en el propio restaurante.
        </p>
      </>
    ),
    github: "https://www.figma.com/proto/kxZri2jN2PZP9qMBS6nvRh/Cachoper%C3%ADa?type=design&node-id=70-3739&t=Fft7w8eCP6sHARo2-1&scaling=scale-down&page-id=70%3A3737&starting-point-node-id=70%3A3739&mode=design",
    demo: "/presentacion4",
  },
  5: {
    title: "Diseño grafico",
    image: disenografico,
    description: (
      <>
        <p>
          Diseños gráficos creados tanto para empresas como para concursos.
        </p>
      </>
    ),
    github: "https://www.figma.com/proto/kxZri2jN2PZP9qMBS6nvRh/Cachoper%C3%ADa?type=design&node-id=70-3739&t=Fft7w8eCP6sHARo2-1&scaling=scale-down&page-id=70%3A3737&starting-point-node-id=70%3A3739&mode=design",
    demo: "/presentacion5",
  },
};

export default projects;
