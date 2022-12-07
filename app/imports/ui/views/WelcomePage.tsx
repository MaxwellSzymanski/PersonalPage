import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Tag from "../components/Tag";

function WelcomePage() {
  return (
    <section
      className="flex flex-col items-center justify-center h-screen pb-12"
      id="welcome"
    >
      <ParallaxProvider>
        <Parallax speed={4}>
          <h1 className="mt-12 mb-4 text-2xl font-extrabold md:mb-12 lg:mb-24 md:mt-36 text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
            Hi there,{" "}
            <span className="text-transparent transition-all bg-clip-text bg-gradient-to-r to-primary-600 from-sky-400">
              I'm Maxwell!
            </span>{" "}
            👋🏼
          </h1>
        </Parallax>
        <div className="flex flex-col items-center mx-10 bg-white shadow-xl rounded-xl md:flex-row md:max-w-2xl dark:border-slate-700 dark:bg-slate-700">
          <img
            className="object-cover w-16 h-16 mt-4 rounded-full md:mt-0 md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
            src="/maxwell.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between px-6 py-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-600 dark:text-white">
              About me
            </h5>
            <p className="mb-3 text-xs md:text-md md:text-base text-slate-400 dark:text-slate-100">
              A quick word about myself - I'm a 3<sup>rd</sup> year PhD student
              passionate about{" "}
              <span className="font-semibold text-primary-500 dark:text-primary-400">
                researching
              </span>{" "}
              human-centered explainable AI,{" "}
              <span className="font-semibold text-primary-500">developing</span>{" "}
              full-stack web platforms, and{" "}
              <span className="font-semibold text-primary-500">designing</span>{" "}
              user-centered applications (quite a mouthful).
            </p>
            <div className="flex gap-2 mt-4">
              <Tag label="Recommender Systems" color="blue" />
              <Tag label="Human-centered XAI" color="orange" />
            </div>
          </div>
        </div>
        <h2 className="flex pt-4 mx-4 mt-4 md:mt-8 font-xs lg:font-sm text-slate-400 dark:text-slate-300">
          <p className="text-sm lg:font-base">
            Take a look at some of the projects and papers I have developed
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 ml-2 text-slate-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </h2>
      </ParallaxProvider>
    </section>
  );
}

export default WelcomePage;
