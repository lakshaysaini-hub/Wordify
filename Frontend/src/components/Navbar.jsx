import React from 'react'
import { MdOutlineDarkMode } from "react-icons/md";

export default function Navbar({isDarkMode,setIsDarkMode}) {
  const handledarkmode=()=>{
    setIsDarkMode(!isDarkMode);
  }
  return (
    <div className='max-w-screen-2xl mx-auto container px-6 py-3 md:px-40 shadow-lg h-16 fixed'>
      <div className='flex justify-between'>
        <h1 className='className="text-2xl cursor-pointer font-bold'> Word<span className="text-3xl text-green-500">To</span>PDF
        </h1>
        <button onClick={handledarkmode}><MdOutlineDarkMode size={35} /></button>
        {/* <h1 className='mt-1 text-2xl cursor-pointer font-bold hover:scale-125 duration-300'>Home</h1> */}
      </div>
    </div>
  )
}
