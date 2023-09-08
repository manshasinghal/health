import {MdWifiCalling1} from 'react-icons/md';
import logo from './pictures/logo-2.png';
import { Link } from "react-router-dom";
import { list } from "./List";
import './Navbar.css'
 import {X,Menu} from 'lucide-react'
import { useState } from 'react';
export default function Navbar() {
 
  const[isOpen,setIsOpen] = useState(false);
  const toggleNavbar = () =>{
    setIsOpen(!isOpen)
  };

 
  return(
    <>
  <div className= "flex justify-between top-0 bg-black text-white w-full max-w-15xl flex-wrap items-center  p-[4em] font-bold uppercase "  >
  <div className=' h-20 w-20'>
  <img  src={logo} alt=""  />
 </div>

  <div className=' lg:flex'>
    <ul className='flex mt-9 justify-center nav'>
    {
      list.map(({index,path,name})=>(
        <li className="ml-12 font-serif font-bold hover:text-purple-600 class" key={index}>
          <Link to={path} >{name}</Link>
      </li>
      ))}
</ul>
    </div>
    <div className='flex nav '>
    <MdWifiCalling1 className='mt-9 h-8 w-8 '/>
    <div className='ml-4 mt-6 font-serif font-bold'>
    <h1>Call Us</h1>
    <p>+124-284-1243</p>
    </div>
    </div>
    <div className='md:hidden justify-end'>
       <button className='mt-8' onClick={toggleNavbar}>{isOpen ? <X/> :<Menu/>}</button> 
    </div>
  
   
  {isOpen &&
  (
    <div className='flex basis-full flex-col items-center flex-wrap'>
    <ul className='flex flex-col '>
    {
      list.map(({index,path,name})=>(
        <li className="ml-12 font-serif font-bold hover:text-purple-600 class" key={index}>
          <Link to={path} >{name}</Link>
      </li>
      ))}
</ul>
    </div>
  )}
  </div>
</>
)  
}
