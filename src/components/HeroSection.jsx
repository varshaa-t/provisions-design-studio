import React, { useState } from 'react'
import { GoDotFill } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { FaGoogle } from "react-icons/fa6";
import { IoStarSharp } from "react-icons/io5";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { RiGoogleFill } from "react-icons/ri";
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
      className='mt-48 grid grid-cols-2'
      variants={parentVariants}
          initial="hidden"
          animate="show"
    >
        <div>
          <motion.div 
            className='flex items-center text-lg tracking-tight border border-slate-400 rounded-3xl w-52 px-4 py-1'
            variants={childVariants1}
          >
            <GoDotFill />
            <div>Web Design Agency</div>
          </motion.div>
          <motion.div 
            className='mt-8 w-[48vw] text-[100px] font-semibold leading-[6.7rem] tracking-tight'
            variants={childVariants1}
          >
            The best solution for your website
          </motion.div>
          <motion.div 
            className='mt-20 w-[23vw] text-lg tracking-tight'
            variants={childVariants1}
          >
            We're passionate about creating exceptional digital experiences that elevate brands and drive results.
          </motion.div>
          <motion.button 
            className='flex space-x-6 items-center bg-neon-green pl-5 pr-3 py-2 rounded-3xl text-lg mt-12'
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
        <div className='relative'>
          <motion.img 
            className='bg-white rounded-3xl absolute py-4 px-6 -top-16 z-10 left-28' 
            src={"https://provisions.studio/wp-content/uploads/2024/07/roi_img-1.svg#703"}
            variants={childVariants2}
          />
          <motion.img 
            src={heroPic1} 
            className='w-[500px] h-[500px] absolute right-0'
            alt="Laptop user"
            variants={childVariants2} 
          />
          <motion.img
            src={heroPic2}
            className='absolute top-[22rem] left-24'
            variants={childVariants2}
          />
          <motion.div 
            className='absolute top-96 left-28 space-y-2.5 pl-4'
            variants={childVariants2}
          >
              <FaGoogle className='w-20 h-20'/>
              <div className='text-2xl tracking-tighter'>Google reviews</div>
              <div className='flex text-2xl'>
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </div>
            </motion.div>
        </div>
        <motion.div 
          className='pt-24 flex space-x-4 text-2xl text-[#666666] cursor-pointer'
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
          <RiGoogleFill className='hover:text-black'/>
        </motion.div>
    </motion.div>
  )
}

export default HeroSection