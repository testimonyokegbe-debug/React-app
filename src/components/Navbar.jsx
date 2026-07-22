import React, { useEffect, useState } from "react";
import {assets} from "../assets/assets";
const Navbar = () => {
  const[showMobileMenu, setShowMobileMenu] = React.useState(false)
 useEffect(() => {
    if(showMobileMenu){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    };
  },[showMobileMenu])
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between items-center 
      px-4 py-6 md:px-20 lg:px-32 bg-transparent">
     <img src={assets.logo} alt="Logo" className="h-12.5 w-12" />
        <ul className="hidden md:flex gap-7 text-white">
            <a onClick={() => setShowMobileMenu(false)} href="#header" className="cursor-pointer hover:text-gray-400">Home</a>
            <a onClick={() => setShowMobileMenu(false)} href="#about" className="cursor-pointer hover:text-gray-400">About</a>
            <a onClick={() => setShowMobileMenu(false)} href="#projects" className="cursor-pointer hover:text-gray-400">Projects</a>
            <a onClick={() => setShowMobileMenu(false)} href="#testimonials" className="cursor-pointer hover:text-gray-400">Testimonials</a>
        </ul>
        <button className="hidden md:block bg-blue-500 text-white px-8 py-2 rounded-full">Sign Up</button>
      <img onClick={() => setShowMobileMenu(true)} src={assets.menu} className="md:hidden w-7 cursor-pointer" alt="Menu" />
      </div>
      {/*---------mobile menu---------*/}
      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden
       bg-white transition-all`}>
        <div className="flex justify-end p-6 cursor-pointer">
         <img onClick={() => setShowMobileMenu(false)} src={assets.close} className="h-6" alt="Close" />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a onClick={() => setShowMobileMenu(false)} href="#header" className="px-4 py-2 rounded-full inline-block">Home</a>
          <a onClick={() => setShowMobileMenu(false)} href="#about" className="px-4 py-2 rounded-full inline-block">About</a>
          <a onClick={() => setShowMobileMenu(false)} href="#projects" className="px-4 py-2 rounded-full inline-block">Projects</a>
          <a onClick={() => setShowMobileMenu(false)} href="#testimonials" className="px-4 py-2 rounded-full inline-block">Testimonials</a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;