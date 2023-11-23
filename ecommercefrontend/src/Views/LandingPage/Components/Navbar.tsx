import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import Shoebox from "../../../Assets/Photos/shoebox.png"
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration
      easing: 'ease-in-out', // Easing option
      once: true, // Whether animation should happen only once
    });
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  return (
    <div
  data-aos="fade-up"
  className={`py-4 fixed relative transition-all duration-500 ${
    scrolling ? 'bg-[#0e0e0e]' : 'bg-transparent'
  }`}
>
  <nav className="container mx-auto flex justify-between items-center">
    <div className="flex items-center space-x-4">
      {/* Company Logo */}
      <img
        src={Shoebox}
        alt="Company Logo"
        className="h-12 w-12"
      />
      {/* Company Name */}
      <span className="text-white font-custom text-4xl font-custom2">Shuuz</span>
    </div>

    <ul className="flex space-x-20">
      <li>
        <Link
          to="/"
          className="text-white font-custom text-lg  duration-100 hover:text-orange-500"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/Login"
          className="text-white font-custom text-lg  duration-100 hover:text-orange-500"
        >
          Login
        </Link>
      </li>
      <li>
        <Link
          to="/Register"
          className="text-white font-custom text-lg  duration-100 hover:text-orange-500"
        >
          Register
        </Link>
      </li>
      <li>
        <Link
          to="/About"
          className="text-white font-custom text-lg  duration-100 hover:text-orange-500"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/Items"
          className="text-white font-custom text-lg  duration-100 hover:text-orange-500"
        >
          Items
        </Link>
      </li>
    </ul>
  </nav>
</div>
  );
};
export default Navbar;
