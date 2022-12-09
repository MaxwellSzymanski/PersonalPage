import React, { useState } from "react";

function NavBar() {
  const [scrollTop, updateScrollTop] = useState(0);
  const [isDarkTheme, toggleIsDarkTheme] = useState(
    localStorage.theme === "dark"
  );

  window.onscroll = function () {
    if (window.scrollY < scrollTop) showNavBar();
    else hideNavBar();
    if (window.scrollY > 0) updateScrollTop(window.scrollY);
  };

  function showNavBar() {
    const fullnavbar = document.getElementById("fullnavbar");
    if (fullnavbar) fullnavbar.style.top = "0px";
    const smallnavbar = document.getElementById("smallnavbar");
    if (smallnavbar) smallnavbar.style.top = "-2.5rem";
  }

  function hideNavBar() {
    const fullnavbar = document.getElementById("fullnavbar");
    if (fullnavbar) fullnavbar.style.top = "-100px";
    const smallnavbar = document.getElementById("smallnavbar");
    if (smallnavbar) smallnavbar.style.top = "2.5rem";
  }

  function getCurrentPosition(tag: string) {
    var element = document.getElementById(tag);
    if (element) {
      var position = element.getBoundingClientRect();
      if (
        !(tag == "projects") &&
        position.top >= -100 &&
        position.bottom <= window.innerHeight
      ) {
        return true;
      } else {
        return false;
      }
    }
  }

  function toggleDarkMode() {
    const currentTheme = localStorage.theme;
    currentTheme;
    console.log(`Changing to ${currentTheme}`);
    if (currentTheme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      toggleIsDarkTheme(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      toggleIsDarkTheme(true);
    }
  }

  function scrollTo(tag: string) {
    const element = document.getElementById(tag);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  function renderSmallNavBar() {
    return (
      <div
        id="smallnavbar"
        className="fixed z-40 p-2 md:p-4 transition-all rounded-full shadow-lg top-[-50px] right-5 md:right-10 bg-slate-50 cursor-pointer border-4 border-slate-200 dark:border-slate-700 dark:bg-slate-800 duration-300"
        onClick={() => showNavBar()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 text-slate-500 dark:text-slate-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    );
  }

  const ACTIVE_CLASS =
    "text-primary-600 dark:text-primary-500 hover:text-primary-700 dark:hover:text-primary-600 transition-all";
  const INACTIVE_CLASS =
    "text-slate-600 dark:text-slate-200 hover:texy-slate-700 dark:hover:text-primary-300 transition-all";

  function renderFullNavBar() {
    return (
      <div
        id="fullnavbar"
        className="fixed top-0 left-0 z-50 flex justify-center w-full transition-all duration-300 bg-white border-b-2 border-slate-200 dark:bg-slate-800 dark:border-slate-700"
      >
        <nav className="relative flex items-center justify-center w-full gap-6 px-0 py-4 lg:px-4 md:gap-10 font-sm md:font-base">
          <button
            className={`py-2 font-bold rounded-xl ${
              getCurrentPosition("welcome") ? ACTIVE_CLASS : INACTIVE_CLASS
            }`}
            onClick={() => scrollTo("welcome")}
          >
            Home
          </button>
          <button
            className={`py-2 font-bold  rounded-xl ${
              getCurrentPosition("projects") ? ACTIVE_CLASS : INACTIVE_CLASS
            }`}
            onClick={() => scrollTo("projects")}
          >
            Projects
          </button>
          <button
            className={`py-2 font-bold text-slate-600 rounded-xl ${
              getCurrentPosition("contact") ? ACTIVE_CLASS : INACTIVE_CLASS
            }`}
            onClick={() => scrollTo("contact")}
          >
            Contact
          </button>
          <div className="absolute flex items-center justify-center right-5 md:right-10">
            <label className="relative inline-flex items-center cursor-pointer">
              <span className="absolute left-0 ml-1 text-sm font-medium text-slate-600 dark:text-slate-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>
              </span>
              <input
                type="checkbox"
                value=""
                checked={isDarkTheme}
                className="sr-only peer"
                onChange={() => toggleDarkMode()}
              />
              <span className="absolute right-0 mr-1 text-sm font-medium text-slate-600 dark:text-slate-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-primary-600"></div>
            </label>
          </div>
        </nav>
      </div>
    );
  }

  return (
    <div>
      {renderSmallNavBar()}
      {renderFullNavBar()}
    </div>
  );
}

export default NavBar;
