import React from 'react'
import { receipet } from '../assets/data'

const Receipet = () => {
  return (
    <section>
      <div className="container py-5">
        <div>
          <h2>Browser Our Category <br />
            <span className='text-green'>Receipt</span></h2>
        </div>
        <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 py-9 mySwiper'>
          {receipet.map((i, index) => {
            return (
              <li key={index} className='items-center bg-[#F0FEEB] py-7 text-center'>
                <img className='mx-auto max-w-12 h-14' src={i.img} alt={i.title} />
                <h3>{i.title}</h3>
                <p>{i.description}</p>
              </li>
            )
          })}
        </ul>
        <div className='space-x-4 text-center md:text-end'>
          <button className='prev-left-btn'><i class="bi bi-chevron-left bg-white rounded-full p-1"></i><span className='text-white'>prev</span></button>
          <button className='prev-left-btn'><span className='text-white'>right</span><i class="bi bi-chevron-right bg-white rounded-full p-1"></i></button>
        </div>
      </div>
    </section>
  )
}

export default Receipet