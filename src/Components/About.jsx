import React from "react";
import Skills from "./Skills.jsx";
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
            Hola, mi nombres es <b>Francisco Escobar</b> y soy de Tuxtla Gutierrez,
            Chiapas. Soy <b>desarrollador Frontend,</b> termine mis estudios en la Universidad Politecnica <b> como ingeniero en Software</b>. <br />
            <br />
            Me considero una persona trabajadora y dispuesto por seguir aprendiendo en el desarrollo 
            web. En la seccion de proyectos puedes ver algunos de mis trabajos. 
            <br />
            <br />Estoy <b>abierto </b> a nuevos trabajos donde pueda contribuir y crecer. No dudes en
             contactarte conmigo, los enlaces estan en el pie de página.
            <br />
          </p>
          <a href="/Mi_Contacto.pdf" download = "Mi_Contacto.pdf" className="resume-btn">
            <button>
              Descargar CV <FaFileDownload></FaFileDownload>
            </button>
          </a>
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
      </div>
    </>
  );
};

export default About;