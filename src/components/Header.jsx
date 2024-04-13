import { Link } from "react-router-dom";
import { CgMenuLeft } from "react-icons/cg";

const Header = () => {
  return (
    <header className="text-lg font-semibold">
      <nav>
        <ul className="flex justify-between">
          <Link>
            <li className="text-3xl">
              <span className=" font-luxurious">Yummy</span>{" "}
              <span className="font-luxurious text-orange-500">Recipes</span>
            </li>
          </Link>
          <CgMenuLeft className="mini:inline-block hidden  " />
          <div className="flex box-center gap-10 mini:hidden">
            <Link>
              <li>Home</li>
            </Link>
            <Link>
              <li>Recipes</li>
            </Link>
            <Link>
              <li>About</li>
            </Link>
            <Link>
              <li>Login</li>
            </Link>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
