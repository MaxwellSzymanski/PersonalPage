import React, { useState } from "react";

function NavBar() {
  const [scrollTop, updateScrollTop] = useState(0);
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
      console.log(`${tag} bottom is ${position.bottom}`);
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
        className="fixed z-40 p-2 md:p-4 transition-all rounded-full shadow-lg top-[-50px] right-5 md:right-10 bg-white cursor-pointer border-4 border-slate-100 dark:border-slate-700 dark:bg-slate-800 duration-300"
        onClick={() => showNavBar()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-slate-600 dark:text-slate-200"
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

  const ACTIVE_CLASS = "text-primary-600 dark:text-primary-500";
  const INACTIVE_CLASS = "text-slate-600 dark:text-slate-200";

  function renderFullNavBar() {
    return (
      <div
        id="fullnavbar"
        className="fixed top-0 left-0 z-50 flex justify-center w-full transition-all duration-300 bg-white border-b-2 border-slate-100 dark:bg-slate-800 dark:border-slate-700"
      >
        <nav className="relative flex items-center justify-between gap-10 px-4 py-4">
          <button
            className={`px-4 py-2 font-bold bg-white dark:bg-slate-800  rounded-xl ${
              getCurrentPosition("welcome") ? ACTIVE_CLASS : INACTIVE_CLASS
            }`}
            onClick={() => scrollTo("welcome")}
          >
            Home
          </button>
          <button
            className={`px-4 py-2 font-bold bg-white rounded-xl dark:bg-slate-800 ${
              getCurrentPosition("projects") ? ACTIVE_CLASS : INACTIVE_CLASS
            }`}
            onClick={() => scrollTo("projects")}
          >
            Projects
          </button>
          <button
            className={`px-4 py-2 font-bold bg-white text-slate-600 rounded-xl dark:bg-slate-800 dark:text-slate-200 ${
              getCurrentPosition("contact") ? ACTIVE_CLASS : INACTIVE_CLASS
            }`}
            onClick={() => scrollTo("contact")}
          >
            Contact
          </button>
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
