import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { RiArrowDownSLine } from "react-icons/ri";
import { GoArrowRight } from "react-icons/go";
import { Link, NavLink } from 'react-router-dom';
import { RiArrowUpSLine } from "react-icons/ri";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { RxHamburgerMenu } from "react-icons/rx";

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
    <nav className='fixed top-0 left-0 z-20 w-full'>
      <div className={`hidden lg:flex justify-between items-center pl-16 pr-12 py-2 ${isScrolled ? 'bg-[rgba(255,255,255,0.5)] backdrop-blur-md' : ''}`}>
          <div>
            <NavLink
              to={"/"}
            >
              <img 
                className='w-52 h-14 cursor-pointer' 
                src={logo} 
                alt='logo'
              />
            </NavLink>
          </div>
          <ul className='flex space-x-10 cursor-pointer text-lg tracking-tight relative'>
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
              <NavLink
                  to={"/services"}
                  className={({isActive}) => 
                    isActive ? "text-black" : "text-gray"
                  }
                >
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
              </NavLink>
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
          <button 
            className='flex space-x-6 items-center bg-black pl-5 pr-3 py-2 rounded-3xl tracking-tighter shine-effect'
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
      <div className={`flex lg:hidden justify-between items-center pl-16 pr-12 py-2 ${isScrolled ? 'bg-[rgba(255,255,255,0.5)] backdrop-blur-md' : ''}`}>
          <div>
            <NavLink
              to={"/"}
            >
              <img className='w-52 h-14 cursor-pointer' src={logo}/>
            </NavLink>
          </div>
          <Sheet>
            <SheetTrigger>
              <RxHamburgerMenu className='text-3xl'/>
            </SheetTrigger>
            <SheetContent className="flex flex-col items-start pl-12">
              <SheetHeader>
                <SheetTitle className="flex justify-center py-4">
                </SheetTitle>
                <SheetDescription>
                </SheetDescription>
              </SheetHeader>
                <ul className='flex flex-col space-y-2 cursor-pointer text-2xl tracking-tight relative'>
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
                  <NavLink
                      to={"/services"}
                      className={({isActive}) => 
                        isActive ? "text-black" : "text-gray"
                      }
                    >
                    <li 
                      className='flex items-center space-x-2 hover:text-black'
                    >
                      <div>Services</div>
                    </li>
                  </NavLink>
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
              <div className='tracking-tight text-[17px] pt-4'>
                136 Park La Brea Eve Suite 300 Atlanta, GA 30350, USA
              </div>
              <div className='flex flex-col tracking-tight text-[17px] text-gray pt-4'>
                <div>provisions@info</div>
                <div>Atlanta: (000) 111-2222</div>
                <div>Miami: (123) 456-7890</div>
              </div>
              <button 
                className='flex space-x-6 items-center bg-black pl-5 pr-3 py-2 mt-8 rounded-3xl tracking-tighter shine-effect'
                onMouseOver={() => setArrowHover(true)}
                onMouseLeave={() => setArrowHover(false)}
              >
                <div className='text-lg text-white'>Contact us</div>
                {arrowHover ? 
                  <GoArrowRight className='text-4xl bg-white rounded-full py-2 rotate-[-40deg]'/> :
                  <GoArrowRight className='text-4xl bg-white rounded-full py-2'/> 
                }
              </button>
            </SheetContent>
          </Sheet>
          
      </div>
    </nav>
  )
}

export default Navbar