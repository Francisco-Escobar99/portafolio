import React from "react";
import { Link } from "react-router-dom";
import Type from "./Type.jsx";
import Tilt from "react-parallax-tilt";
import Avatar from "../images/Avatar.png";
import { CgPhone } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";

const Home = () => {
  return (
    <div>
      <div className="HomePage" translate="no">
        <div className="HomeText">
          <div className="available-badge">
            <span className="available-dot"></span>
            Disponible para trabajar
          </div>
          <h1>Hola! 👋</h1>
          <h1>
            Soy <b>Francisco Escobar</b>
          </h1>
          <Type />
          <Link to="/About">
            <button>
              <BsPerson /> Sobre mí
            </button>
          </Link>

          <Link to="/Contact">
            <button>
              <CgPhone /> Contacto
            </button>
          </Link>
        </div>
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          glareEnable={false}
        >
          <img className="Avatar" src={Avatar} alt="Francisco Escobar avatar" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
