import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { FiArrowUpRight } from "react-icons/fi";

function Services() {
    const servicesOne = new URL("../assets/services-1.jpg", import.meta.url).href;
    const servicesTwo = new URL("../assets/services-2.jpg", import.meta.url).href;
    const servicesThree = new URL("../assets/services-3.jpg", import.meta.url).href;

  return (
    <div>
        <div>   
            <div>What we offer</div>
            <div>At Provisions Design Studio, we thrive on crafting bespoke 
                experiences that elevate your brand and deliver real results.
            </div>
            <button>
                Start a project<GoArrowRight />
            </button>
        </div>
        <div>
            <div>
                <img src={servicesOne}/>
                <FiArrowUpRight />
            </div>
            <div>
                <img src={servicesTwo}/>
                <FiArrowUpRight />
            </div>
            <div>
                <img src={servicesThree}/>
                <FiArrowUpRight />
            </div>
        </div>
    </div>
  )
}

export default Services