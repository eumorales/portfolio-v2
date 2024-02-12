import Link from 'next/link';
import React from 'react';

const Navbar = () => {

  return (<div className="navbar bg-white">
  <div className="flex-1">
    <a className="btn btn-ghost text-black text-2xl">gilbertomorales.</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal text-black text-xl px-1">
      <li><Link href="#sobre">About</Link></li>
      <li><Link href="#projetos">Projects</Link></li>
      <li><Link href="#contato">Contact</Link></li>
    </ul>
  </div>
</div>
  )

};

export default Navbar;
