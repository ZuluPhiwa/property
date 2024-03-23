import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const HandleNav = () => {
    setNav(!nav);
    if (!setNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };
  const closeMenu = () => setNav(false);
  return (
    <div>
      <div className="hidden md:flex shadow-lg font-bold justify-between p-4">
        <h1 className="py-2 font-rahmuna text-xl">
          <Link to="/property/">Tindzawo</Link>
        </h1>
        <ul className="flex space-x-4 py-2">
          <Link to="/property/">
            <li>Home</li>
          </Link>
          <Link to="/property/search">
            <li>Search</li>
          </Link>
          <li>Rent</li>
          <li>Commercial</li>
        </ul>
        <button className="p-2 border-solid border-2 rounded-md border-blue-500">
          Sign In
        </button>
      </div>

      <div onClick={HandleNav} className="block  md:hidden ">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <div
        className={
          nav
            ? "fixed h-full left-0 top-0 bg-[#000300] uppercase border-r w-[65%] border-r-gray-900 ease-in-out duration-500 z-10"
            : "fixed left-[-100%] z-10"
        }
      >
        <h1 className=" text-white mt-8 mx-6 font-bold font-rahmuna text-3xl">
          Tindzawo
        </h1>
        <ul className=" pt-24 font-bold text-white">
          <Link to="/property/" onClick={closeMenu}>
            <li className="mx-6 pb-4"> Home </li>
          </Link>
          <Link to="/property/search" onClick={closeMenu}>
            <li className="mx-6 pb-4">Search </li>
          </Link>
          <li className="mx-6 pb-4">Contact </li>
          <li className="mx-6 pb-4">Sign In </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
