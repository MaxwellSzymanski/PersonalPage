import React from "react";
import NavBar from "./components/NavBar";
import AidaPage from "./views/AidaPage";
import ContactPage from "./views/ContactPage";
import PhePage from "./views/PhePage";
import TeachingPage from "./views/Teaching";
import TwipePage from "./views/TwipePage";
import WelcomePage from "./views/WelcomePage";

export const App = () => (
  <div className="flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-900">
    <div className="hidden text-green-500 bg-green-100 dark:text-green-100 dark:bg-green-700"></div>
    <div className="hidden text-yellow-600 bg-yellow-100 dark:text-pink-100 dark:bg-pink-500"></div>
    <div className="hidden text-purple-400 bg-purple-100 dark:text-purple-100 dark:bg-purple-600"></div>
    <div className="hidden text-orange-400 bg-orange-100 dark:text-orange-100 dark:bg-orange-500 "></div>
    <div className="hidden bg-primary-100 text-primary-400 dark:text-primary-100 dark:bg-primary-700"></div>
    <div className="hidden hover:text-primary-700 dark:hover:text-primary-600" />
    <div className="hidden hover:text-slate-700 dark:hover:text-primary-300" />
    <NavBar />
    <WelcomePage />
    <section id="projects">
      <PhePage />
      <TwipePage />
      <AidaPage />
      <TeachingPage />
    </section>
    <ContactPage />
  </div>
);
