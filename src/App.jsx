import './App.css'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Brands from './components/Brands'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import Work from './components/Work'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-[#d7ded6]'>
      <Navbar/>
      <HeroSection/>
      <Brands/>
      <Services/>
      <AboutUs/>
      <Work/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default App
