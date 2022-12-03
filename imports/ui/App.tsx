import React from "react";

import myJson from "/package.json";

const BOX_CLASS =
  "flex items-center justify-between p-4 transition-all border rounded-lg shadow-md border-slate-200 hover:shadow-lg bg-white";

const TAG_CLASS =
  "px-4 py-2 text-sm font-bold rounded-lg bg-sky-100 text-primary-500";

export const App = () => (
  <div className="flex flex-col items-center justify-center w-full h-screen bg-slate-100">
    <h1 className="mb-4 text-3xl font-extrabold text-slate-800 dark:text-white md:text-5xl lg:text-6xl">
      Welcome to{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-sky-500">
        MeteorUI
      </span>
    </h1>
    <p className="text-lg font-normal text-slate-600 lg:text-lg dark:text-slate-400">
      MeteorUI helps you kickstart your following Meteor project by including
      the following packages:
    </p>
    <div className="flex flex-col w-1/2 gap-4 py-8 lg:w-1/4">
      <div className={BOX_CLASS}>
        <div className="flex items-center gap-4">
          <img src="/meteor.svg" className="w-8"></img>
          <p className="text-lg font-bold text-slate-600">Meteor</p>
        </div>
        <div className={TAG_CLASS}>v2.8.1</div>
      </div>
      <div className={BOX_CLASS}>
        <div className="flex items-center gap-4">
          <img src="/react.png" className="w-8"></img>
          <p className="text-lg font-bold text-slate-600">React</p>
        </div>
        <div className={TAG_CLASS}>
          v{myJson.dependencies.react.replace("^", "")}
        </div>
      </div>
      <div className={BOX_CLASS}>
        <div className="flex items-center gap-4">
          <img src="/typescript.png" className="w-8"></img>
          <p className="text-lg font-bold text-slate-600">TypeScript</p>
        </div>
        <div className={TAG_CLASS}>
          v{myJson.devDependencies.typescript.replace("^", "")}
        </div>
      </div>
      <div className={BOX_CLASS}>
        <div className="flex items-center gap-4">
          <img src="/tailwindcss.png" className="w-8"></img>
          <p className="text-lg font-bold text-slate-600">TailwindCSS</p>
        </div>
        <div className={TAG_CLASS}>
          v{myJson.devDependencies.tailwindcss.replace("^", "")}
        </div>
      </div>
      <div className={BOX_CLASS}>
        <div className="flex items-center gap-4">
          <img src="/storybook.png" className="w-8"></img>
          <p className="text-lg font-bold text-slate-600">StoryBook</p>
        </div>
        <div className={TAG_CLASS}>
          v{myJson.devDependencies["@storybook/react"].replace("^", "")}
        </div>
      </div>
    </div>
    <p className="text-base italic text-slate-400">
      Last updated: 3 December 2022
    </p>
  </div>
);
