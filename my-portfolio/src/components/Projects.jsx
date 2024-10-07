import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Import the necessary icons
import easybuy from "../assets/images/easy-buy.jpg.png";
import holitime from "../assets/images/holitime.jpg.png";
import snapbid from "../assets/images/snapbid.jpg.png";

const projects = [
  {
    id: 1,
    title: "EasyBuy",
    description: "An e-commerce platform for seamless online shopping.",
    imageUrl: easybuy,
    githubLink: "https://github.com/EF-Pami/JS-Framework-React-CA", // Replace with your GitHub URL
    liveSite: "https://main--easybuy-hub.netlify.app/", // Replace with the live site URL
  },
  {
    id: 2,
    title: "HoliTime",
    description: "A vacation booking website to find the best holiday packages.",
    imageUrl: holitime,
    githubLink: "https://github.com/EF-Pami/holitime", // Replace with your GitHub URL
    liveSite: "https://holitime.netlify.app/", // Replace with the live site URL
  },
  {
    id: 3,
    title: "SnapBid",
    description: "An online auction site for bidding on unique products.",
    imageUrl: snapbid,
    githubLink: "https://github.com/EF-Pami/SP2", // Replace with your GitHub URL
    liveSite: "https://snapbid-hub.netlify.app/", // Replace with the live site URL
  },
];

const Projects = () => {
  return (
    <section className="py-12 bg-darkblue" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">My Projects</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#2B2129] rounded-lg shadow-lg p-6 flex flex-col justify-between transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="h-48 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              {/* Add links for GitHub and Live Site */}
              <div className="flex justify-between items-center mt-auto space-x-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-300 hover:text-white transition-colors"
                >
                  <FaGithub className="w-6 h-6" />
                  <span>GitHub</span>
                </a>
                <a
                  href={project.liveSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-300 hover:text-white transition-colors"
                >
                  <FaExternalLinkAlt className="w-6 h-6" />
                  <span>Live Site</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
