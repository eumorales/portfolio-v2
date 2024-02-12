import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-white text-center py-2">
      <div className="contato flex flex-col items-center justify-center" id="contato">
        <img src="assets/contact.svg" alt="Sobre" className="contatoimg mb-4" />
        <h2 className="text-xl font-semibold mb-4">Reach me</h2>

        <div className="flex space-x-4">
          <a href="https://replit.com/@eumorales" target="_blank" rel="noopener noreferrer">
            <img src="assets/replit.svg" alt="Replit" className="icones" />
          </a>

          <a href="https://github.com/eumorales" target="_blank" rel="noopener noreferrer">
            <img src="assets/github.svg" alt="Github" className="icones" />
          </a>

          <a href="https://discordapp.com/users/326856520799223808" target="_blank" rel="noopener noreferrer">
            <img src="assets/discord.svg" alt="Discord" className="icones" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
