import React from 'react'
import logo from '../assets/apple-48.png'


const Navbar = () => {
  return (
    <div className="flex h-[43px] bg-[#161617] w-full">
        <img src={logo} alt="hello" className="h-[18px] ml-[443px] mt-3 cursor-pointer"/>
    </div>
  )
}

export default Navbar