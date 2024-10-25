import React from 'react'
import { GoArrowRight } from "react-icons/go";
import logo from '../assets/logo.png'
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { RiGoogleFill } from "react-icons/ri";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { arrow } from '../state/arrow';

function Footer() {

    const arrowChange = useRecoilValue(arrow);
    const setArrowChange = useSetRecoilState(arrow);

  return (
    <div className='bg-white -mx-12 px-12 pt-32 flex flex-col pb-6'>
        <div className='flex justify-between'>
            <div className='text-[5rem] leading-[5.5rem] font-medium tracking-tight'>
                <div>We're ready!</div>
                <div>Let’s collaborate</div>
            </div>
            <div className='flex flex-col items-end'>
                <div className='w-[33vw] text-right tracking-tight text-[1.1rem]'>
                    Let's collaborate to turn your vision into reality and create a 
                    digital presence that sets you apart from the competition.
                </div>
                <button 
                    className='flex space-x-6 items-center bg-neon-green pl-5 pr-3 py-2 rounded-3xl text-lg mt-12 tracking-tight'
                    onMouseEnter={() => setArrowChange(true)}
                    onMouseLeave={() => setArrowChange(false)}
                >
                    <div>Start a project</div>
                    {arrowChange ? 
                        <GoArrowRight className='text-4xl bg-white rounded-full py-2 rotate-[-40deg]'/> :
                        <GoArrowRight className='text-4xl bg-white rounded-full py-2'/>
                    }
                </button>
            </div>
        </div>
        <div className='flex justify-between mt-32 mb-10'>
            <div className='flex flex-col space-y-8 tracking-tight text-lg'>   
                <div className='w-[12vw]'>
                    25 SE 2nd Ave. Ste 550
                    Miami, FL 33131
                </div>
                <div>
                    <div>info@provisions.studio</div>
                    <div>Atlanta: (470) 365-1514</div>
                    <div>Miami: (786) 723-6079</div>
                </div>
            </div>
            <div className='-ml-20'>
                <img 
                    className='w-[290px] h-[80px]'
                    src={logo}
                />
            </div>
            <ul className='text-gray flex flex-col items-end space-y-3 text-[1.1rem] tracking-tight hover:cursor-pointer'>
                <li className='text-black'>Home</li>
                <li className='hover:text-black'>Services</li>
                <li className='hover:text-black'>Pricing</li>
                <li className='hover:text-black'>Contact</li>
            </ul>
        </div>
        <div className='flex justify-between'>
            <div>
                Copyright © 2024 Provision. All Rights Reserved. | Privacy Policy
            </div>
            <div className='flex space-x-4 text-2xl text-gray hover:cursor-pointer'>
                <FaLinkedinIn className='hover:text-black'/>
                <FaInstagram className='hover:text-black'/>
                <RiGoogleFill className='hover:text-black'/>
            </div>
        </div>
    </div>
  )
}

export default Footer