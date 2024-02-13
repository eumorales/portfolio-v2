import React from 'react';

const Projects = () => {
  return (
    <div id="projetos" className="projeto-text flex flex-col items-center mt-20 mb-24">
      <h2 className="text-7xl text-black font-semibold mb-1">Some <b>projects</b></h2>
      <img id="sobre-img" src="assets/projetos.svg" alt="Sobre" className="transform scale-75" />

      <div className="projetos flex flex-wrap justify-center gap-6">
        <div className="projeto bg-white border border-gray-300 rounded-lg shadow-md p-6 max-w-md">
          <a>
            <img src="assets/linktree-web.png" alt="Projeto 1" className="rounded mb-4" style={{ maxWidth: '100%', height: 'auto' }} />
            <h3 className="text-xl text-black text-center font-semibold mb-2">Linktree</h3>
            <p className="text-gray-600 text-center mb-1">🌳 The application consists of a simple link tree for personal use.</p>
          </a>
          <div className="flex justify-center flex-wrap mb-6 space-x-2">
            <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" className='mt-5 rounded'/>
            <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" className='mt-5 rounded'/>
            <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1" alt="JavaScript" className='mt-5 rounded' />
          </div>
          <div className="flex justify-center mt-4">
            <a href="https://cachorro.gilbertomorales.com" target="_blank" className="botoes text-black">Site 🌐</a>
            <p className='text-black pr-2 pl-2'>|</p>
            <a href="https://github.com/eumorales/dog" target="_blank" className="botoes text-black">Github ☕</a> 
          </div>
        </div>
        <div className="projeto bg-white border border-gray-300 rounded-lg shadow-md p-6 max-w-md">
          <a>
            <img src="assets/dog-web.png" alt="Projeto 2" className="rounded mb-4" style={{ maxWidth: '100%', height: 'auto' }} />
            <h3 className="text-xl text-black text-center font-semibold mb-2">Dog</h3>
            <p className="text-gray-600 text-center mb-1">🐶 A web app for random dog images.</p>
          </a>
          <div className="flex justify-center flex-wrap mb-6 space-x-2">
            <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" className='mt-5 rounded'/>
            <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" className='mt-5 rounded'/>
            <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1" alt="JavaScript" className='mt-5 rounded' />
          </div>
          <div className="flex justify-center mt-4">
            <a href="https://cachorro.gilbertomorales.com" target="_blank" className="botoes text-black">Site 🌐</a>
            <p className='text-black pr-2 pl-2'>|</p>
            <a href="https://github.com/eumorales/dog" target="_blank" className="botoes text-black">Github ☕</a> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
