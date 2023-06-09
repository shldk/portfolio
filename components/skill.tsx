import type { NextPage } from "next";
import { memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type SkillType = {
  value?: string;

  /** Style props */
  textTextAlign?: Property.TextAlign;
  textDisplay?: Property.Display;
};

const Skill: NextPage<SkillType> = memo(
  ({ value, textTextAlign, textDisplay }) => {
    const textStyle: CSS.Properties = useMemo(() => {
      return {
        textAlign: textTextAlign,
        display: textDisplay,
      };
    }, [textTextAlign, textDisplay]);

    return (
      <div
        className="flex-1 relative font-inter font-light text-gray text-right text-[26px]"
        style={textStyle}
      >
        {value}
      </div>
    );
  }
);

export default Skill;
