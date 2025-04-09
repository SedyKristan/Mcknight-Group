"use client";

import { Content } from "@prismicio/client";
import { AnimatedLogo } from "./AnimatedLogo";
import { motion } from "framer-motion";

const AnimatedContainer = ({ slice }: { slice: Content.HeroSlice }) => {
  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center gap-16 flex-1">
        {slice.primary.logo?.url && (
          <AnimatedLogo className="relative h-auto w-[252px] lg:w-[30vw] text-white" />
        )}
        {slice.primary.taglines.length > 0 && (
          <div className="flex justify-center items-center gap-8 lg:gap-16 self-stretch">
            {slice.primary.taglines.map((tagline, index) => (
              <h2 key={index} className="opacity-80  text-white">
                {tagline.word}
              </h2>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimatedContainer;
