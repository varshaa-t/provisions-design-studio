import React from 'react'
import { GoArrowRight } from "react-icons/go";
import logo from '../assets/logo.png'
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { RiGoogleFill } from "react-icons/ri";

function Footer() {
  return (
    <div>
        <div>
            <div>
                <div>We're ready!</div>
                <div>Let’s collaborate</div>
            </div>
            <div>
                <div>
                    Let's collaborate to turn your vision into reality and create a 
                    digital presence that sets you apart from the competition.
                </div>
                <button>
                    Start a project<GoArrowRight />
                </button>
            </div>
        </div>
        <div>
            <div>   
                <div>
                    25 SE 2nd Ave. Ste 550
                    Miami, FL 33131
                </div>
                <div>
                    <div>info@provisions.studio</div>
                    <div>Atlanta: (470) 365-1514</div>
                    <div>Miami: (786) 723-6079</div>
                </div>
            </div>
            <div>
                <img src={logo}/>
            </div>
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>
        </div>
        <div>
            <div>
                Copyright © 2024 Provision. All Rights Reserved. | Privacy Policy
            </div>
            <div>
                <FaLinkedinIn />
                <FaInstagram />
                <RiGoogleFill />
            </div>
        </div>
    </div>
  )
}

export default Footer