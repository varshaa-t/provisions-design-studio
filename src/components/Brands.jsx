import React from 'react'
import ribcraft from '../assets/ribcraft.png'
import boatworks from '../assets/boatworks.png'
import landau from '../assets/landau.png'
import suzuki from '../assets/suzuki.png'

function Brands() {
  return (
    <div className='flex bg-black mt-10 -mx-12 overflow-auto scroll-container'>
        <img className='w-[50vw] md:w-[33vw] xl:w-[25vw] border-zinc-700 border-r-[1px] h-auto hover:bg-white hover:bg-opacity-10 hover:duration-200' src={boatworks} alt='boatworks'/>
        <img className='w-[50vw] md:w-[33vw] xl:w-[25vw] border-zinc-700 border-r-[1px] h-auto hover:bg-white hover:bg-opacity-10 hover:duration-200' src={ribcraft} alt='ribcraft'/>
        <img className='sm:hidden md:block md:w-[33vw] xl:w-[25vw] border-zinc-700 border-r-[1px] h-auto hover:bg-white hover:bg-opacity-10 hover:duration-200' src={landau} alt='landau'/>
        <img className='sm:hidden xl:block xl:w-[25vw] border-zinc-700 border-r-[1px] h-auto hover:bg-white hover:bg-opacity-10 hover:duration-200' src={suzuki} alt='suzuki'/>
    </div>
  )
}

export default Brands