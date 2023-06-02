import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Project({}: Props) {
    const projects = [1, 2, 3, 4];
  return (
    <div
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly
    mx-auto items-center z-0"
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
        Projects
      </motion.h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
            {projects.map((project, i) => 
                <React.Fragment key={project}>
                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-3 items-center
                justify-center p-20 md:p-44 h-screen">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShtUSh7vECWRvnT0EjApvfm7hprTzXzBGHfGN8IIo&s"
                     alt="" />
                    <div>
                    <h4>Case {project} of 3</h4>
                </div>
                </div>
                </React.Fragment>
            )}
        </div>

      <div className="w-full absolute top-[30%] left-0 h-[500px] md:h-[300px] 2xl:h-[500px] 
      bg-[#F7AB0A]/10 -skew-y-12">

      </div>
    </div>
  );
}

export default Project;
