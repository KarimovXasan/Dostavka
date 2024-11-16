import React from 'react'
import { logo } from '../assets/data'

const Footer = () => {
    return (
        <footer>
            <div className="container py-28">
                <ul className='grid grid-cols-1 md:grid-cols-3 text-center md:text-start lg:grid-cols-4 gap-5 px-6 bg-[#F9FFF6] py-5 rounded-xl space-y-4 md:space-y-0
                '>
                    <li>
                        <img src={logo} alt="Logotip" />
                        <p>Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan,
                            Kecamatan Setiabudi, Kota Jakarta Selatan,
                            Daerah Khusus Ibukota Jakarta 12950
                        </p>
                    </li>
                    <li>
                        <h3>Categories</h3>
                        <p>Cupcake</p>
                        <p>Pizza</p>
                        <p>Kebab</p>
                        <p>Salmon</p>
                        <p>Dougnut</p>
                    </li>
                    <li>
                        <h3>About Us</h3>
                        <p>About Us</p>
                        <p>FAQ</p>
                        <p>Report Problem</p>
                    </li>
                    <li>
                        <h3>Newsletter</h3>
                        <p>Get now free 50% discount for alll products on your first order</p>
                        <div className='space-x-3 space-y-2 md:space-x-0 md:space-y-0'>
                            <button>
                                <a href="#"><i class="bi bi-envelope"></i>elemesid@gmail.com</a>
                            </button>
                            <button>
                                <a href="#"><i class="bi bi-telephone"></i>0888 1111 2222 </a>
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer