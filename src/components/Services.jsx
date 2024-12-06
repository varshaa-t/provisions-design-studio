import React, { useState } from 'react'
import { GoArrowRight } from "react-icons/go";
import { FiArrowUpRight } from "react-icons/fi";
import { delay, motion } from 'framer-motion';

function Services({animationProps}) {
    const servicesOne = new URL("../assets/services-1.jpg", import.meta.url).href;
    const servicesTwo = new URL("../assets/services-2.jpg", import.meta.url).href;
    const servicesThree = new URL("../assets/services-3.jpg", import.meta.url).href;

    const [arrowHover, setArrowHover] = useState(false);

  return (
    <motion.div 
        className='pt-24 bg-white -mx-12 px-12 pb-24 lg:pb-48'
    >
        <motion.div 
            className='flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row lg:justify-between lg:items-center -ml-5 sm:ml-0 mb-16'
        >   
            <motion.div 
                className='text-5xl md:text-6xl md:mr-10 lg:w-[40vw] leading-[5rem] xl:w-auto lg:text-[5.2rem] tracking-tighter font-medium lg:mr-0'
                {...animationProps}
            >
                    What we offer
            </motion.div>
            <motion.div 
                className='w-[85vw] md:w-auto text-[1.1rem] lg:w-[26vw] leading-7 pt-8 text-[#787979] tracking-tighter'
                {...animationProps}
                transition={{ ...animationProps.transition, delay: 0.2 }}
            >
                At Provisions Design Studio, we thrive on crafting bespoke 
                experiences that elevate your brand and deliver real results.
            </motion.div>
            <motion.button 
                className='flex space-x-6 items-center bg-neon-green w-[180px] lg:w-auto pl-4 pr-2 py-1 xl:pl-5 xl:pr-3 xl:py-2 rounded-3xl text-base lg:text-lg mt-12 tracking-tight shine-effect'
                onMouseEnter={() => setArrowHover(true)}
                onMouseLeave={() => setArrowHover(false)}
                {...animationProps}
                transition={{ ...animationProps.transition, delay: 0.4}}
            >
                <div>Start a project</div>
                {arrowHover ? 
                    <GoArrowRight className='text-4xl bg-white rounded-full py-2 rotate-[-40deg]'/> :
                    <GoArrowRight className='text-4xl bg-white rounded-full py-2'/>
                }   
            </motion.button>
        </motion.div>
        <div className='grid grid-cols-1 gap-y-10 md:gap-y-0 md:grid-cols-2 lg:flex lg:justify-between lg:space-x-8'>
            <motion.div 
                className='relative'
                {...animationProps}
            >
                <div 
                    className='absolute bg-[rgba(0,0,0,1)] rounded-3xl text-xl sm:text-2xl text-white opacity-70 top-4 left-5 px-3 sm:px-7 py-2 tracking-tight'
                >
                    Content Creation
                </div>
                <img 
                    className='w-[85vw] md:w-[40vw] lg:w-[30vw] h-[360px] rounded-3xl object-cover'
                    src={servicesOne}
                    alt='content-creation-image'
                />
                <FiArrowUpRight className='absolute right-4 md:right-14 lg:right-6 top-[18rem] text-[3rem] bg-white rounded-full py-3 hover:cursor-pointer hover:bg-neon-green'/>
            </motion.div>
            <motion.div 
                className='relative'
                {...animationProps}
                transition={{...animationProps.transition, delay: 0.2}}
            >
                <div 
                    className='absolute bg-[rgba(0,0,0,1)] rounded-3xl text-xl sm:text-2xl text-white opacity-70 top-4 left-5 px-3 sm:px-7 py-2 tracking-tight'
                >
                    Web Design
                </div>
                <img 
                    className='w-[85vw] md:w-[50vw] lg:w-[40vw] h-[450px] rounded-3xl object-cover'
                    src={servicesTwo}
                    alt='web-design-image'
                />
                <FiArrowUpRight className='absolute right-4 lg:right-6 top-[23rem] text-[3rem] bg-white rounded-full py-3 hover:cursor-pointer hover:bg-neon-green'/>
            </motion.div>
            <motion.div 
                className='relative md:mt-10 lg:mt-[6.4rem]'
                {...animationProps}
                transition={{...animationProps.transition, delay: 0.4}}
            >
                <div 
                    className='absolute bg-[rgba(0,0,0,1)] rounded-3xl text-xl sm:text-2xl text-white opacity-70 top-4 left-[3vw] md:left-[26vw] lg:left-5 px-3 sm:px-7 py-2 tracking-tight'
                >
                    Web Hosting
                </div>
                <img 
                    className='w-[85vw] sm:w-[85vw] md:w-[40vw] md:mx-[25vw] lg:mx-0 lg:w-[30vw] h-[350px] rounded-3xl object-cover'
                    src={servicesThree}
                    alt='web-hosting-image'
                />
                <FiArrowUpRight className='absolute right-4 md:right-auto md:left-[58vw] lg:left-auto lg:right-6 top-[18rem] text-[3rem] bg-white rounded-full py-3 hover:cursor-pointer hover:bg-neon-green'/>
            </motion.div>
        </div>
    </motion.div>
  )
}

export default Services