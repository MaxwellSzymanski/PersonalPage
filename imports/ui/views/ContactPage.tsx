import React from "react";
import LinkButton from "../components/LinkButton";

function ContactPage() {
  return (
    <section
      className="flex flex-col items-center justify-center w-full mb-24"
      id="contact"
    >
      <h1 className="mt-12 mb-12 text-3xl font-extrabold md:mb-24 md:mt-36 text-slate-900 dark:text-slate-100 md:text-5xl lg:text-6xl">
        Contact me{" "}
        <span className="text-transparent transition-all bg-clip-text bg-gradient-to-r to-primary-600 from-sky-400">
          anytime
        </span>
        !
      </h1>
      <div className="grid w-full grid-cols-2 grid-rows-1 px-12 mx-2 md:mx-8 md:w-1/2 gap-x-4 md:gap-x-8 max-h-56">
        <img
          src="/maxwell-3.jpg"
          className="h-auto row-span-3 my-auto ml-auto rounded-lg max-h-48 md:max-h-56 md:mx-auto"
        />
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
      </div>
    </section>
  );
}

export default ContactPage;
