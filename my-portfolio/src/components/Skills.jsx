import React from "react";
import { FaHtml5, FaCss3Alt, FaFigma, FaReact, FaJsSquare, FaBootstrap, FaSass, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiCypress, SiJest, SiWordpress, SiNpm, SiVisualstudiocode } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="w-16 h-16" style={{ color: "#E34F26" }} />, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", icon: <FaCss3Alt className="w-16 h-16" style={{ color: "#1572B6" }} />, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "Figma", icon: <FaFigma className="w-16 h-16" style={{ color: "#F24E1E" }} />, link: "https://www.figma.com/" },
  { name: "JavaScript", icon: <FaJsSquare className="w-16 h-16" style={{ color: "#F7DF1E" }} />, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "React", icon: <FaReact className="w-16 h-16" style={{ color: "#61DAFB" }} />, link: "https://reactjs.org/" },
  { name: "Bootstrap", icon: <FaBootstrap className="w-16 h-16" style={{ color: "#7952B3" }} />, link: "https://getbootstrap.com/" },
  { name: "SCSS", icon: <FaSass className="w-16 h-16" style={{ color: "#CC6699" }} />, link: "https://sass-lang.com/" },
  { name: "TailwindCSS", icon: <SiTailwindcss className="w-16 h-16" style={{ color: "#38B2AC" }} />, link: "https://tailwindcss.com/" },
  { name: "WordPress", icon: <SiWordpress className="w-16 h-16" style={{ color: "#21759B" }} />, link: "https://wordpress.org/" },
  { name: "Cypress", icon: <SiCypress className="w-16 h-16" style={{ color: "#17202C" }} />, link: "https://www.cypress.io/" },
  { name: "Jest", icon: <SiJest className="w-16 h-16" style={{ color: "#C21325" }} />, link: "https://jestjs.io/" },
  { name: "Node.js", icon: <FaNodeJs className="w-16 h-16" style={{ color: "#339933" }} />, link: "https://nodejs.org/" },
  { name: "GitHub", icon: <FaGithub className="w-16 h-16" style={{ color: "#181717" }} />, link: "https://github.com/" },
  { name: "npm", icon: <SiNpm className="w-16 h-16" style={{ color: "#CB3837" }} />, link: "https://www.npmjs.com/" },
  { name: "VS Code", icon: <SiVisualstudiocode className="w-16 h-16" style={{ color: "#007ACC" }} />, link: "https://code.visualstudio.com/" },
];

const Skills = () => {
  return (
    <section className="py-20 px-10" id="skills">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <a
            key={index}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center p-6 bg-darkblue shadow-lg rounded-lg transition transform hover:scale-105 hover:shadow-red-700"
          >
            {skill.icon}
            <p className="mt-4 text-xl font-semibold text-white">{skill.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Skills;
