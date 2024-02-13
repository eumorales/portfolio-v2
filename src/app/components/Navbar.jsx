import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar pt-5 bg-white">
      <div className="flex-1">
        <Link href={"/"} className="btn lg:ml-72 btn-ghost font-bold text-black lg:text-xl">gilbertomorales.</Link>
      </div>
      <div className="lg:hidden"> 
        <button className="menu-toggle"> 
          <svg xmlns="http://www.w3.org/2000/svg" className="text-black h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <div className="hidden lg:block"> 
        <ul className="menu lg:mr-72 lg:gap-12 menu-horizontal text-black lg:text-xl px-1">
          <li><Link href="#sobre">About</Link></li>
          <li><Link href="#projetos">Projects</Link></li>
          <li><Link href="#contato">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
