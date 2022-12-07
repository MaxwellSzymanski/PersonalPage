import React from "react";
import { Icon, IconType } from "./Icon";

interface LinkButtonProps {
  title: string;
  className?: string;
  conference?: string;
  authors?: string;
  link: string;
  type?: IconType;
}

function LinkButton({
  title,
  conference,
  authors,
  link,
  type = "paper",
  className,
}: LinkButtonProps) {
  const padding = type === "paper" ? "p-4" : "p-2";

  return (
    <a href={link} target="_blank" className={className}>
      <div
        className={`flex items-center gap-4 transition-all bg-white shadow-lg hover:shadow-xl dark:bg-slate-700 rounded-2xl w-fit ${padding} ${className}`}
      >
        <div className={`bg-slate-100 dark:bg-slate-500 rounded-xl ${padding}`}>
          {Icon[type]}
        </div>
        <div>
          <p className="text-sm lg:text-base text-slate-500 dark:text-slate-100">
            {title}
          </p>
          <p className="text-xs italic lg:text-sm text-slate-400 dark:text-slate-300">
            {authors}
          </p>
          <p className="text-xs lg:text-sm text-slate-400 dark:text-slate-300">
            {conference}
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 ml-auto text-slate-500 max-h-4 max-w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </div>
    </a>
  );
}

export default LinkButton;
