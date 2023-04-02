import React from "react";

const Navbar = () => {
  return (
    <header className="container flex items-center justify-between w-full max-w-3xl px-6 py-10 mx-auto xl:max-w-5xl">
      <a
        rel="noopener noreferrer"
        href="/"
        className="block h-6 text-2xl font-semibold"
      >
        Nurbala Heybatov
      </a>
      <div className="flex items-center">
        <div className="hidden space-x-2 font-medium sm:block">
          <a rel="noopener noreferrer" href="#about" className="p-1">
            About
          </a>
          <a rel="noopener noreferrer" href="#timeline" className="p-1">
            Timeline
          </a>
          <a rel="noopener noreferrer" href="#contact" className="p-1">
            Contact
          </a>
        </div>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="dark:text-gray-900"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
        </button>
        <div className="sm:hidden">
          <button
            type="button"
            aria-label="Toggle Menu"
            className="w-8 h-8 ml-1 mr-1 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="dark:text-gray-900"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="fixed right-0 z-10 w-full h-full duration-300 ease-in-out transform translate-x-full top-24">
            <button
              type="button"
              aria-label="toggle modal"
              className="fixed w-full h-full cursor-auto focus:outline-none"
            ></button>
            <nav className="fixed h-full mt-8">
              <div className="px-12 py-4">
                <a
                  rel="noopener noreferrer"
                  href="/about"
                  className="text-2xl font-bold tracking-widest dark:text-gray-900"
                >
                  About
                </a>
              </div>
              <div className="px-12 py-4">
                <a
                  rel="noopener noreferrer"
                  href="/timeline"
                  className="text-2xl font-bold tracking-widest dark:text-gray-900"
                >
                  Timeline
                </a>
              </div>
              <div className="px-12 py-4">
                <a
                  rel="noopener noreferrer"
                  href="/contact"
                  className="text-2xl font-bold tracking-widest dark:text-gray-900"
                >
                  Contact
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
