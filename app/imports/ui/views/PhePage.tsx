import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import LinkButton from "../components/LinkButton";
import Tag from "../components/Tag";

function PhePage() {
  const GRID_COL_CLASS = "flex flex-col gap-10 xl:gap-20";
  const IMG_CLASS =
    "rounded-lg shadow-lg border border-primary-100 dark:brightness-[90%]";
  return (
    <ParallaxProvider>
      <section className="w-full p-10 pb-20 md:pb-40">
        <h1 className="mb-8 text-3xl font-extrabold text-transparent transition-all md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r to-primary-600 from-sky-400">
          Health Empower Project
        </h1>
        <div className="grid grid-cols-4 grid-rows-1 gap-4 md:gap-10 xl:px-10">
          <Parallax className={GRID_COL_CLASS} speed={10}>
            <img className={IMG_CLASS} src="/phe/mycoach.png" />
            <img className={IMG_CLASS} src="/phe/module.png" />
          </Parallax>
          <Parallax className={GRID_COL_CLASS} speed={2}>
            <img className={IMG_CLASS} src="/phe/goals-values.png" />
            <img className={IMG_CLASS} src="/phe/goal.png" />
          </Parallax>
          <Parallax className={GRID_COL_CLASS} speed={5}>
            <img className={IMG_CLASS} src="/phe/activity-logbook.png" />
            <img className={IMG_CLASS} src="/phe/painlogbook-input.png" />
          </Parallax>
          <Parallax className={GRID_COL_CLASS} speed={15}>
            <img className={IMG_CLASS} src="/phe/painlogbook-recs.png" />
            <img className={IMG_CLASS} src="/phe/painlogbook-scales.png" />
          </Parallax>
        </div>
      </section>
      <section className="flex flex-col items-center px-8 mb-12 lg:px-16 2xl:px-60 md:flex-row">
        <img
          className="object-contain w-1/2 max-w-md mx-12 mb-8 shadow-xl lg:w-1/3 rounded-xl md:mb-0 dark:brightness-[90%]"
          src="/phe/painlogbook-recs.png"
        />
        <div>
          <h2 className="mb-1 text-2xl font-extrabold text-transparent transition-all md:text-3xl lg:text-4xl bg-clip-text bg-gradient-to-r to-primary-600 from-sky-400">
            Health Empower Project
          </h2>
          <h3 className="text-xl text-slate-500 text-semibold dark:text-slate-300">
            Coaching and supporting users with chronic muskuloskeletal pain
          </h3>
          <div className="flex flex-wrap gap-2 my-2">
            <Tag label="Health" color="blue" />
            <Tag label="Explaining Recommendations" color="orange" />
          </div>
          <p className="mt-4 mb-8 text-base text-slate-500 md:text-lg dark:text-slate-300">
            Within this European research project, work was done on digital
            solutions to support employees with pain complaints to learn to
            better deal with the complaints and to eliminate absenteeism due to
            pain complaints. Pain complaints are a socially relevant problem,
            with 60% of Belgian employees having pain complaints, and 33% of
            long-term absenteeism being caused by these complaints. We developed
            a smartphone application as a digital solution to help gather
            information through questionnaires, and stimulate behavioral change
            through exercises and interactive modules.
          </p>
          <LinkButton
            title="Paper: Explaining Health Recommendations to Lay Users: The Dos and Dont's."
            conference="IUI '22 Conference, Helsinki, Finland"
            authors="Szymanski Maxwell, Vanden Abeele Vero, Verbert Katrien"
            link="https://scholar.google.be/citations?view_op=view_citation&hl=en&user=e904thUAAAAJ&citation_for_view=e904thUAAAAJ:u-x6o8ySG0sC"
          />
        </div>
      </section>
    </ParallaxProvider>
  );
}

export default PhePage;
