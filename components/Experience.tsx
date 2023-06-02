import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

function Experience({}: Props) {
  return (
    <div className="flex flex-col relative h-screen md:text-left md:flex-row overflow-hidden
    max-w-7xl px-10 mx-auto items-center justify-evenly text-left">
      <motion.h3
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once:true }}
        className="absolute top-24 2xl:top-24 uppercase tracking-[20px] text-gray-500 text-2xl "
      >
        Experience
      </motion.h3>

      <div className="w-full flex space-x-5 pt-20 snap-x snap-mandatory overflow-x-auto">
        <ExperienceCard></ExperienceCard>
        <ExperienceCard></ExperienceCard>
        <ExperienceCard></ExperienceCard>
        <ExperienceCard></ExperienceCard>
      </div>
    </div>
  );
}

export default Experience;
