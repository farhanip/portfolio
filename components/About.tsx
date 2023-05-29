import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({}: Props) {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-7xl px-10 mx-auto items-center justify-evenly'>
    <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
    <motion.img
    initial={{
        x:-200,
        opacity:0,
    }}
    transition={{
        duration:1.2,
    }}
    whileInView={{
        x:0,
        opacity:1,
    }}
    viewport={{once:true}}
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShtUSh7vECWRvnT0EjApvfm7hprTzXzBGHfGN8IIo&s'
    className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 2xl:w-[500px] 2xl:h-[600px]'
    />
    </div>
  )
}

export default About