import React, { useRef, useState } from 'react'
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
        className='pt-24 bg-white -mx-12 px-12 pb-48'
    >
        <motion.div 
            className='flex justify-between items-center mb-16'
        >   
            <motion.div 
                className='text-[5.2rem] tracking-tighter font-medium'
                {...animationProps}
            >
                    What we offer
            </motion.div>
            <motion.div 
                className='w-[26vw] text-[1.1rem] leading-7 pt-8 text-[#787979] tracking-tighter'
                {...animationProps}
                transition={{ ...animationProps.transition, delay: 0.2 }}
            >
                At Provisions Design Studio, we thrive on crafting bespoke 
                experiences that elevate your brand and deliver real results.
            </motion.div>
            <motion.button 
                className='flex space-x-6 items-center bg-neon-green pl-5 pr-3 py-2 rounded-3xl text-lg mt-12 tracking-tight'
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
        <div className='flex justify-between'>
            <motion.div 
                className='relative'
                {...animationProps}
            >
                <div 
                    className='absolute bg-[rgba(0,0,0,1)] rounded-3xl text-2xl text-white opacity-70 top-4 left-5 px-7 py-2 tracking-tight'
                >
                    Content Creation
                </div>
                <img 
                    className='w-[380px] h-[360px] rounded-3xl object-cover'
                    src={servicesOne}
                />
                <FiArrowUpRight className='absolute right-6 top-[18rem] text-[3rem] bg-white rounded-full py-3 hover:cursor-pointer hover:bg-neon-green'/>
            </motion.div>
            <motion.div 
                className='relative'
                {...animationProps}
                transition={{...animationProps.transition, delay: 0.2}}
            >
                <div 
                    className='absolute bg-[rgba(0,0,0,1)] rounded-3xl text-2xl text-white opacity-70 top-4 left-5 px-7 py-2 tracking-tight'
                >
                    Web Design
                </div>
                <img 
                    className='w-[530px] h-[450px] rounded-3xl object-cover'
                    src={servicesTwo}
                />
                <FiArrowUpRight className='absolute right-6 top-[23rem] text-[3rem] bg-white rounded-full py-3 hover:cursor-pointer hover:bg-neon-green'/>
            </motion.div>
            <motion.div 
                className='relative mt-[6.4rem]'
                {...animationProps}
                transition={{...animationProps.transition, delay: 0.4}}
            >
                <div 
                    className='absolute bg-[rgba(0,0,0,1)] rounded-3xl text-2xl text-white opacity-70 top-4 left-5 px-7 py-2 tracking-tight'
                >
                    Web Hosting
                </div>
                <img 
                    className='w-[400px] h-[350px] rounded-3xl object-cover'
                    src={servicesThree}
                />
                <FiArrowUpRight className='absolute right-6 top-[18rem] text-[3rem] bg-white rounded-full py-3 hover:cursor-pointer hover:bg-neon-green'/>
            </motion.div>
        </div>
    </motion.div>
  )
}

export default Services