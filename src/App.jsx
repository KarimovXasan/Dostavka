import React from 'react'
// components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Receipet from './components/Receipet'
import Traing from './components/Traing';

// import Swiper Style
import 'swiper/css';

// import boostrap icons
import 'bootstrap-icons/font/bootstrap-icons.css'
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Receipet />
        <Traing />
      </main>
      <Footer />
    </>
  )
}

export default App