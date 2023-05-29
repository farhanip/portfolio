import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 flex justify-between max-w-7xl mx-auto p-5">
      {/* social */}
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://linkedin.com/in/farhan-hanif-s"
          fgColor="gray"
          bgColor="transparent"
          className="hover:scale-125 duration-150"
        />
        <SocialIcon
          url="https://github.com/farhanip"
          fgColor="gray"
          bgColor="transparent"
          className="hover:scale-125 duration-150"
        />
        <SocialIcon
          url="https://instagram.com/farhanhs_"
          fgColor="gray"
          bgColor="transparent"
          className="hover:scale-125 duration-150"
        />
      </motion.div>
      {/* contact me */}
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}

        className="flex flex-row items-center cursor-pointer"
      >
        <div className="cursor-pointer hover:scale-125 duration-150">
        <SocialIcon
          className="cursor-pointer "
          network="email"
          fgColor="gray"
          bgColor="transparent"
          
        />
        <p className="uppercase hidden md:inline-flex text-gray-400">Contact Me</p>
        </div>

      </motion.div>
    </header>
  );
}

export default Header;
