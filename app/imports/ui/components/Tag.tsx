import React from "react";
import { ColorType, TagColor } from "/types/color";

export interface TagProps {
  className?: string;
  color: ColorType;
  label: string;
}

function Tag({ className = "relative", label, color }: TagProps) {
  const COLOR_CLASS = TagColor[color];
  const CLASS = `py-1 px-3 w-fit text-xs md:text-sm rounded-full flex justify-center ${COLOR_CLASS} ${className}`;

  if (label?.length === 0) return <></>;
  return <span className={CLASS}>{label}</span>;
}

export default Tag;
