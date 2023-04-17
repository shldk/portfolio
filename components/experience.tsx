import type { NextPage } from "next";
import { memo } from "react";

type ExperienceType = {
  date?: string;
  company?: string;
  skills?: string[];
  text?: string;
};

const Experience: NextPage<ExperienceType> = memo(
  ({ date = "Present", company = "Self-Employed", skills = [], text }) => {
    return (
      <div className="self-stretch flex flex-col items-start justify-start gap-2.5 text-left text-gray">
        <div className="self-stretch flex flex-col items-start justify-start gap-0.5">
          <div className="self-stretch relative capitalize text-lg">{date}</div>
          <div className="self-stretch relative font-light text-3xl">
            {company}
          </div>
          <div className="self-stretch relative text-xl">
            {skills.join(' · ')}
          </div>
        </div>
        <div className="self-stretch relative text-xl">
          {text}
        </div>
      </div>
    );
  }
);

export default Experience;
