import React from 'react'
import { heroIMg } from '../assets/data'

const Hero = () => {
  return (
    <section className='py-8'>
        <div className="container">
            <div className='grid grid-cols-1 md:text-start lg:grid-cols-2 gap-10'>
                <div className='py-10'>
                    <h1 className='text-green'>Good Food Us Good Mood</h1>
                    <p>I would think that conserving our natural resources should <br /> be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</p>
                    <br />
                    <div className='space-x-6'>
                        <button className='nav-btn shadow-hero'>Daftar Sekarang</button>
                        <button className='nav-btn !bg-slate-400 text-black'>About Us</button>
                    </div>
                </div>
                <div>
                    <img src={heroIMg} alt="Hero Image" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero