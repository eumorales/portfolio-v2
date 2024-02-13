import React from 'react';

const About = () => {
  return (
    <div id="sobre" className="sobre flex justify-between items-center mx-auto max-w-6xl mt-12">
      <div>
        <h1 className="text-8xl mt-20 font-bold text-black">Hi, I'm <strong>Gilberto</strong>.</h1>
        <h4 className="text-xl mt-5 text-black font-bold">Fullstack Developer</h4>
        <p className="descricao mt-3 text-gray-400">"I'm a fullstack developer focused on website development, constantly seeking new ways to enhance my skills."</p>
        <button className="mt-5 btn btn-outline">Download CV</button>
      </div>
      <div>
        <img id="sobre-img" src="assets/sobre.svg" alt="Sobre" className="max-w-full ml-24 h-auto" />
      </div>
    </div>
  );
};

export default About;