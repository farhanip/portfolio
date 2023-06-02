import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-3 flex-shrink-0 w-[300px] 
    md:w-[600px] 2xl:w-[900px] snap-center bg-[#292929] p-8 opacity-40 hover:opacity-100 transition-opacity duration-200 overflow-hidden'>
      <motion.img 
      initial={{
        y: -100,
        opacity: 0,
      }}
      transition={{ duration: 1 }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      className='h-20 w-20 rounded-full 2xl:w-[200px] 2xl:h-[200px] object-cover object-center'
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShtUSh7vECWRvnT0EjApvfm7hprTzXzBGHfGN8IIo&s" 
      alt="" />

      <div className='px-0 md:px-10'>
        <h4 className='text-2xl font-light'>CEO of Company</h4>
        <p className='font-bold text-xl mt-1'>COMPANY</p>
        <div className='flex space-x-2 my-2'>
          {/* tech list */}
        </div>

        <p className='uppercase pt-5 pb-2 text-gray-300'>Started - Ended</p>
          
        <h4>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </h4>
      </div>
    </article>
  )
}

export default ExperienceCard