import React from 'react'
import { GoDotFill } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { FaGoogle } from "react-icons/fa6";
import { IoStarSharp } from "react-icons/io5";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { RiGoogleFill } from "react-icons/ri";

function HeroSection() {
  const heroPic1 = new URL('../assets/heroPic1.jpg', import.meta.url).href;

  return (
    <div>
        <div>
          <div>
            <GoDotFill />
            Web Design Agency
          </div>
          <div>The best solution for your website</div>
          <div>We're passionate about creating exceptional digital experiences that elevate brands and drive results.</div>
          <button>
            Explore more<GoArrowRight />
          </button>
        </div>
        <div>
          <img className='bg-white' src={"https://provisions.studio/wp-content/uploads/2024/07/roi_img-1.svg#703"}/>
          <img src={heroPic1} alt="Hero Image" />
          <div className='w-24 h-24 bg-[#cdf163]'>
            <FaGoogle />
            <div>Google reviews</div>
            <div>
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
            </div>
          </div>
        </div>
        <div>
          <FaLinkedinIn />
          <FaInstagram />
          <RiGoogleFill />
        </div>
    </div>
  )
}

export default HeroSection