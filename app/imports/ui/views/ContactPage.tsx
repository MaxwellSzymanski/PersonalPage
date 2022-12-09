import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import LinkButton from "../components/LinkButton";

function ContactPage() {
  return (
    <ParallaxProvider>
      <section
        className="flex flex-col items-center justify-center w-full mb-24"
        id="contact"
      >
        <Parallax speed={3}>
          <h1 className="mt-12 mb-12 text-3xl font-extrabold md:mb-24 md:mt-36 text-slate-900 dark:text-slate-100 md:text-5xl lg:text-6xl">
            Contact me{" "}
            <span className="text-transparent transition-all bg-clip-text bg-gradient-to-r to-primary-600 from-sky-400">
              anytime
            </span>
            !
          </h1>
        </Parallax>
        <div className="grid w-full grid-cols-2 grid-rows-1 px-12 mx-2 md:mx-8 md:w-1/2 gap-x-4 md:gap-x-8 max-h-56">
          <Parallax speed={2}>
            <img
              src="/maxwell-3.jpg"
              className="h-auto row-span-3 my-auto ml-auto rounded-lg shadow-lg max-h-48 md:max-h-56 md:mx-auto"
            />
          </Parallax>
          <Parallax speed={1}>
            <div className="flex flex-col md:gap-3">
              <LinkButton
                title="Mail"
                link="mailto:maxwell.szymanski@kuleuven.be"
                type="mail"
                className="w-full max-w-sm mt-1"
              />
              <LinkButton
                title="LinkedIn"
                link="https://www.linkedin.com/in/maxwellszymanski/"
                type="linkedin"
                className="w-full max-w-sm mt-1"
              />
              <LinkButton
                title="Twitter"
                link="https://twitter.com/Max_Does_Well"
                type="twitter"
                className="w-full max-w-sm mt-1"
              />
            </div>
          </Parallax>
        </div>

        <section className="flex flex-col items-center justify-center w-full gap-4 px-8">
          <Parallax speed={3}>
            <h4 className="mt-12 text-sm md:text-base lg:text-lg text-slate-500 dark:text-slate-200">
              Perhaps these might also be of interest to you:
            </h4>
            <div className="flex flex-col items-center justify-center w-full gap-2">
              <LinkButton
                title="Resume"
                link="https://drive.google.com/file/d/1AC8RfUFdgyGNvbDNEwAYmAI8UN90q6_X/view?usp=sharing"
                type="attachment"
                className="w-full max-w-sm mt-1"
              />
              <LinkButton
                title="Recommendation letter"
                link="https://drive.google.com/file/d/1YD9oFMutTBuYZDksdGpMqzijYKtj_oxY/view?usp=sharing"
                type="attachment"
                className="w-full max-w-sm mt-1"
              />
            </div>
          </Parallax>
        </section>
      </section>
    </ParallaxProvider>
  );
}

export default ContactPage;
