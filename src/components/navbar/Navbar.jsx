import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-[3.5rem] py-[1.2rem] bg-[#011023] text-white fixed w-full z-[999]'>
        <Link to="/">Logo</Link>
        <ul className='flex items-center justify-between gap-[3.5rem]'>
            <li>
                <Link to="/services">Services</Link>
            </li>
            <li>
                <Link to="/solutions">Solutions</Link>
            </li>
            <li>
                <Link to="/about">Company</Link>
            </li>
            <li>
                <Link to="/about">Blog</Link>
            </li>
        </ul>
        <button className='bg-[#2998FF] text-white py-2 px-6 rounded-[9px]'>Book a call</button>
    </div>
  )
}

export default Navbar