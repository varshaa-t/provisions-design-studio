import React, { useState } from 'react'
import { GoArrowRight } from "react-icons/go";
import { FiArrowUpRight } from "react-icons/fi";

function Work() {
    const workOne = new URL("../assets/work-1.jpg", import.meta.url).href;
    const workTwo = new URL("../assets/work-2.jpg", import.meta.url).href;
    const workThree = new URL("../assets/work-3.jpg", import.meta.url).href;

    const [arrowHover, setArrowHover] = useState(false);

  return (
    <div className='flex flex-col -mx-12 px-12 bg-white'>
        <div className='flex justify-between items-center mb-24'>
            <div className='text-[5.1rem] font-medium tracking-tight'>Our work</div>
            <div className='w-[24vw] text-[1.1rem] leading-7 pt-2 text-[#787979] tracking-tighter'>We embrace challenges and take pride in crafting unique 
                and visually stunning designs that make a lasting impact.
            </div>
            <button 
                className='flex space-x-6 items-center bg-neon-green pl-5 pr-3 py-2 rounded-3xl text-lg mt-12 tracking-tight'
                onMouseEnter={() => setArrowHover(true)}
                onMouseLeave={() => setArrowHover(false)}
            >
                <div>Explore more</div>
                {arrowHover ? 
                    <GoArrowRight className='text-4xl bg-white rounded-full py-2 rotate-[-40deg]'/> :
                    <GoArrowRight className='text-4xl bg-white rounded-full py-2'/>
                }   
            </button>
        </div>
        <div className='flex justify-between space-x-8 mb-40'>
            <div>
                <img 
                    src={workOne}
                    className='rounded-3xl'
                />
                <div className='flex items-center justify-between mt-4'>
                    <div className='text-2xl tracking-tight font-medium'>Exery - Men’s Backpacks Store</div>
                    <FiArrowUpRight className='text-[3rem] bg-white rounded-full py-3 hover:cursor-pointer hover:bg-neon-green border border-gray-300 hover:border-none'/>
                </div>
            </div>
            <div>
                <img 
                    src={workTwo}
                    className='rounded-3xl'
                />
                <div className='flex items-center justify-between mt-4'>
                    <div className='text-2xl tracking-tight font-medium'>Ccorp - Luxury Jet Company</div>
                    <FiArrowUpRight className='text-[3rem] bg-white rounded-full py-3 hover:cursor-pointer hover:bg-neon-green border border-gray-300 hover:border-none'/>
                </div>
            </div>
            <div>
                <img 
                    src={workThree}
                    className='rounded-3xl'
                />
                <div className='flex items-center justify-between mt-4'>
                    <div className='text-2xl tracking-tight font-medium'>Foster - Real Estate Agency</div>
                    <FiArrowUpRight className='text-[3rem] bg-white rounded-full py-3 hover:cursor-pointer hover:bg-neon-green border border-gray-300 hover:border-none'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work