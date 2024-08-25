import React from "react";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaFigma,
  FaBootstrap,
  FaHtml5,
  FaCss3,
  FaPhp,                  
  FaNodeJs,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import {SiLaravel,  SiMysql} from 'react-icons/si';
import { SiOverleaf} from "react-icons/si";
import { SiFlutter } from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    Javascript: <DiJavascript1 />,
    Bootstrap: <FaBootstrap />,
    Laravel: <SiLaravel />,
    Php: <FaPhp />,
    React: <FaReact />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Flutter: <SiFlutter />,
    Figma: <FaFigma />,
    MySqlWorkbench: <SiMysql />, 
    Overleaf: <SiOverleaf />,
    NodeJs: <FaNodeJs />, 
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;
