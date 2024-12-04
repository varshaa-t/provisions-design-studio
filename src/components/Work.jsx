import React, { useState } from 'react'
import { GoArrowRight } from "react-icons/go";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from 'framer-motion';

function Work({animationProps}) {
    const workOne = new URL("../assets/work-1.jpg", import.meta.url).href;
    const workTwo = new URL("../assets/work-2.jpg", import.meta.url).href;
    const workThree = new URL("../assets/work-3.jpg", import.meta.url).href;

    const [arrowHover, setArrowHover] = useState(false);

  return (
    <div className='flex flex-col -mx-12 px-12 bg-white'>
        <div className='flex flex-col space-y-5 md:grid md:grid-cols-2 lg:flex lg:flex-row lg:justify-between lg:items-center mb-24'>
            <motion.div 
                className='text-5xl md:text-7xl lg:text-[5.1rem] font-medium tracking-tight'
                {...animationProps}
            >
                Our work
            </motion.div>
            <motion.div 
                className='lg:w-[24vw] text-[1.1rem] leading-7 pt-2 text-[#787979] tracking-tighter'
                {...animationProps}
                transition={{...animationProps.transition, delay: 0.2}}
            >
                We embrace challenges and take pride in crafting unique 
                and visually stunning designs that make a lasting impact.
            </motion.div>
            <motion.button 
                className='flex space-x-6 items-center w-[190px] lg:w-auto bg-neon-green pl-4 pr-2 py-1 xl:pl-5 xl:pr-3 xl:py-2 rounded-3xl text-lg md:mt-8 lg:mt-12 tracking-tight'
                onMouseEnter={() => setArrowHover(true)}
                onMouseLeave={() => setArrowHover(false)}
                {...animationProps}
                transition={{...animationProps.transition, delay: 0.4}}
            >
                <div>Explore more</div>
                {arrowHover ? 
                    <GoArrowRight className='text-4xl bg-white rounded-full py-2 rotate-[-40deg]'/> :
                    <GoArrowRight className='text-4xl bg-white rounded-full py-2'/>
                }   
            </motion.button>
        </div>
        <div className='flex flex-col space-y-8 md:flex-row md:justify-between md:space-y-0 md:space-x-8 mb-24 lg:mb-40'>
            <motion.div
                {...animationProps}
            >
                <img 
                    src={workOne}
                    className='rounded-3xl'
                />
                <div className='flex items-center justify-between mt-4'>
                    <div className='text-[1.1rem] sm:text-2xl md:text-xl lg:text-2xl tracking-tight font-medium'>Exery - Men’s Backpacks Store</div>
                    <FiArrowUpRight className='text-4xl sm:text-5xl md:text-4xl lg:text-[3rem] bg-white rounded-full py-2 sm:py-3 md:py-2 lg:py-3 hover:cursor-pointer hover:bg-neon-green border border-gray-300 hover:border-none'/>
                </div>
            </motion.div>
            <motion.div
                {...animationProps}
                transition={{...animationProps.transition, delay: 0.2}}
            >
                <img 
                    src={workTwo}
                    className='rounded-3xl'
                />
                <div className='flex items-center justify-between mt-4'>
                    <div className='text-[1.1rem] sm:text-2xl md:text-xl lg:text-2xl tracking-tight font-medium'>Ccorp - Luxury Jet Company</div>
                    <FiArrowUpRight className='text-4xl sm:text-5xl md:text-4xl lg:text-[3rem] bg-white rounded-full py-2 sm:py-3 md:py-2 lg:py-3 hover:cursor-pointer hover:bg-neon-green border border-gray-300 hover:border-none'/>
                </div>
            </motion.div>
            <motion.div
                {...animationProps}
                transition={{...animationProps.transition, delay: 0.4}}
            >
                <img 
                    src={workThree}
                    className='rounded-3xl'
                />
                <div className='flex items-center justify-between mt-4'>
                    <div className='text-[1.1rem] sm:text-2xl md:text-xl lg:text-2xl tracking-tight font-medium'>Foster - Real Estate Agency</div>
                    <FiArrowUpRight className='text-4xl sm:text-5xl md:text-4xl lg:text-[3rem] bg-white rounded-full py-2 sm:py-3 md:py-2 lg:py-3 hover:cursor-pointer hover:bg-neon-green border border-gray-300 hover:border-none'/>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Work