import React, { useState } from 'react'
import { GoDotFill } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { FaGoogle } from "react-icons/fa6";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import heroPic1 from '../assets/heroPic1.png'
import heroPic2 from '../assets/heroPic2.svg';
import { motion } from 'framer-motion';

const parentVariants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition:{
      staggerChildren: 0.1,
      ease: "easeInOut"
    }
  }
}

const childVariants1 = {
  hidden: {
    opacity: 0,
    y: 100
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeInOut"
    }
  }
}

const childVariants2 ={
  hidden: {
    opacity: 0,
    x: 100
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  }
}

function HeroSection() {

  const [arrowHover, setArrowHover] = useState(false);

  return (
    <motion.div 
      className='-ml-5 sm:ml-0 mt-32 mb-[600px] md:mb-[820px] lg:mb-0 sm:mt-48 grid grid-cols-1 lg:grid-cols-2'
      variants={parentVariants}
          initial="hidden"
          animate="show"
    >
        <div>
          <motion.div 
            className='flex items-center sm:text-lg tracking-tight border border-slate-400 rounded-3xl w-44 px-2 sm:w-52 sm:px-4 py-1'
            variants={childVariants1}
          >
            <GoDotFill />
            <div>Web Design Agency</div>
          </motion.div>
          <motion.div 
            className='mt-8 text-[55px] w-[85vw] leading-[3.5rem] sm:w-[90vw] md:text-7xl lg:w-[45vw] lg:text-[80px] lg:leading-[5.5rem] xl:leading-[6.7rem] xl:w-[46vw] xl:text-8xl font-semibold tracking-tight'
            variants={childVariants1}
          >
            The best solution for your website
          </motion.div>
          <motion.div 
            className='mt-6 lg:mt-20 w-[85vw] md:w-[70vw] lg:w-[35vw] xl:w-[23vw] text-lg tracking-tight'
            variants={childVariants1}
          >
            We're passionate about creating exceptional digital experiences that elevate brands and drive results.
          </motion.div>
          <motion.button 
            className='flex space-x-6 items-center bg-neon-green pl-4 pr-2 sm:pl-5 sm:pr-3 py-2 rounded-3xl sm:text-lg mt-4 lg:mt-12 shine-effect'
            onMouseOver={() => setArrowHover(true)}
            onMouseLeave={() => setArrowHover(false)}
            variants={childVariants1}
          >
            <div>Explore more</div>
            {arrowHover ? 
              <GoArrowRight className='text-4xl bg-white rounded-full py-2 rotate-[-40deg]'/> :
              <GoArrowRight className='text-4xl bg-white rounded-full py-2'/>
            }
          </motion.button>
        </div>
        <div className='relative top-32 lg:top:0'>
          <motion.img 
            className='bg-white rounded-3xl absolute py-4 px-6 z-10 -top-[10vh] left-[9vw] w-52 sm:w-auto sm:left-[25vw] md:left-[50vw] lg:-top-16 lg:left-28' 
            src={"https://provisions.studio/wp-content/uploads/2024/03/Group-240-2.svg#416"}
            alt={"roi-graph"}
            variants={childVariants2}
          />
          <motion.img 
            className='w-96 absolute right-[1vw] sm:right-[13vw] md:w-2/3 md:right-[16vw] lg:h-[60%] lg:top-16 lg:-right-6 xl:h-[70%] xl:right-0 xl:top-0'
            src={heroPic1} 
            alt={"laptop-user"}
            variants={childVariants2} 
          />
          <motion.img
            src={heroPic2}
            alt='green-background'
            className='hidden lg:block absolute top-[22rem] left-24'
            variants={childVariants2}
          />
          <motion.div 
            className='hidden lg:block absolute top-96 left-28 space-y-2.5 pl-4'
            variants={childVariants2}
          >
              <FaGoogle className='w-20 h-20'/>
              <div className='text-2xl tracking-tighter'>Google reviews</div>
              <div className='text-light-gray tracking-tighter text-lg'>Rating 5, 24 reviews</div>
            </motion.div>
        </div>
        <motion.div 
          className='pt-24 hidden lg:flex space-x-4 text-2xl text-[#666666] cursor-pointer'
          initial={{
            opacity: 0,
            y: 50
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.7,
              delay: 0.5,
              ease: "easeInOut"
            }
          }}
        >
          <FaLinkedinIn className='hover:text-black'/>
          <FaInstagram className='hover:text-black'/>
        </motion.div>
    </motion.div>
  )
}

export default HeroSection