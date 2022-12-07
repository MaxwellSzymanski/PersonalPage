import React from "react";
import NavBar from "./components/NavBar";
import AidaPage from "./views/AidaPage";
import ContactPage from "./views/ContactPage";
import PhePage from "./views/PhePage";
import TwipePage from "./views/TwipePage";
import WelcomePage from "./views/WelcomePage";

export const App = () => (
  <div className="flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-900">
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
