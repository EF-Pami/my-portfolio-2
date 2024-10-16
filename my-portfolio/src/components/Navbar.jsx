import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for the hamburger menu

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-darkblue text-white fixed w-full top-0 z-10 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">EF Pami</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <a
              href="#home"
              className="hover:bg-belge hover:text-darkblue px-4 py-2 rounded transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:bg-belge hover:text-darkblue px-4 py-2 rounded transition duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:bg-belge hover:text-darkblue px-4 py-2 rounded transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:bg-belge hover:text-darkblue px-4 py-2 rounded transition duration-300"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:bg-belge hover:text-darkblue px-4 py-2 rounded transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger Icon for Mobile Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-3xl focus:outline-none hover:text-primary transition duration-300"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-darkblue flex flex-col space-y-4 py-4 text-center text-lg">
          <li>
            <a
              href="#home"
              onClick={toggleMenu}
              className="hover:bg-belge hover:text-darkblue px-4 py-2 rounded transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={toggleMenu}
              className="hover:bg-belge hover:text-darkblue px-4 py-2 rounded transition duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={toggleMenu}
              className="hover:bg-belge hover:text-darkblue px-4 py-2 rounded transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={toggleMenu}
              className="hover:bg-belge hover:text-darkblue px-4 py-2 rounded transition duration-300"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={toggleMenu}
              className="hover:bg-belge hover:text-darkblue px-4 py-2 rounded transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
