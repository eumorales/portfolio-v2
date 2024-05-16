'use client'
import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import Link from "next/link";

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
  {
    titulo: "Linktree",
    descricao: "🌳 The application consists of a simple link tree for personal use.",
    caminhoImagem: "/assets/linktree-web.png",
    tecnologias: ["html.svg", "css.svg", "javascript.svg"],
    linkWebsite: "https://linktree.gilbertomorales.com",
    linkGithub: "https://github.com/eumorales/linktree"
  },
];

const EXIBIR_PROJETOS = 3;

export default function Projects() {
  const [paginaAtual, definirPaginaAtual] = useState(0);

  const totalPaginas = Math.ceil(projetos.length / EXIBIR_PROJETOS);
  const projetoAtual = projetos.slice(paginaAtual * EXIBIR_PROJETOS, (paginaAtual + 1) * EXIBIR_PROJETOS);

  const handlePaginaAnterior = () => {
    definirPaginaAtual((paginaAnterior) => Math.max(paginaAnterior - 1, 0));
  };

  const handleProximaPagina = () => {
    definirPaginaAtual((paginaAnterior) => Math.min(paginaAnterior + 1, totalPaginas - 1));
  };

  return (
    <div id="projetos" className="py-20 px-0">
      <Fade triggerOnce={true}>
        <h2 className="text-5xl md:text-7xl text-black font-semibold mb-0 text-center">Some <b>projects</b></h2>
      </Fade>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-0 lg:gap-36">
        <Fade cascade damping={0.5} triggerOnce={true}>
          {projetoAtual.map((projeto, index) => (
            <CardContainer key={index} className="inter-var bg-white">
              <CardBody className="bg-gray-50 relative group/card shadow-md dark:bg-white border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full mt-0">
                  <img
                    src={projeto.caminhoImagem}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={projeto.titulo}
                  />
                </CardItem>
                <CardItem translateZ="50" className="text-2xl mt-5 text-black text-center font-semibold mb-4">
                  {projeto.titulo}
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-gray-600 max-w-sm mt-2">
                  {projeto.descricao}
                </CardItem>
                <CardItem translateZ="70" className="flex flex-wrap justify-center mt-4">
                  {projeto.tecnologias.map((icon, index) => (
                    <img
                      key={index}
                      src={`/icons/${icon}`}
                      alt={icon.split('.')[0]}
                      width={50}
                      height={50}
                      className="w-8 h-8 object-contain m-2"
                    />
                  ))}
                </CardItem>
                <div className="flex justify-between items-center mt-10">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={projeto.linkWebsite}
                    target="_blank"
                    className="px-4 py-2 rounded-xl text-xs font-bold text-black"
                  >
                    Website →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={projeto.linkGithub}
                    target="_blank"
                    className="px-4 py-2 rounded-xl bg-black text-white text-xs font-bold"
                  >
                    GitHub
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </Fade>
      </div>

      <div className="flex justify-center space-x-4 mt-0">
        <button
          onClick={handlePaginaAnterior}
          className={`px-4 py-2 rounded ${paginaAtual === 0 ? 'text-gray-400' : 'text-black'}`}
          disabled={paginaAtual === 0}
        >
          ←
        </button>
        <button
          onClick={handleProximaPagina}
          className={`px-4 py-2 rounded ${paginaAtual === totalPaginas - 1 ? 'text-gray-400' : 'text-black'}`}
          disabled={paginaAtual === totalPaginas - 1}
        >
          →
        </button>
      </div>
    </div>
  );
}
