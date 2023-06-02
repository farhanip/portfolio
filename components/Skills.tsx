import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <div
      className="flex flex-col relative h-screen text-center md:text-left xl:flex-row
     xl:px-10 xl:space-y-0 mx-auto items-center justify-center"
    >
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
        viewport={{ once: true }}
        className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"
      >
        Skills
      </motion.h3>

      <div className="grid grid-cols-4 gap-5 pt-10">
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
      </div>
    </div>
  );
}

export default Skills;
