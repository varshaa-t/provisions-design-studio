import React from 'react'
import { GoDotFill } from "react-icons/go";

function AboutUs() {
    const aboutUs = new URL("../assets/aboutUs.jpg", import.meta.url);

  return (
    <div>
        <img src={aboutUs}/>
        <div>
            <div>
                <GoDotFill />
                About Us
            </div>
            <div>
                Welcome to our Atlanta and Miami-based design agency, where we specialize
                in empowering businesses with the essential online tools to foster growth 
                and attain financial independence. Rooted in a progressive and contemporary 
                approach, we understand the pivotal role of a robust online presence in today's 
                digital landscape. Whether you're a startup aiming to carve out your niche or a 
                seasoned enterprise seeking to revitalize your digital footprint, we possess the
                expertise and insight to transform your vision into reality.
            </div>
        </div>
    </div>
  )
}

export default AboutUs