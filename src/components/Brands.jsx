import React from 'react'
import corkHaus from '../assets/cork-haus.png'
import boatworks from '../assets/boatworks.png'
import landau from '../assets/landau.png'
import lore from '../assets/lore.png'
import seaCat from '../assets/sea-cat.png'

function Brands() {
  return (
    <div>
        <img src={boatworks}/>
        <img className='bg-black' src={corkHaus}/>
        <img src={landau}/>
        <img src={lore}/>
        <img src={seaCat}/>
    </div>
  )
}

export default Brands