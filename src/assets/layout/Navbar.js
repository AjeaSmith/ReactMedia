import React, { useState } from "react";
import logo from "../../logo.svg";
const Navbar = () => {
  const [open, setopen] = useState(false);
  const openMenu = () => {
    setopen(!open);
  };
  return (
    <header class="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div class="flex items-center justify-between px-4 py-3 sm:p-0">
        <div className="flex items-center">
          <img class="h-8" src={logo} alt="react logo" />
          <span className="text-white">Media</span>
        </div>
        <div class="sm:hidden">
          <button
            type="button"
            class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
            onClick={openMenu}
          >
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {open ? (
                <path
                  fill-rule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <nav
        className={
          open
            ? "block px-2 pt-2 pb-4 sm:flex sm:p-0"
            : "hidden px-2 pt-2 pb-4 sm:flex sm:p-0"
        }
      >
        <a
          href="#"
          class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
        >
          Login
        </a>
        <a
          href="#"
          class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
        >
          Sign up
        </a>
        <a
          href="#"
          class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
        >
          +Add
        </a>
        <a
          href="#"
          class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
        >
          Welcome, Ajea
        </a>
        <a
          href="#"
          class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
        >
          Signout
        </a>
      </nav>
    </header>
  );
};
export default Navbar;
