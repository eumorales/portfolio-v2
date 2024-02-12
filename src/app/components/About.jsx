import React from 'react';

const About = () => {
  return (
    <div className="sobre flex justify-between items-center mx-auto max-w-6xl mt-12">
      <div>
        <h1 className="text-4xl font-bold text-black">Hi, I'm <strong>Gilberto</strong>.</h1>
        <h4 className="text-lg text-black">Fullstack Developer</h4>
        <p className="descricao text-gray-500">"I'm a fullstack developer focused on website development, constantly seeking new ways to enhance my skills."</p>
      </div>
      <div>
        <img id="sobre-img" src="assets/sobre.svg" alt="Sobre" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default About;