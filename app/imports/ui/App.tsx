import React from "react";
import NavBar from "./components/NavBar";
import AidaPage from "./views/AidaPage";
import ContactPage from "./views/ContactPage";
import PhePage from "./views/PhePage";
import TwipePage from "./views/TwipePage";
import WelcomePage from "./views/WelcomePage";

export const App = () => (
  <div className="flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-900">
    <div className="hidden text-green-500 bg-green-100"></div>
    <div className="hidden text-yellow-600 bg-yellow-100"></div>
    <div className="hidden text-purple-400 bg-purple-100"></div>
    <div className="hidden text-orange-400 bg-orange-100 hover:text-primary-700 dark:hover:text-primary-600"></div>
    <div className="hidden bg-primary-100 text-primary-400 hover:texy-slate-700 dark:hover:text-primary-300"></div>
    <NavBar />
    <WelcomePage />
    <section id="projects">
      <PhePage />
      <TwipePage />
      <AidaPage />
    </section>
    <ContactPage />
  </div>
);
