import React from 'react'
import { GoDotFill } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { FaGoogle } from "react-icons/fa6";
import { IoStarSharp } from "react-icons/io5";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { RiGoogleFill } from "react-icons/ri";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { arrow } from '../state/arrow';
import heroPic1 from '../assets/heroPic1.png'
import heroPic2 from '../assets/heroPic2.svg';

function HeroSection() {
  
  const arrowChange = useRecoilValue(arrow);
  const setArrowChange = useSetRecoilState(arrow);

  return (
    <div className='mt-32 grid grid-cols-2'>
        <div>
          <div className='flex items-center text-lg tracking-tight border border-slate-400 rounded-3xl w-52 px-4 py-1'>
            <GoDotFill />
            <div>Web Design Agency</div>
          </div>
          <div className='mt-8 w-[48vw] text-[100px] font-semibold leading-[6rem] tracking-tight'>
            The best solution for your website
          </div>
          <div className='mt-20 w-[23vw] text-lg tracking-tight'>
            We're passionate about creating exceptional digital experiences that elevate brands and drive results.
          </div>
          <button 
            className='flex space-x-6 items-center bg-neon-green pl-5 pr-3 py-2 rounded-3xl text-lg mt-12'
            onMouseOver={() => setArrowChange(true)}
            onMouseLeave={() => setArrowChange(false)}
          >
            <div>Explore more</div>
            {arrowChange ? 
              <GoArrowRight className='text-4xl bg-white rounded-full py-2 rotate-[-40deg]'/> :
              <GoArrowRight className='text-4xl bg-white rounded-full py-2'/>
            }
          </button>
        </div>
        <div className='relative'>
          <img 
            className='bg-white rounded-3xl absolute py-4 px-6 -top-16 z-10 left-28' 
            src={"https://provisions.studio/wp-content/uploads/2024/07/roi_img-1.svg#703"}
          />
          <img 
            src={heroPic1} 
            className='w-[500px] h-[500px] absolute right-0'
            alt="Laptop user" 
          />
          <img
            src={heroPic2}
            className='absolute top-[22rem] left-24'
          />
          <div className='absolute top-96 left-28 space-y-2.5 pl-4'>
              <FaGoogle className='w-20 h-20'/>
              <div className='text-2xl tracking-tighter'>Google reviews</div>
              <div className='flex text-2xl'>
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </div>
            </div>
        </div>
        <div className='pt-28 flex space-x-4 text-2xl text-[#666666] cursor-pointer'>
          <FaLinkedinIn className='hover:text-black'/>
          <FaInstagram className='hover:text-black'/>
          <RiGoogleFill className='hover:text-black'/>
        </div>
    </div>
  )
}

export default HeroSection