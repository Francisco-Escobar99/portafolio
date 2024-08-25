import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    ActividadesDesc:
      "Este sitio web es un crud de tareas, los usuarios podran agregar, eliminar o modificar alguna actividad que desea",
    ActividadesGithub: "https://github.com/Francisco-Escobar99/CrudTareas",
    ActividadesWebsite: "https://obscure-mesa-25813-bbd5e7961b44.herokuapp.com/tasks",

    HotelDesc:
      "En este sitio web, encontraras una (landing Page) de un hotel donde ofrece sus servicios a clientes y los paquetes que ofrece.",
    HotelGithub: "https://github.com/Francisco-Escobar99/LandingPageHotel",
    HotelWebsite: "https://hotelpalacio.netlify.app/",

    PeliculasDesc:
      "Esta pagina web te muestra un catalogo de las mejores series cinematograficas de la decada de los 2010, y una descripcion de cada una de ellas.",
    PeliculasGithub: "https://github.com/Francisco-Escobar99/MejoresPeliculasD",
    PeliculasWebsite: "https://francisco-escobar99.github.io/MejoresPeliculasD/",

    ServiciosDesc:
      "Este sitio web, ofrece los servicios de una empresa, mostrando una galeria de imagenes a lo que se dedican y en que son expertos.",
    ServiciosGithub: "https://github.com/Francisco-Escobar99/ProyectoCybac",
    ServiciosWebsite: "https://empresa-info.netlify.app/",
  };

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a href={desc[projectName + "Github"]} target="_blank">
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]} target="_blank">
          <button className="projectbtn">
            <CgFileDocument /> Sitio
          </button>
        </a>
      </div>
    </div>
  );
};
export default ProjectBox;
