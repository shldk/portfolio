import type { NextPage } from "next";
import Experience from "../components/experience";
import Skill from "../components/skill";

const ResumeFrame: NextPage = () => {
  return (
    <div className="relative w-full overflow-hidden flex flex-col items-center justify-center text-left text-gray font-konstant-grotesk">
      <div className="self-stretch relative flex-1 overflow-hidden flex flex-row py-20 px-40 justify-start gap-20 sm:flex-col sm:gap-10 sm:items-start sm:justify-start">
        <img
          className="absolute w-[494.09px] h-[643.42px] opacity-[0.8]"
          alt=""
          src="/gradient.svg"
        />
        <div className="flex flex-1 flex-col items-stretch justify-start gap-4">
          <div className="flex flex-col justify-start">
            <div className="flex flex-row justify-between text-xl">
              <div className="relative uppercase">Contacts</div>
              <div className="relative uppercase text-right">01</div>
            </div>
            <div className=" relative bg-black h-[0.2px] shrink-0" />
          </div>
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="relative uppercase text-xl">
              <a
                className="text-[inherit]"
                href="https://www.linkedin.com/in/stashladki/"
                target="_blank"
              >
                <span className="[text-decoration:underline] text-steelblue">
                  LINK
                </span>
                <span>EDIN</span>
              </a>
              <span>{` · `}</span>
              <a
                className="text-[inherit]"
                href="https://www.upwork.com/freelancers/~016689d0a21dd3d0c1/"
                target="_blank"
              >
                <span>UP</span>
                <span className="[text-decoration:underline] text-forestgreen">
                  WORK
                </span>
              </a>
            </div>
            <div className="relative uppercase">stas.hladki@GMAIL.com</div>
            <div className="relative uppercase">+380 66 330 69 46</div>
          </div>
        </div>
        <div className="flex flex-[2] flex-col items-start justify-start gap-10 text-black">
          
          <div className="self-stretch relative text-6xl">
            Stas Hladki, Senior Web Developer
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-10 text-gray">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start gap-6">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-start justify-between text-xl">
                    <div className="relative uppercase">Experience</div>
                    <div className="relative uppercase text-right">02</div>
                  </div>
                  <div className="self-stretch relative bg-black h-[0.2px] shrink-0" />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-8">
                  <Experience
                    date="01.2022  -  08.2012"
                    company="Grid Dynamics"
                    skills={['React', 'TypeScript', 'CircleCI']}
                    text="Worked closely with team from Nike to develop their new cookie solution."
                  />
                  <Experience
                    date="04.2019  -  06.2021"
                    company="Volterra"
                    skills={['Angular', 'TypeScript', 'D3.js']}
                    text="Was a part of a start-up innovating in edge cloud computing sphere, which was successfully bought by F5 in 2021 for $500 million."
                  />
                  <Experience
                    date="06.2015  -  03.2019"
                    company="Freelance"
                    skills={['Angular', 'React', 'TypeScript']}
                    text="Developed websites and applications from scratch for individual businesses. Was a part of numerous teams in various different companies."
                  />
                  <Experience
                    date="09.2014  -  03.2016"
                    company="EPAM Systems"
                    skills={['Java', 'Spring', 'SQL', 'MongoDB']}
                    text="Collaborated with team from MTV on implementing new livestream solution."
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-10">
              <div className="self-stretch flex flex-col items-start justify-start gap-6">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-start justify-between text-xl">
                    <div className="relative uppercase">Skills</div>
                    <div className="relative uppercase text-right">03</div>
                  </div>
                  <div className="self-stretch relative bg-black h-[0.2px] shrink-0" />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-2 text-right font-inter">
                  <div className="self-stretch flex flex-row items-start justify-start gap-6">
                    <Skill
                      value="Angular"
                      textTextAlign="right"
                      textDisplay="inline-block"
                    />
                    <Skill
                      value="React"
                      textTextAlign="left"
                      textDisplay="inline-block"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-6">
                    <Skill
                      value="JavaScript"
                      textTextAlign="right"
                      textDisplay="inline-block"
                    />
                    <Skill
                      value="TypeScript"
                      textTextAlign="left"
                      textDisplay="inline-block"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-6">
                    <Skill
                      value="AWS"
                      textTextAlign="right"
                      textDisplay="inline-block"
                    />
                    <Skill
                      value="Azure"
                      textTextAlign="left"
                      textDisplay="inline-block"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-6">
                    <Skill
                      value="Web3"
                      textTextAlign="right"
                      textDisplay="inline-block"
                    />
                    <Skill
                      value="Extensions"
                      textTextAlign="left"
                      textDisplay="inline-block"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-6">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-start justify-between text-xl">
                    <div className="relative uppercase">Education</div>
                    <div className="relative uppercase text-right">04</div>
                  </div>
                  <div className="self-stretch relative bg-black h-[0.2px] shrink-0" />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start font-inter gap-2">
                  <div className="self-stretch flex flex-col items-start justify-start gap-1">
                    <div className="self-stretch relative capitalize">
                      2011-2016
                    </div>
                    <div className="self-stretch relative text-2xl">
                      <p className="m-0">Belarusian National</p>
                      <p className="m-0">Technical University</p>
                    </div>
                  </div>
                  <div className="self-stretch relative text-lg">
                    Computer Science
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeFrame;
