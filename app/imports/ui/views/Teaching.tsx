import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const Classes = [
  {
    class: "Data Structures & Algorithms",
    description:
      "An extensive class teaching students about data structures (lists, maps, trees, ...) and algorithms, as well as creative and complex problem solving for modern-day computer science topics.",
    year: "2020 - 2022",
    color: "bg-purple-300 dark:bg-purple-500",
    speed: 3,
  },
  {
    class: "User-Experience Driven Web Design",
    description:
      "Having the proportion of half a thesis, this course teaches students the core principles of HCI, web development, project management and design.",
    year: "2022-2023",
    color: "bg-purple-400 dark:bg-purple-500",
    speed: 2,
  },
  {
    class: "Information Visualisation",
    description:
      "An interactive, hands-on class where students learn the principles of information and data visualisation, and apply these techniques through an extensive and creative project on which they are graded.",
    year: "2020-2023",
    color: "bg-purple-300 dark:bg-purple-500",
    speed: 1,
  },
  {
    class: "Web-Information Systems",
    description:
      "This class teaches students from digital humanities how to code their first web platform, that can be used for interactive data exploration with a creative twist.",
    year: "2022-2023",
    color: "bg-purple-200 dark:bg-purple-500",
    speed: 0,
  },
  {
    class: "Master Thesises",
    description:
      "I have the pleasure of guiding 5 thesis students on a weekly basis, with topics ranging from gamification in mHealth to developing interactive mobile visualisations.",
    year: "2020-2023",
    color: "bg-purple-400 dark:bg-purple-500",
    speed: -1,
  },
];

function TeachingPage() {
  return (
    <section
      className="flex flex-col items-center justify-center w-full mb-12"
      id="contact"
    >
      <ParallaxProvider>
        <Parallax speed={2}>
          <h1 className="flex items-center gap-4 mt-12 mb-6 text-3xl font-extrabold md:mb-12 md:mt-36 text-slate-900 dark:text-slate-100 md:text-5xl lg:text-6xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-12 h-12 text-purple-700 dark:text-purple-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>
            <span className="text-transparent transition-all bg-clip-text bg-gradient-to-r to-purple-400 from-purple-600 dark:to-purple-400 dark:from-purple-500">
              Teaching
            </span>
          </h1>
        </Parallax>
        <Parallax speed={1}>
          <p className="max-w-lg px-6 mb-12 text-sm text-slate-600 dark:text-slate-300 md:text-base">
            I also have the utmost pleasure teaching classes and guiding
            students in between developing projects and writing papers. Not only
            does this offer me a great variation in my daily workflow, but
            helping students and seeing them grow throught the year is something
            that I strive for. Here are some of the classes I help teaching:
          </p>
        </Parallax>
        <Parallax speed={-1}>
          <div className="grid grid-cols-2 gap-4 px-4 md:px-12 md:gap-6 md:grid-cols-3 xl:grid-cols-5 gap-y-6">
            {Classes.map((c) => {
              return (
                <div className="max-w-lg bg-white rounded-lg shadow-lg dark:bg-slate-700">
                  <div className={`w-full h-4 rounded-t-lg ${c.color}`} />
                  <div className="flex flex-col p-4">
                    <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200">
                      {c.class}
                    </h3>
                    <p className="text-sm italic text-slate-400 ">
                      Years: {c.year}
                    </p>
                    <p className="mt-2 text-xs md:text-sm text-slate-500 dark:text-slate-300">
                      {c.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Parallax>
      </ParallaxProvider>
    </section>
  );
}

export default TeachingPage;
