import React from "react";
import ProjectBox from "./ProjectBox";
import AgendaImage from "../images/Agenda.png";
import HotelImage from "../images/Hotel.png";
import PeliculasImage from "../images/MejoresPeliculas.png";
import ServicioImage from "../images/Servicio.png";
import GaleriaImage from "../images/Galeria.png"

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        Mis <b>Proyectos</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={AgendaImage} projectName="Agenda de Contactos" />
        <ProjectBox projectPhoto={HotelImage} projectName="Landing Page Hotel" />
        <ProjectBox projectPhoto={PeliculasImage} projectName="CataPeliculas" />
        <ProjectBox projectPhoto={ServicioImage} projectName="Landing Page Empresa" />
        <ProjectBox projectPhoto={GaleriaImage} projectName="Galeria"/>
      </div>
    </div>
  );
};

export default Projects;
