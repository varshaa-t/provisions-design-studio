import './App.css'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Brands from './components/Brands'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import Work from './components/Work'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
        <div className='bg-[#c6cec5] px-12 py-2'>
          <Navbar/>
          <HeroSection/>
          <Brands/>
          <Services/>
          <AboutUs/>
          <Work/>
          <FAQ/>
          <Footer/>
        </div>
    </BrowserRouter>
  )
}

export default App
