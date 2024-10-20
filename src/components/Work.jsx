import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { FiArrowUpRight } from "react-icons/fi";

function Work() {
    const workOne = new URL("../assets/work-1.jpg", import.meta.url).href;
    const workTwo = new URL("../assets/work-2.jpg", import.meta.url).href;
    const workThree = new URL("../assets/work-3.jpg", import.meta.url).href;

  return (
    <div>
        <div>
            <div>Our work</div>
            <div>We embrace challenges and take pride in crafting unique 
                and visually stunning designs that make a lasting impact.
            </div>
            <button>
                Explore more<GoArrowRight />
            </button>
        </div>
        <div>
            <div>
                <img src={workOne}/>
                <div>
                    <div>Exery - Men’s Backpacks Store</div>
                    <FiArrowUpRight />
                </div>
            </div>
            <div>
                <img src={workTwo}/>
                <div>
                    <div>Ccorp - Luxury Jet Company</div>
                    <FiArrowUpRight />
                </div>
            </div>
            <div>
                <img src={workThree}/>
                <div>
                    <div>Foster - Real Estate Agency</div>
                    <FiArrowUpRight />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work