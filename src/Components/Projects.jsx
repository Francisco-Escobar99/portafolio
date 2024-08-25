import React from "react";
import ProjectBox from "./ProjectBox";
import ActImage from "../images/Actividades.png";
import HotelImage from "../images/Hotel.png";
import PeliculasImage from "../images/MejoresPeliculas.png";
import ServicioImage from "../images/Servicio.png";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        Mis <b>Proyectos</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={ActImage} projectName="Actividades" />
        <ProjectBox projectPhoto={HotelImage} projectName="Hotel" />
        <ProjectBox projectPhoto={PeliculasImage} projectName="Peliculas" />
        <ProjectBox projectPhoto={ServicioImage} projectName="Servicios" />
      </div>
    </div>
  );
};

export default Projects;
