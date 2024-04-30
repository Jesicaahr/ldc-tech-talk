import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-gray-200">
      <nav className="flex flex-wrap items-center justify-between bg-violet-400 p-6">
        <div className="mr-6 flex flex-shrink-0 items-center text-violet-950">
          <span className="text-xl font-semibold tracking-tight">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Logo_Indomaret.png"
              className="h-12"
            ></img>
          </span>
        </div>
        <div className="block md:hidden">
          <button
            className="flex items-center rounded border border-violet-900 px-3 py-2 text-violet-900"
            onClick={toggleMenu}
          >
            <svg
              className="h-3 w-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full flex-grow md:flex md:w-auto md:items-center ${
            isOpen ? "block" : "hidden"
          } pt-6 md:block md:pt-0`}
        >
          <ul className="list-reset flex-1 items-center justify-end md:flex">
            <li className="mr-6">
              <Link
                to={"/"}
                className="inline-block px-4 py-2 text-lg font-semibold text-violet-950 no-underline hover:text-white"
              >
                Home
              </Link>
            </li>
            <li className="mr-6">
              <Link
                to={"/province"}
                className="inline-block px-4 py-2 text-lg font-semibold text-violet-950 no-underline hover:text-white"
              >
                Province
              </Link>
            </li>
            <li className="mr-6">
              <Link
                to={"/form"}
                className="inline-block px-4 py-2 text-lg font-semibold text-violet-950 no-underline hover:text-white"
              >
                Form
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
