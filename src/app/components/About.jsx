'use client'
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Fade } from 'react-awesome-reveal';
import CV from './CV';

const About = () => {
  return (
    
    <Fade triggerOnce={true}>

      <div id="sobre" className="sobre flex flex-col md:flex-row justify-between items-center mx-auto max-w-6xl md:mt-12 mt-0">
        <div className="md:w-1/2 md:pr-8">

          <h1 className="text-6xl md:text-8xl mt-20 font-bold text-black">Hi, I'm <br></br><strong>
            
          <TypeAnimation
                              sequence={[
                                  'Gilberto',
                                  1000,
                                  'Morales',
                                  1000,
                              ]}
                              wrapper="span"
                              speed={1}
                              repeat={Infinity}
                          />
                          </strong></h1>
          <h4 className="text-xl mt-5 md:text-2xl text-black font-bold">Fullstack Developer</h4>
          <p className="descricao mt-3 pr-2 md:pr-6 text-gray-400">"I'm a fullstack developer focused on website development, constantly seeking new ways to enhance my skills."</p>
          <CV/>

        </div>
        <div className="md:w-2/3 mt-8 md:mt-0 order-first md:order-last">
          <img id="sobre-img" src="assets/sobre.svg" alt="Sobre" className="max-w-full h-auto" />
        </div>
      </div>

    </Fade>
    
  );
};    

export default About;
