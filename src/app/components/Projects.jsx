import React from 'react';

const Projects = () => {
  return (
    <div className="projeto-text flex flex-col items-center mt-20">
      <h2 className="text-3xl font-semibold mb-8">Some projects</h2>
      <img id="sobre-img" src="assets/projetos.svg" alt="Sobre" className="mb-8" />
      
      <div className="projetos flex flex-wrap justify-center gap-6">
        <div className="projeto bg-white border border-gray-300 rounded-lg shadow-md p-6 max-w-xs">
          <a href="https://github.com/eumorales/linktree" target="_blank" rel="noopener noreferrer">
            <img src="assets/linktree-web.png" alt="Projeto 1" className="mb-4" style={{ maxWidth: '100%', height: 'auto' }} />
            <h3 className="text-xl font-semibold mb-2">Linktree</h3>
            <p className="text-gray-600 mb-4">🌳 The application consists of a simple link tree for personal use.</p>
          </a>
          <div className="flex justify-center space-x-2">
            <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" />
            <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" />
            <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1" alt="JavaScript" />
          </div>
          <div className="flex justify-center mt-4">
            <a href="https://linktree.gilbertomorales.com" target="_blank" rel="noopener noreferrer" className="botoes bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Site 🌐</a>
            <a href="https://github.com/eumorales/linktree" target="_blank" rel="noopener noreferrer" className="botoes bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">Github ☕</a>
          </div>
        </div>

        <div className="projeto bg-white border border-gray-300 rounded-lg shadow-md p-6 max-w-xs">
          <a href="https://github.com/eumorales/dog" target="_blank" rel="noopener noreferrer">
            <img src="assets/dog-web.png" alt="Projeto 1" className="mb-4" style={{ maxWidth: '100%', height: 'auto' }} />
            <h3 className="text-xl font-semibold mb-2">Dog</h3>
            <p className="text-gray-600 mb-4">🐶 A web app for random dog images.</p>
          </a>
          <div className="flex justify-center space-x-2">
            <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" />
            <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" />
            <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1" alt="JavaScript" />
          </div>
          <div className="flex justify-center mt-4">
            <a href="https://cachorro.gilbertomorales.com" target="_blank" rel="noopener noreferrer" className="botoes bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Site 🌐</a>
            <a href="https://github.com/eumorales/dog" target="_blank" rel="noopener noreferrer" className="botoes bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">Github ☕</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
