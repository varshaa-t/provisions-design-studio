import React from 'react'
import { GoDotFill } from "react-icons/go";
import { motion } from 'framer-motion';

function AboutUs({animationProps}) {
    const aboutUs = new URL("../assets/aboutUs.jpg", import.meta.url);

  return (
    <div className='flex flex-col lg:flex-row justify-between lg:space-x-40 lg:items-center bg-white -mx-12 px-12 pb-24 lg:pb-48'>
        <motion.img 
            src={aboutUs}
            alt='laptop'
            className='w-[1600px] h-[400px] rounded-[2rem] object-cover'
            {...animationProps}
        />
        <div className='flex flex-col space-y-2 lg:space-y-10 mt-16 lg:mt-0'>
            <motion.div 
                className='flex items-center justify-start border border-slate-500 w-32 rounded-3xl px-4 py-2'
                {...animationProps}
                transition={{...animationProps.transition, delay: 0.2}}
            >
                <GoDotFill />
                About Us
            </motion.div>
            <motion.div 
                className='text-light-gray w-[80vw] sm:w-auto text-2xl md:text-4xl tracking-tighter'
                {...animationProps}
                transition={{...animationProps.transition, delay: 0.4}}
            >
                <span className='text-black font-semibold'>We understand</span> the importance of a powerful online presence in today's digital landscape. Whether you're a startup looking to establish <span className='text-black font-semibold'>your brand</span> or a seasoned enterprise aiming to refresh your online presence, we have the expertise to <span className='text-black font-semibold'>bring your vision to life.</span>
            </motion.div>
        </div>
    </div>
  )
}

export default AboutUs