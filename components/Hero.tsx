import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

type Props = {};

function Hero({}: Props) {
  const [text] = useTypewriter({
    words: [
      "Hi, I'm Hanip",
      "Student at CSUI",
      "Guy who loves coding",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <motion.img
        src="https://drive.google.com/uc?export=view&id=12ddfWIaiY01hQuokv_nrmlWEypO-8pOm"
        alt=""
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      />
      <div>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px]">
          Aspiring Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="red" />
        </h1>
      </div>
      <div className="pt-5">
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>
        <Link href="#experience">
          <button className="heroButton">Experience</button>
        </Link>
        <Link href="#skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="heroButton">Projects</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
