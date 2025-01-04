import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'
import firebase from '../assets/firebase.png'
import kazali from '../assets/kazali-store.png'
import furniro from '../assets/furniro.png'
import intellipos from '../assets/intellipos.png'
import coffe from '../assets/coffe.png'
import web from '../assets/web.png'
import nextjs from '../assets/nextjs.png'

const projects = [
  //Proyectos agregados
    {
      image: kazali,
      title: "Web Hardware Gamer",
      description: "Comercio de hardware para PC y otros componentes gamer.",
      techStack: [
        { name: "HTML", icon: html },
        { name: "CSS", icon: css },
        { name: "Tailwind", icon: tailwind },
        { name: "JavaScript", icon: js },
        { name: "React", icon: react },
        { name: "Firebase", icon: firebase },
      ],
      codeLink: "https://github.com/JoseSanchez90/ProyectoFinal-Curso-Frontend",
      webLink: "https://kazali-store-blue.vercel.app/",
      githubIcon: github,
      webIcon: web,
    },

    {
        image: furniro,
        title: "Web Comercio Muebles",
        description: "Comercio de muebles, sillas y para toda decoracion de interior.",
        techStack: [
          { name: "HTML", icon: html },
          { name: "CSS", icon: css },
          { name: "Tailwind", icon: tailwind },
          { name: "JavaScript", icon: js },
          { name: "React", icon: react },
        ],
        codeLink: "https://github.com/JoseSanchez90/Ecommerce-Furniro",
        webLink: "https://furniro-ashy.vercel.app/",
        githubIcon: github,
        webIcon: web,
      },

      {
        image: intellipos,
        title: "Web para una Empresa",
        description: "Servicio y venta de Sistema de ventas, para restaurantes, retail y bodegas.",
        techStack: [
          { name: "HTML", icon: html },
          { name: "CSS", icon: css },
          { name: "Tailwind", icon: tailwind },
          { name: "JavaScript", icon: js },
          { name: "React", icon: react },
        ],
        codeLink: "https://github.com/JoseSanchez90/Web-Intellipos",
        webLink: "https://intellipos.vercel.app/",
        githubIcon: github,
        webIcon: web,
      },

      {
        image: coffe,
        title: "Web para Restaurante",
        description: "Restaurante de bebida caliente (Café) para el publico en general.",
        techStack: [
          { name: "HTML", icon: html },
          { name: "CSS", icon: css },
          { name: "Tailwind", icon: tailwind },
          { name: "JavaScript", icon: js },
          { name: "NextJS", icon: nextjs },
        ],
        codeLink: "https://github.com/JoseSanchez90/ecommerce-coffe-frontend",
        webLink: "https://huachocoffe.vercel.app/",
        githubIcon: github,
        webIcon: web,
      },
    // Se agrega mas proyectos de ser necesario
  ];

  export default projects;
  