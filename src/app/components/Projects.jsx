'use client'
import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Projects = () => {
  return (
    <div id="projetos" className="mt-10 py-20 px-4">
      <Fade triggerOnce={true}>
        <h2 className="text-5xl md:text-7xl text-black font-semibold mb-16 text-center">Some <b>projects</b></h2>
      </Fade>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Fade cascade damping={0.5} triggerOnce={true}>
          <ProjectCard
            title="Portfólio"
            imageSrc="assets/portfolio-web.png"
            description="✨ This is my personal portfolio, where I showcase most of my projects."
            technologies={[
              { name: "Next JS", image: "icons/next.svg" },
              { name: "React", image: "icons/react.svg" },
              { name: "Tailwind CSS", image: "icons/tailwindcss.svg" },
              { name: "daisyUI", image: "icons/daisyui.svg" },
            ]}
            websiteLink="https://gilbertomorales.com"
            githubLink="https://github.com/eumorales/"
          />
          <ProjectCard
            title="Dog"
            imageSrc="assets/dog-web.png"
            description={
              <>
                🐶 A web app for random dog images. <br />
                Made with dog.ceo/api
              </>
            }
            technologies={[
              { name: "HTML", image: "icons/html.svg" },
              { name: "CSS", image: "icons/css.svg" },
              { name: "JavaScript", image: "icons/javascript.svg" }
            ]}
            websiteLink="https://cachorro.gilbertomorales.com"
            githubLink="https://github.com/eumorales/dog"
          />

          <ProjectCard
            title="Linktree"
            imageSrc="assets/linktree-web.png"
            description="🌳 The application consists of a simple link tree for personal use."
            technologies={[
              { name: "HTML", image: "icons/html.svg" },
              { name: "CSS", image: "icons/css.svg" },
              { name: "JavaScript", image: "icons/javascript.svg" }
            ]}
            websiteLink="https://linktree.gilbertomorales.com"
            githubLink="https://github.com/eumorales/linktree"
          />
          <ProjectCard
            title="AACUF"
            imageSrc="assets/aacuf-web.png"
            description={
              <>
                🐧 Associação Atlética de Computação da Universidade Franciscana
              </>
            }
            technologies={[
              { name: "HTML", image: "icons/html.svg" },
              { name: "CSS", image: "icons/css.svg" },
            ]}
            websiteLink="https://aacuf.com"
            githubLink="https://github.com/eumorales/aacuf"
          />
        </Fade>
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
            <div key={index} className="flex items-center mr-2 mb-2">
              <img src={tech.image} alt={tech.name} className="w-6 h-6 mr-2" />
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-4">
          <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-info">Website</a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-primary">View on GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
