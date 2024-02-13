import React from 'react';

const About = () => {
  return (
    <div id="sobre" className="sobre flex flex-col md:flex-row justify-between items-center mx-auto max-w-6xl md:mt-12 mt-0">
      <div className="md:w-1/2 md:pr-8">
        <h1 className="text-6xl md:text-8xl mt-20 font-bold text-black">Hi, I'm <strong>Gilberto</strong>.</h1>
        <h4 className="text-xl mt-5 md:text-2xl text-black font-bold">Fullstack Developer</h4>
        <p className="descricao mt-3 text-gray-400">"I'm a fullstack developer focused on website development, constantly seeking new ways to enhance my skills."</p>
        <button className="mt-5 btn btn-outline">WIP</button> 
        {/* Download CV */}
      </div>
      <div className="md:w-2/3 mt-8 md:mt-0 order-first md:order-last">
        <img id="sobre-img" src="assets/sobre.svg" alt="Sobre" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default About;
