import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  // Mapa de nombre completo → clave corta para el objeto desc
  const keyMap = {
    "Agenda de Contactos":  "Agenda",
    "Landing Page Hotel":   "Hotel",
    "Catalogo de Peliculas":"Peliculas",
    "Landing Page Empresa": "Servicios",
    "Galeria":              "Galeria",
  };

  const desc = {
    AgendaDesc:
      "Agenda de contactos donde los usuarios pueden guardar información telefónica de forma organizada.",
    AgendaGithub:    "https://github.com/Francisco-Escobar99/agenda",
    AgendaWebsite:   "https://agenda-contact.netlify.app/",

    HotelDesc:
      "Landing Page de un hotel que muestra sus servicios y paquetes disponibles para clientes.",
    HotelGithub:     "https://github.com/Francisco-Escobar99/LandingPageHotel",
    HotelWebsite:    "https://hotelpalacio.netlify.app/",

    PeliculasDesc:
      "Catálogo de las mejores series cinematográficas de la década de los 2010 con descripción de cada una.",
    PeliculasGithub:  "https://github.com/Francisco-Escobar99/MejoresPeliculasD",
    PeliculasWebsite: "https://francisco-escobar99.github.io/MejoresPeliculasD/",

    ServiciosDesc:
      "Sitio web corporativo con galería de imágenes y los servicios ofrecidos por la empresa.",
    ServiciosGithub:  "https://github.com/Francisco-Escobar99/ProyectoCybac",
    ServiciosWebsite: "https://empresa-info.netlify.app/",

    GaleriaDesc:
      "Buscador de imágenes con descarga directa, usando la API de Unsplash.",
    GaleriaGithub:   "https://github.com/Francisco-Escobar99/galeria",
    GaleriaWebsite:  "https://galeria-imagenes00.netlify.app/",
  };

  const key = keyMap[projectName] || projectName;

  return (
    <div className="projectBox" translate="no">
      <div className="projectPhotoWrapper">
        <img
          className="projectPhoto"
          src={projectPhoto}
          alt={`Vista previa de ${projectName}`}
        />
      </div>
      <div className="projectContent">
        <h3>{projectName}</h3>
        <p className="projectDesc">{desc[key + "Desc"]}</p>
        <div className="projectButtons">
          <a href={desc[key + "Github"]} target="_blank" rel="noreferrer">
            <button className="projectbtn">
              <FaGithub /> GitHub
            </button>
          </a>
          <a href={desc[key + "Website"]} target="_blank" rel="noreferrer">
            <button className="projectbtn">
              <CgFileDocument /> Sitio
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
