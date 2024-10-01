import React from "react";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Description of project 1",
    imageUrl: "/path/to/project1-image.jpg",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description of project 2",
    imageUrl: "/path/to/project2-image.jpg",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description of project 3",
    imageUrl: "/path/to/project2-image.jpg",
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section className="py-12 bg-darkblue" id="projects">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">My Projects</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-darkblue rounded-lg shadow-lg p-4 flex flex-col"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="h-48 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
