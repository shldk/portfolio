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
      <div className="self-stretch flex flex-col items-start justify-start gap-2 text-left text-gray font-inter">
        <div className="self-stretch flex flex-col items-start justify-start gap-1">
          <div className="self-stretch relative capitalize">{date}</div>
          <div className="self-stretch relative font-medium text-2xl">
            {company}
          </div>
          <div className="self-stretch relative font-medium text-lg">
            {skills.join(' · ')}
          </div>
        </div>
        <div className="self-stretch relative text-lg">
          {text}
        </div>
      </div>
    );
  }
);

export default Experience;
