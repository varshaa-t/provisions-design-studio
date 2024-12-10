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

  const animationProps = {
    initial: {
      opacity: 0,
      y: 100
    }, 
    whileInView: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    },
    viewport: {
      once: true
    }
  }

  return (
    <BrowserRouter>
      <div className='bg-[#c6cec5] px-12 pt-2 selection:bg-[#a2bd52] selection:text-white'>
        <Navbar/>
        <HeroSection/>
        <Brands/>
        <Services animationProps={animationProps}/>
        <AboutUs animationProps={animationProps}/>
        <Work animationProps={animationProps}/>
        <FAQ animationProps={animationProps}/>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
