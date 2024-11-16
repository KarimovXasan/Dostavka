import React from 'react'
import { logo } from '../assets/data'

const Navbar = () => {
    return (
        <header>
            <div className='container flex items-center justify-between py-4'>
                <a href="#">
                    <img src={logo} alt="Logotip" />
                </a>
                <nav className='flex items-center space-x-10'>
                    <ul className='hidden lg:flex items-center space-x-7'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Promotions</a></li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                    <div className='space-x-4'>
                        <button className="nav-btn">Daftar Sekarang</button>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar