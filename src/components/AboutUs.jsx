import React from 'react'
import { GoDotFill } from "react-icons/go";

function AboutUs() {
    const aboutUs = new URL("../assets/aboutUs.jpg", import.meta.url);

  return (
    <div className='flex justify-between space-x-40 items-center bg-white -mx-12 px-12 pb-48'>
        <img 
            src={aboutUs}
            className='w-[1600px] h-[400px] rounded-[2rem] object-cover'
        />
        <div className='flex flex-col space-y-10'>
            <div className='flex items-center justify-start border border-slate-500 w-32 rounded-3xl px-4 py-2'>
                <GoDotFill />
                About Us
            </div>
            <div className='w-[56vw] text-2xl tracking-tighter'>
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