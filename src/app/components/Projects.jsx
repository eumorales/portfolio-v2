'use client';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Link from "next/link";
import { FaGithub } from 'react-icons/fa';

const projetos = [
  {
    titulo: "Portfólio",
    descricao: "✨ This is my personal portfolio, where I showcase most of my projetos.",
    caminhoImagem: "/assets/portfolio-web.png",
    tecnologias: ["next.svg", "react.svg", "tailwindcss.svg", "daisyui.svg"],
    linkWebsite: "https://gilbertomorales.com",
    linkGithub: "https://github.com/eumorales/"
  },
  {
    titulo: "Dog",
    descricao: "🐶 A web app for random dog images. Made with dog.ceo/api",
    caminhoImagem: "/assets/dog-web.png",
    tecnologias: ["html.svg", "css.svg", "javascript.svg"],
    linkWebsite: "https://cachorro.gilbertomorales.com",
    linkGithub: "https://github.com/eumorales/dog"
  },
  {
    titulo: "AACUF",
    descricao: "🐧 Linktree for Computer Athletic Association of Universidade Franciscana.",
    caminhoImagem: "/assets/aacuf-web.png",
    tecnologias: ["html.svg", "css.svg", "javascript.svg"],
    linkWebsite: "https://aacuf.com",
    linkGithub: "https://github.com/eumorales/aacuf"
  },
];

export default function Projects() {
  return (
    <div id="projetos" className="py-20 px-0">
      <Fade triggerOnce={true}>
        <h2 className="text-5xl md:text-7xl font-bold text-black text-center mb-12">
          Some <strong>projects</strong>
        </h2>
      </Fade>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20 justify-center items-center">
        <Fade cascade damping={0.1} triggerOnce={true}>
          {projetos.map((projeto, index) => (
            <div 
              key={index} 
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between w-full max-w-[500px] h-full mx-auto transition-transform duration-300 hover:-translate-y-2"
            >
              <img
                src={projeto.caminhoImagem}
                alt={projeto.titulo}
                className="w-full h-60 object-cover mb-4 rounded-md"
              />
              <div className="flex flex-col items-center">
                <div className="flex items-center mt-6 justify-center space-x-2">
                  <h3 className="text-2xl font-semibold text-gray-800">{projeto.titulo}</h3>
                  <div className="flex space-x-2">
                    {projeto.tecnologias.map((icon, idx) => (
                      <img
                        key={idx}
                        src={`/icons/${icon}`}
                        alt={icon.split('.')[0]}
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mt-4 mb-4 text-center">{projeto.descricao}</p>
              </div>

              <div className="flex justify-between mt-4">
                {projeto.linkWebsite ? (
                  <Link href={projeto.linkWebsite} target="_blank" className="text-sm font-medium text-blue-500 hover:underline">
                    Website →
                  </Link>
                ) : (
                  <span className="text-sm font-medium text-gray-400">No Website</span>
                )}
                <Link href={projeto.linkGithub} target="_blank" className="text-sm font-medium text-black flex items-center space-x-1">
                  <FaGithub /> <span>GitHub →</span>
                </Link>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
}
