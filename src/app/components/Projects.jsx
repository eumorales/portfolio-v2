'use client'
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import Link from "next/link";

const Projects = () => {
  return (
    <div id="projetos" className="mt-6 py-20 px-0">
      <Fade triggerOnce={true}>
        <h2 className="text-5xl md:text-7xl text-black font-semibold mb-0 text-center">Some <b>projects</b></h2>
      </Fade>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-0 lg:gap-36">
        <Fade cascade damping={0.5} triggerOnce={true}>
          <CardContainer className="inter-var bg-white">
            <CardBody className="bg-gray-50 relative group/card shadow-md dark:bg-white border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem translateZ="100" className="w-full mt-0">
                <img
                  src="/assets/portfolio-web.png"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Portfolio"
                />
              </CardItem>
              <CardItem translateZ="50" className="text-2xl mt-5 text-black text-center font-semibold mb-4">
                Portfólio
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-gray-600 max-w-sm mt-2">
                ✨ This is my personal portfolio, where I showcase most of my projects.
              </CardItem>
              <CardItem translateZ="70" className="flex flex-wrap justify-center mt-4">
                <img
                  src="/icons/next.svg"
                  alt="Next JS"
                  width={50}
                  height={50}
                  className="w-8 h-8 object-contain m-2"
                />
                <img
                  src="/icons/react.svg"
                  alt="React"
                  width={50}
                  height={50}
                  className="w-8 h-8 object-contain m-2"
                />
                <img
                  src="/icons/tailwindcss.svg"
                  alt="Tailwind CSS"
                  width={50}
                  height={50}
                  className="w-8 h-8 object-contain m-2"
                />
                <img
                  src="/icons/daisyui.svg"
                  alt="daisyUI"
                  width={50}
                  height={50}
                  className="w-8 h-8 object-contain m-2"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-10">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://gilbertomorales.com"
                  target="_blank"
                  className="px-4 py-2 rounded-xl text-xs font-bold text-black"
                >
                  Website →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://github.com/eumorales/"
                  target="_blank"
                  className="px-4 py-2 rounded-xl bg-black text-white text-xs font-bold"
                >
                  GitHub
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var bg-white">
            <CardBody className="bg-gray-50 relative group/card shadow-md dark:bg-white border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem translateZ="100" className="w-full mt-0">
                <img
                  src="/assets/dog-web.png"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Dog"
                />
              </CardItem>
              <CardItem translateZ="50" className="text-2xl mt-5 text-black text-center font-semibold mb-4">
                Dog
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-gray-600 max-w-sm mt-2">
                🐶 A web app for random dog images. <br />
                Made with dog.ceo/api
              </CardItem>
              <CardItem translateZ="70" className="flex flex-wrap justify-center mt-4">
                <img
                  src="/icons/html.svg"
                  alt="HTML"
                  width={50}
                  height={50}
                  className="w-8 h-8 object-contain m-2"
                />
                <img
                  src="/icons/css.svg"
                  alt="CSS"
                  width={50}
                  height={50}
                  className="w-8 h-8 object-contain m-2"
                />
                <img
                  src="/icons/javascript.svg"
                  alt="JavaScript"
                  width={50}
                  height={50}
                  className="w-8 h-8 object-contain m-2"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-10">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://cachorro.gilbertomorales.com"
                  target="_blank"
                  className="px-4 py-2 rounded-xl text-xs font-bold text-black"
                >
                  Website →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://github.com/eumorales/dog"
                  target="_blank"
                  className="px-4 py-2 rounded-xl bg-black text-white text-xs font-bold"
                >
                  GitHub
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var bg-white">
            <CardBody className="bg-gray-50 relative group/card shadow-md dark:bg-white border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem translateZ="100" className="w-full mt-0">
                <img
                  src="/assets/aacuf-web.png"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="AACUF"
                />
              </CardItem>
              <CardItem translateZ="50" className="text-2xl mt-5 text-black text-center font-semibold mb-4">
                AACUF
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-gray-600 max-w-sm mt-2">
                🐧 Linktree for Computer Athletic Association of Universidade Franciscana.
              </CardItem>
              <CardItem translateZ="70" className="flex flex-wrap justify-center mt-4">
                <img
                  src="/icons/html.svg"
                  alt="HTML"
                  width={50}
                  height={50}
                  className="w-8 h-8 object-contain m-2"
                />
                <img
                  src="/icons/css.svg"
                  alt="CSS"
                  width={50}
                  height={50}
                  className="w-8 h-8 object-contain m-2"
                />
                <img
                  src="/icons/javascript.svg"
                  alt="JavaScript"
                  width={50}
                  height={50}
                  className="w-8 h-8 object-contain m-2"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-10">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://aacuf.com"
                  target="_blank"
                  className="px-4 py-2 rounded-xl text-xs font-bold text-black"
                >
                  Website →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://github.com/eumorales/aacuf"
                  target="_blank"
                  className="px-4 py-2 rounded-xl bg-black text-white text-xs font-bold"
                >
                  GitHub
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </Fade>
      </div>
    </div>
  );
};

export default Projects;
