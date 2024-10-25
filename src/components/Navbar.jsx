import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { RiArrowDownSLine } from "react-icons/ri";
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import { RiArrowUpSLine } from "react-icons/ri";

function Navbar() {
  const [services, setServices] = useState(false);
  const [arrowHover, setArrowHover] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 z-20 w-full flex justify-between items-center pl-16 pr-12 py-2 ${isScrolled ? 'bg-[rgba(255,255,255,0.5)] backdrop-blur-md' : ''}`}>
        <div>
            <img className='w-52 h-14 cursor-pointer' src={logo}/>
        </div>
        <ul className='flex space-x-10 text-gray cursor-pointer text-lg tracking-tight relative'>
            <li className='text-black'>Home</li>
            <li 
              className='flex items-center space-x-2 hover:text-black'
              onMouseEnter={() => setServices(true)} 
              onMouseLeave={() => setServices(false)}
            >
              <div>Services</div>
              {services ? 
                <RiArrowUpSLine className='text-2xl pt-1' /> :
                <RiArrowDownSLine className='text-2xl pt-1'/>
              }
              {services && 
                <div 
                  className='bg-white flex flex-col rounded-xl absolute top-7 left-14 text-gray'
                  onMouseOver={() => setServices(true)}
                  onMouseLeave={() => setServices(false)}
                >
                  <Link to="#" 
                        className="hover:text-black pt-4 pb-4 pl-5 pr-14"
                  >
                        Web Design
                  </Link>
                  <Link to="#" 
                        className="hover:text-black pt-2 pb-4 pl-5 pr-14"
                  >
                        3D Design
                  </Link>
                  <Link to="#" 
                        className="hover:text-black pt-2 pb-4 pl-5 pr-14"
                  >
                    Content Creation
                  </Link>
                </div>
              }
            </li>
            <li className='hover:text-black'>Pricing</li>
            <li className='hover:text-black'>Contact</li>
        </ul>
        <button 
          className='flex space-x-6 items-center bg-black pl-5 pr-3 py-2 rounded-3xl tracking-tighter'
          onMouseOver={() => setArrowHover(true)}
          onMouseLeave={() => setArrowHover(false)}
        >
          <div className='text-lg text-white'>Contact us</div>
          {arrowHover ? 
            <GoArrowRight className='text-4xl bg-white rounded-full py-2 rotate-[-40deg]'/> :
            <GoArrowRight className='text-4xl bg-white rounded-full py-2'/> 
          }
        </button>
    </div>
  )
}

export default Navbar