import React from "react";
import { FaGithub, FaInstagram, FaFacebook, FaLinkedinIn  } from "react-icons/fa";


const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <h4>Creado en {year} </h4>
      <div className="footerLinks">
        <a href="https://github.com/Francisco-Escobar99" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/francisco_escobar05/" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/franciscoantonio.escobarovilla/" target="_blank">
          <FaFacebook />
        </a>
        <a href="https://www.linkedin.com/in/francisco-antonio-escobar-ovilla-326920212/" target="_blank">
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
};

export default Footer;