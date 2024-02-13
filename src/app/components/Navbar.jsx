import Link from 'next/link';
import React from 'react';

const Navbar = () => {

  return (<div className="navbar pt-5 bg-white">
  <div className="flex-1">
    <Link href={"/"} className="btn ml-72 btn-ghost text-black text-xl">gilbertomorales.</Link>
  </div>
  <div className="flex-none">
    <ul className="menu mr-72 gap-12 menu-horizontal text-black text-xl px-1">
      <li><Link href="#sobre">About</Link></li>
      <li><Link href="#projetos">Projects</Link></li>
      <li><Link href="#contato">Contact</Link></li>
    </ul>
  </div>
</div>
  )

};

export default Navbar;