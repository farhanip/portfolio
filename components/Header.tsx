import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 flex justify-between max-w-7xl mx-auto p-5 z-50">
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
        className="flex flex-row items-center cursor-pointer space-x-3"
      >
        <Link target="_blank" href="https://docs.google.com/document/d/1VCOdHAb-9GCQ5UbOvqIganyvH0LMSMkcM6AEvhIOIgA/edit?usp=sharing">
          <h3 className="hover:scale-125 duration-150 text-gray-400 uppercase">Resume</h3>
        </Link>
        <div className="cursor-pointer hover:scale-125 duration-150">
          <SocialIcon
            className="cursor-pointer "
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-gray-400">
            Contact Me
          </p>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
