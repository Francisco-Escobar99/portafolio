import React from "react";
import { BsBriefcase } from "react-icons/bs";

const Experience = () => {
  return (
    <div className="ExperiencePage" translate="no">
      <h1 className="projectHeading" style={{ paddingBottom: '20px' }}>
        Experiencia <b className="gradient-text">Laboral</b>
      </h1>
      
      <div className="experience-container">
        
        <div className="experience-item">
          <h3>Estancia I, agosto 2021</h3>
          <h4>CYBAC TI S.A. DE C.V. TECHNOLOGY FOR BUSINESS, TUXTLA GUTIERREZ, CHIAPAS.</h4>
          <ul>
            <li>Realizar diagrama entidad-relación y caso de uso. Creación de base datos para una pagina web de tarjetas de presentación.</li>
          </ul>
          <p><b>Tecnología implementada:</b> phpMyadmin, VisualParading, mysql.</p>
        </div>

        <div className="experience-item">
          <h3>Estancia II, Diciembre 2021</h3>
          <h4>CYBAC TI S.A. DE C.V. TECHNOLOGY FOR BUSINESS</h4>
          <ul>
            <li>Desarrollo frontend. Crear una pagina web informativa de servicios que ofrece la empresa.</li>
          </ul>
          <p><b>Tecnología implementada:</b> Angular, CSS, HTML, TypeScript, bootstrap</p>
        </div>

        <div className="experience-item">
          <h3>Estadía, Agosto-Diciembre 2023</h3>
          <h4>PICE SOFTWARE SA DE CV, GUADALAJARA, JALISCO.</h4>
          <ul>
            <li>Desarrollo de pruebas de software (aplicando pruebas de caja negra y pruebas de regresión) para sistema web financiero.</li>
            <li>Diseño de interfaces para la elaboración de una app móvil de microcréditos.</li>
            <li>Desarrollo Frontend para una aplicación móvil financiera de microcréditos.</li>
          </ul>
          <p><b>Tecnología implementada:</b> Flutter, dart, Figma, JavaScript, NodeJs, Mysql y Trello.</p>
        </div>

        <div className="experience-item">
          <h3>Desarrollo de Ticket de patinaje, Diciembre 2023 - Enero 2024</h3>
          <h4>PICE SOFTWARE SA DE CV, GUADALAJARA, JALISCO.</h4>
          <ul>
            <li>Mantenimiento del proyecto, Aplicación móvil para generar ticket de impresión para una pista de patinaje de hielo.</li>
          </ul>
          <p><b>Tecnología implementada:</b> Flutter, Dart.</p>
        </div>

        <div className="experience-item">
          <h3>Imacop Tour Corporation, Marzo 2025 - Presente</h3>
          <h4>JORNADA COMPLETA</h4>
          <ul>
            <li>Jornada completa, desarrollo web, Diseño y desarrollo de módulos, mantenimiento del sistema interno de la empresa,.</li>
          </ul>
          <p><b>Tecnología implementada:</b> php, HTML, CSS, Mysql, Filezilla, Bootstrap, trello, navicat.</p>
        </div>

      </div>

      <h1 className="projectHeading" style={{ marginTop: '40px', paddingBottom: '20px' }}>
        Habilidades e <b className="gradient-text">intereses</b>
      </h1>

      <div className="experience-container" style={{ marginBottom: '80px' }}>
        <div className="experience-item">
          <ul>
            <li><b>Tecnologias:</b> bootstrap, laravel, Nodejs, Angular, navicat, myslq, sqlServer, Filezilla, Navicat.</li>
            <li><b>Lenguajes:</b> HTML, CSS, javaScript, php, sql.</li>
            <li><b>Intereses:</b> Una persona responsable, puntual, organizado, trabajo en equipo.</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Experience;
