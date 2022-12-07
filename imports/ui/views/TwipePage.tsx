import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import LinkButton from "../components/LinkButton";
import Tag from "../components/Tag";

function TwipePage() {
  return (
    <ParallaxProvider>
      <section className="w-full py-20 lg:py-40">
        <Parallax speed={5}>
          <h1 className="px-10 mb-8 text-3xl font-extrabold text-transparent transition-all md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-purple-700 to-purple-400">
            News Recommender System
          </h1>
        </Parallax>

        <div className="flex flex-col md:flex-row">
          <Parallax className="w-5/6 md:w-1/2" speed={10}>
            <img src="/twipe/screen.png" className="object-fill shadow-2xl" />
          </Parallax>
          <div className="flex flex-col items-center justify-center w-full md:w-1/2">
            <Parallax speed={10}>
              <div className="max-w-sm p-8 ml-2 mr-24 text-sm text-purple-600 border-2 border-purple-100 shadow-lg md:text-base lg:text-lg xl:text-xl bg-purple-50 rounded-2xl dark:text-purple-200 dark:bg-purple-600 dark:border-purple-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="inline-block w-6 h-6 mr-2"
                >
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                  <path
                    fillRule="evenodd"
                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Offer recommendations on how to increase reading times of news
                articles (e.g. adding photo's, changing page number, structure
                and lay out).
              </div>
            </Parallax>
            <Parallax speed={5}>
              <div className="max-w-sm p-8 m-8 text-sm text-purple-600 border-2 border-purple-100 shadow-lg md:text-base lg:text-lg xl:text-xl bg-purple-50 rounded-2xl dark:text-purple-200 dark:bg-purple-600 dark:border-purple-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="inline-block w-6 h-6 mr-2"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                  <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                </svg>
                Explain and give insight into the recommendations, make them
                actionnable and transparent to end users.
              </div>
            </Parallax>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center px-8 mb-12 lg:px-16 2xl:px-60 md:flex-row">
        <img
          className="w-2/3 max-w-lg mx-12 mb-12 shadow-xl md:w-1/2 lg:w-1/3 rounded-xl aspect-auto md:mb-0"
          src="/twipe/paper.png"
        />
        <div>
          <h2 className="mb-1 text-2xl font-extrabold text-transparent transition-all md:text-3xl lg:text-4xl bg-clip-text bg-gradient-to-r to-purple-600 from-purple-400">
            News Recommender Systems
          </h2>
          <h3 className="text-xl text-slate-500 text-semibold dark:text-slate-300">
            Making news RS explainable and transparent for end users
          </h3>
          <div className="flex gap-2 my-2">
            <Tag label="Media" color="purple" />
            <Tag label="Interactive ML" color="yellow" />
          </div>
          <p className="mt-4 mb-8 text-base text-slate-500 md:text-lg dark:text-slate-300">
            Within this research project, work was done on digital solutions to
            support employees with pain complaints to learn to better deal with
            the complaints and to eliminate absenteeism due to pain complaints.
            Pain complaints are a socially relevant problem, with 60% of Belgian
            employees having pain complaints, and 33% of long-term absenteeism
            being caused by these complaints. Digital solutions can help gather
            information, and stimulate behavioral change, with our solution
            being a smartphone application to monitoring and coaching employees.
          </p>
          <LinkButton
            title="Paper: Visual, textual or hybrid: the effect of user expertise on different explanations"
            conference="IUI '21 Conference, Texas, US"
            authors="Maxwell Szymanski, Martijn Millecamp, Katrien Verbert"
            link="https://dl.acm.org/doi/10.1145/3397481.3450662"
          />
        </div>
      </section>
    </ParallaxProvider>
  );
}

export default TwipePage;
