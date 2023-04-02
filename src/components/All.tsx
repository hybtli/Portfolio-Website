import React from "react";
import TimeLine from "./TimeLine";
import About from "./About";

const All = () => {
  return (
    <div className="antialiased dark:bg-gray-800 dark:text-gray-100">
      <div className="flex flex-col min-h-screen space-y-12">
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
              <a rel="noopener noreferrer" href="/" className="p-1">
                About
              </a>
              <a rel="noopener noreferrer" href="/" className="p-1">
                Timeline
              </a>
              <a rel="noopener noreferrer" href="/" className="p-1">
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
                      href="/"
                      className="text-2xl font-bold tracking-widest dark:text-gray-900"
                    >
                      Blog
                    </a>
                  </div>
                  <div className="px-12 py-4">
                    <a
                      rel="noopener noreferrer"
                      href="/"
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
                      href="/"
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
        <main className="container flex-1 max-w-3xl px-6 mx-auto space-y-12 xl:max-w-5xl">
          <About />
          <TimeLine />
        </main>
        <section className="py-6 rounded-md dark:bg-gray-900 dark:text-gray-50">
          <div className="container flex flex-col justify-center max-w-3xl p-4 px-6 mx-auto space-y-8 xl:max-w-5xl md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
            <div className="flex flex-col space-y-4 text-center lg:text-left">
              <h1 className="text-5xl font-bold leading-none">
                Stay in the loop
              </h1>
              <p>
                Doloribus consectetur quasi ipsa quo neque culpa blanditiis
                ducimus recusandae a veritatis optio cumque, in harum ad nam!
              </p>
            </div>
            <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
              <div className="flex flex-row">
                <input
                  type="text"
                  placeholder="example@email.com"
                  className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
                />
                <button
                  type="button"
                  className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-400 dark:text-gray-900"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default All;
