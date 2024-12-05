import React, { useState } from 'react'
import { GoArrowRight } from "react-icons/go";
import logo from '../assets/logo.png'
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Footer() {

    const [arrowHover, setArrowHover] = useState(false);

  return (
    <div className='bg-white -mx-12 px-6 md:px-12 pt-20 md:pt-32 flex flex-col pb-6'>
        <div className='flex flex-col md:flex-row justify-between'>
            <div className='text-left w-[350px] text-5xl md:text-[4rem] md:w-[37vw] md:leading-[5.5rem] lg:text-[5rem] font-medium tracking-tight'>
                <div>
                    We're ready! Let’s collaborate
                </div>
            </div>
            <div className='flex flex-col items-start md:items-end'>
                <div className='text-base text-left pt-12 md:pt-0 md:text-[1.1rem] md:w-[33vw] md:text-right tracking-tight'>
                    Let's collaborate to turn your vision into reality and create a 
                    digital presence that sets you apart from the competition.
                </div>
                <button 
                    className='text-base lg:text-lg flex space-x-6 items-center bg-neon-green pl-5 pr-3 py-2 rounded-3xl mt-12 tracking-tight shine-effect'
                    onMouseEnter={() => setArrowHover(true)}
                    onMouseLeave={() => setArrowHover(false)}
                >
                    <div>Start a project</div>
                    {arrowHover ? 
                        <GoArrowRight className='text-4xl bg-white rounded-full py-2 rotate-[-40deg]'/> :
                        <GoArrowRight className='text-4xl bg-white rounded-full py-2'/>
                    }
                </button>
            </div>
        </div>
        <div className='flex flex-col space-y-8 lg:space-y-0 lg:flex-row justify-between mt-20 md:mt-32 mb-10'>
            <div className='flex flex-col space-y-8 tracking-tight text-lg'>   
                <div className='lg:w-[12vw]'>
                    136 Park La Brea Eve Suite 300 Atlanta, GA 30350, USA
                </div>
                <div>
                    <div>provisions@info</div>
                    <div>Atlanta: (000) 111-2222</div>
                    <div>Miami: (123) 456-7890</div>
                </div>
            </div>
            <div className='lg:-ml-20'>
                <img 
                    className='w-[290px] h-[80px]'
                    src={logo}
                    alt='logo'
                />
            </div>
            <ul className='text-gray flex flex-col lg:items-end space-y-3 text-[1.1rem] tracking-tight hover:cursor-pointer'>
                <li className='hover:text-black'>
                    <NavLink
                        to={"/home"}
                        className={({isActive}) =>
                            isActive ? "text-black" : "text-gray"
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li className='hover:text-black'>
                    <NavLink
                        to={"/services"}
                        className={({isActive}) => 
                            isActive ? "text-black" : "text-gray"
                        }
                    >
                        Services
                    </NavLink>
                </li>
                <li className='hover:text-black'>
                    <NavLink
                        to={"/pricing"}
                        className={({isActive}) => 
                            isActive ? "text-black" : "text-gray"
                        }
                    >
                        Pricing
                    </NavLink>
                </li>
                <li className='hover:text-black'>
                    <NavLink
                        to={"/contact"}
                        className={({isActive}) => 
                            isActive ? "text-black" : "text-gray"
                        }
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </div>
        <div className='flex flex-col space-y-8 md:space-y-0 md:flex-row justify-between'>
            <div className='text-center md:text-left'>
                Copyright © 2024 Provision. All Rights Reserved. | Privacy Policy
            </div>
            <div className='flex justify-center md:justify-start space-x-4 text-2xl text-gray hover:cursor-pointer'>
                <FaLinkedinIn className='hover:text-black'/>
                <FaInstagram className='hover:text-black'/>
            </div>
        </div>
    </div>
  )
}

export default Footer