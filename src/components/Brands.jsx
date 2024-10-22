import React from 'react'
import corkHaus from '../assets/cork-haus.png'
import boatworks from '../assets/boatworks.png'
import landau from '../assets/landau.png'
import lore from '../assets/lore.png'

function Brands() {
  return (
    <div className='flex bg-black mt-10 -mx-12'>
        <img className='border-r-[1px] border-gray-700 w-full h-auto flex-grow hover:opacity-60' src={boatworks}/>
        <img className='border-r-[1px] border-gray-700 w-full h-auto flex-grow hover:opacity-60' src={corkHaus}/>
        <img className='border-r-[1px] border-gray-700 w-full h-auto flex-grow hover:opacity-60' src={landau}/>
        <img className='w-full h-auto flex-grow hover:opacity-60' src={lore}/>
    </div>
  )
}

export default Brands