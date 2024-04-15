// Footer.js
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 mt-10 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">Yummy Recipes</h2>
          <p className="mt-2">Delicious recipes for every occasion</p>
        </div>
        <div className="mt-4 md:mt-0">
          <ul className="flex flex-wrap justify-center md:justify-end">
            <li className="mr-4">
              <Link to="/" className="text-gray-400 hover:text-white">
                Home
              </Link>
            </li>
            <li className="mr-4">
              <Link to="/recipes" className="text-gray-400 hover:text-white">
                Recipes
              </Link>
            </li>
            <li className="mr-4">
              <Link to="/about" className="text-gray-400 hover:text-white">
                About
              </Link>
            </li>
            <li className="mr-4">
              <Link to="/contact" className="text-gray-400 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
