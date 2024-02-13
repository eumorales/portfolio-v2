import React from 'react';

const Projects = () => {
  return (
    <div id="projetos" className="mt-10 py-20 px-4">
      <h2 className="text-5xl md:text-7xl text-black font-semibold mb-16 text-center">Some <b>projects</b></h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectCard
          title="Portfólio"
          imageSrc="assets/portfolio-web.png"
          description="✨ This is my personal portfolio, where I showcase most of my projects."
          technologies={["Next JS", "React", "Tailwind CSS", "daisyUI"]}
          websiteLink="https://cachorro.gilbertomorales.com"
          githubLink="https://github.com/eumorales/dog"
        />

        <ProjectCard
          title="Dog"
          imageSrc="assets/dog-web.png"
          description="🐶 A web app for random dog images."
          technologies={["HTML", "CSS", "JavaScript"]}
          websiteLink="https://cachorro.gilbertomorales.com"
          githubLink="https://github.com/eumorales/dog"
        />
        <ProjectCard
          title="Linktree"
          imageSrc="assets/linktree-web.png"
          description="🌳 The application consists of a simple link tree for personal use."
          technologies={["HTML", "CSS", "JavaScript"]}
          websiteLink="https://cachorro.gilbertomorales.com"
          githubLink="https://github.com/eumorales/dog"
        />
      </div>
    </div>
  );
};

const ProjectCard = ({ title, imageSrc, description, technologies, websiteLink, githubLink }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={imageSrc} alt={title} className="w-full h-64 object-cover object-center" />
      <div className="p-6">
        <h3 className="text-2xl text-black text-center font-semibold mb-4">{title}</h3>
        <p className="text-gray-600 mb-8 text-center">{description}</p>
        <div className="flex flex-wrap justify-center mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm mr-2 mb-2">{tech}</span>
          ))}
        </div>
        <div className="flex justify-center space-x-4">
          <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-primary">Website</a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-accent">View on GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
