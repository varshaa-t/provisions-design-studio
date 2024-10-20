import React from 'react'
import logo from '../assets/logo.png'
import { RiArrowDownSLine } from "react-icons/ri";
import { GoArrowRight } from "react-icons/go";

function Navbar() {
  return (
    <div>
        <div>
            <img src={logo}/>
        </div>
        <ul>
            <li>Home</li>
            <li>Services<RiArrowDownSLine /></li>
            <li>Pricing</li>
            <li>Contact</li>
        </ul>
        <button>
            Contact us<GoArrowRight />
        </button>
    </div>
  )
}

export default Navbar