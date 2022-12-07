import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import LinkButton from "../components/LinkButton";
import Tag from "../components/Tag";

function AidaPage() {
  return (
    <ParallaxProvider>
      <section className="w-full py-20 lg:py-40">
        <Parallax speed={5}>
          <h1 className="mx-10 mb-8 text-3xl font-extrabold text-transparent transition-all md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-sky-600 to-sky-300">
            Smart Learning Platforms
          </h1>
        </Parallax>
        <div className="flex">
          <Parallax
            className="flex flex-col w-1/2 gap-4 ml-4 mr-2 lg:ml-12 lg:mr-6 lg:gap-12"
            speed={5}
          >
            <img src="/aida/aida-1.png" className="shadow-lg rounded-xl" />
            <img src="/aida/aida-1.png" className="shadow-lg rounded-xl" />
          </Parallax>
          <Parallax
            className="flex flex-col w-1/2 gap-4 ml-2 mr-4 lg:gap-12 lg:ml-6 lg:mr-12"
            speed={10}
          >
            <img src="/aida/aida-3.png" className="shadow-lg rounded-xl" />
            <img src="/aida/aida-4.png" className="shadow-lg rounded-xl" />
          </Parallax>
        </div>
      </section>
      <section className="flex flex-col items-center px-8 mb-12 lg:px-16 2xl:px-60 md:flex-row">
        <img
          className="w-2/3 max-w-lg mx-12 mb-12 shadow-xl md:w-1/2 lg:w-1/3 rounded-xl aspect-auto md:mb-0"
          src="/aida/aida-3.png"
        />
        <div>
          <h2 className="mb-1 text-2xl font-extrabold text-transparent transition-all md:text-3xl lg:text-4xl bg-clip-text bg-gradient-to-r from-sky-600 to-sky-300">
            Smart Learning Platforms
          </h2>
          <h3 className="text-xl text-slate-500 text-semibold dark:text-slate-300">
            Engaging and motivating students to learn math
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
            title="Website: AIDA Wiski Platform"
            conference="aida.wiski.be"
            link="https://aida.wiski.be"
            type="website"
          />
        </div>
      </section>
    </ParallaxProvider>
  );
}

export default AidaPage;
