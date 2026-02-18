import React from "react";
import Skills from "./Skills.jsx";
import PortadaAvatar from "../images/PortadaAvatar.png"
import { FaFileDownload } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div className="AboutPage" translate="no">
        <div className="AboutText">
          <h1 className="AboutTextHeading" translate="no">
            Quien <b>soy</b> yo!
          </h1>
          <p translate="no">
            Hola, mi nombre es <b>Francisco Escobar</b> y soy Originario de la ciudad de Tuxtla Gutiérrez,
            Chiapas. Soy <b>Ingeniero en  desarool
              software,</b> egresado de la Universidad Politécnica de Chiapas <b> como ingeniero en desarrollo de Software</b>. <br />
            <br />
            Me considero una persona trabajadora, puntual y dispuesto por seguir aprendiendo en el desarrollo 
            web, creo un clima laboral saludable y entusiasta. En la sección de proyectos puedes ver algunos de mis trabajos personales. 
            <br />
            <br />Estoy <b>abierto </b> a nuevas oportuidades laborales donde pueda contribuir y crecer. No dudes en
             contactarte conmigo, los enlaces estan en el pie de página.
            <br />
          </p>
          <a href="/Mi_Contacto.pdf" download = "Mi_Contacto.pdf" className="resume-btn">
            <button>
              Descargar CV <FaFileDownload></FaFileDownload>
            </button>
          </a>
        </div>
        <div>
          <img className="PortadaAvatar" src={PortadaAvatar} alt="" />
        </div>

        <div></div>
      </div>

      <h1 className="SkillsHeading"> Habilidades</h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Bootstrap" />
        <Skills skill="Laravel" />
        <Skills skill="Javascript" />
        <Skills skill="React" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Flutter" />
        <Skills skill="Figma" />
        <Skills skill="Php" />
        <Skills skill="Overleaf" />
        <Skills skill="NodeJs" />
        <Skills skill="MySqlWorkbench" />
        <Skills skill="Vue"/>
      </div>
    </>
  );
};

export default About;