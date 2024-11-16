import React from 'react'
import { pizzaCards } from '../assets/data'

const Traing = () => {
    return (
        <section>
            <div className="container py-5">
                <h2>
                    Browser Our Trending <br />
                    <span className='text-green'>Receipt</span>
                </h2>
                <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-3'>
                    {pizzaCards.map((e, index) => {
                        return (
                            <li key={index} className='bg-[#E6F3F5] py-5 px-3 shadow-card-shadow rounded-lg space-y-2'>
                                <img src={e.img} alt={e.title} />
                                <h3>{e.description}</h3>
                                <h4>{e.title}</h4>
                            </li>
                        )
                    })}
                </ul>
                <div className='text-center'>
                    <button className="bg-green text-white px-5 py-2 rounded-full">ALL Receipt</button>
                </div>
            </div>
        </section>
    )
}

export default Traing