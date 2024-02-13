
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-white">
      <Link href={"/"} className="btn lg:ml-72 lg:mt-5 btn-ghost font-bold text-black lg:text-xl">gilbertomorales.</Link>
    </div>
  );
};

export default Navbar;
