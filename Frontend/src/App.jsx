import React from 'react'
import Navbar from './components/navbar.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx' 
import { useState } from 'react'; 
export default function App() {
  const [isDarkMode, setIsDarkMode] =useState(true);
  return (
    <div className={isDarkMode ?"bg-slate-900 text-white": "bg-white text-black"}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}></Navbar>
      <Home ></Home>
      <Footer></Footer>
    </div>
  )
}
