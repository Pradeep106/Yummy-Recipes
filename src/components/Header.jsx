import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="text-lg">
      <nav className="flex justify-between items-center py-4">
        <Link to="/" className="text-3xl">
          <span className="font-luxurious">Yummy</span>{" "}
          <span className="font-luxurious text-orange-500">Recipes</span>
        </Link>
        <div
          className={`hidden mb-5 ${
            showMenu ? "mini:inline-block" : "hidden"
          } items-center  absolute right-10`}>
          <HiOutlineMenuAlt4
            className="text-3xl absolute cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <div className={` mini:${showMenu ? "hidden" : ""} z-10`}>
          <ul className="flex  items-center mini:flex-col mini:absolute mini:border bg-white mini:transition-all mini:duration-200 mini:ease-in-out rounded-lg right-10 mini:gap-2 gap-10">
            <li className="mini:border-b mini:px-10 mini:py-2">
              <Link to="/">Home</Link>
            </li>
            <li className="mini:border-b mini:pb-2 mini:px-10">
              <Link to="/">Recipes</Link>
            </li>
            <li className="mini:border-b mini:pb-2 mini:px-10 ">
              <Link to="/">About</Link>
            </li>
            <li className="mini:border-b mini:pb-2 mini:px-10">
              <Link to="/">Login</Link>
            </li>
            <li
              className="mini:border-b hidden mini:inline-block text-red-500 mini:pb-2 min:px-10"
              onClick={() => toggleMenu(setShowMenu)}>
              Close
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
