import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <div
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-7xl px-20 mx-auto items-center justify-evenly"
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
        About
      </motion.h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShtUSh7vECWRvnT0EjApvfm7hprTzXzBGHfGN8IIo&s"
        className="-mb-20 md:mb-0 flex-shrink-0 mt-10 w-32 h-50 rounded-full object-cover md:rounded-lg md:w-64 md:h-95"
      />
      <motion.div
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
        className="px-0 space-y-10 md:px-10"
      >
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-md">
          I am Farhan Hanif Saefuddin. I am used to be called as Hanip.
          Currently, I am a student at Universitas Indonesia, majoring in
          Information System. I am keen to pursue a career in software
          engineering, especially as backend engineer. I am dedicated,
          interested in learning new things, highly inspired, fast learner, and
          ready to overcome any obstacles. I also have interest in video games 😃.
        </p>
      </motion.div>
    </div>
  );
}

export default About;
