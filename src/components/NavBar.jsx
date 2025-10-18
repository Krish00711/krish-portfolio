import React from 'react'
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  return (
      <div className="p-4 w-full flex justify-between items-center">
        <h1 className="text-green-500 font-bold text-2xl">Portfolio</h1>
        <button>
          <FaBars className=" text-white text-2xl" /> 
        </button>
      </div>
  )
}

export default NavBar