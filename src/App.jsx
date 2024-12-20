import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Cards from './components/Cards'
import Footer from './components/Footer'

import LocomotiveScroll from 'locomotive-scroll';
import { div } from 'framer-motion/client'


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='bg-zinc-900'>
      <div  className="w-full h-screen bg-zinc-900 font-['satoshi'] text-white">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
    </div>
    </div>
  )
}

export default App