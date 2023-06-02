import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft? : boolean;
}

function Skill({ directionLeft }: Props) {
  return (
    <div className='group flex relative cursor-pointer'>
        <motion.img
        initial = {{
            x: directionLeft ? -200 : 200,
            opacity: 0
        }}

        whileInView={{ 
            x: 0,
            opacity: 1,
            transition: {duration: 1}
         }}
         whileHover={{ scale:1.2 }}
         viewport={{ once: true }}
         src='https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_96102ac6497377cd53da621075fe828e/sanity.png'
         className='rounded-full border border-gray-500 object-cover w-20 h-20 2xl:w-32 2xl:h-32'
        />
    </div>
  )
}

export default Skill