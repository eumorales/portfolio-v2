import React from 'react';

const Navbar = () => {
  return (
    <header className="header flex items-center justify-between px-6 py-4">
      <span className="text-black text-xl font-bold">gilbertomorales.</span>
      <nav className="header-menu flex gap-8">
        <a href="#sobre" className="text-gray-800 text-lg font-semibold">Home</a>
        <a href="#projetos" className="text-gray-800 text-lg font-semibold">Projects</a>
        <a href="#contato" className="text-gray-800 text-lg font-semibold">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
