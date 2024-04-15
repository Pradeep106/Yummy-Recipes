import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  // const [showMenu, setShowMenu] = useState(false);

  // const toggleMenu = () => {
  //   setShowMenu(!showMenu);
  // };

  return (
    <header className="text-lg">
      <nav className="flex mini:flex-col mini:justify-center justify-between items-center py-4">
        <Link to="/" className="text-3xl">
          <span className="font-luxurious">Yummy</span>{" "}
          <span className="font-luxurious text-orange-500">Recipes</span>
        </Link>
        {/* <div
          className={`hidden mb-5 ${
            showMenu ? "hidden" : "mini:inline-block"
          } items-center  absolute right-10`}>
          <HiOutlineMenuAlt4
            className="text-3xl absolute cursor-pointer"
            onClick={toggleMenu}
          />
        </div> */}
        <div className={`mini:mt-5 z-10`}>
          <ul className="flex px-4 items-center mini:gap-5 mini:flex  mini:border bg-white mini:transition-all mini:duration-200 mini:ease-in-out rounded-lg right-10 gap-10">
            <li className="mini:border-b mini:py-2">
              <Link to="/">Home</Link>
            </li>
            <li className="mini:border-b mini:py-2">
              <Link to="/">Recipes</Link>
            </li>
            <li className="mini:border-b mini:py-2 ">
              <Link to="/">About</Link>
            </li>
            <li className="mini:border-b mini:py-2 ">
              <Link to="/">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
