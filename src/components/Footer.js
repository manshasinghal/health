import React from 'react'
import {BsFacebook} from 'react-icons/bs';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';

export default function Footer() {
    const logo = [
        {
            key:1,
            l1 : <BsFacebook/>,
        },
        {
            key:2,
            l1 : <AiOutlineInstagram/>,
        },
        {
            key:3,
            l1 : <AiOutlineTwitter/>,
        },
        {
            key:4,
            l1 : <FaLinkedinIn/>,
        },
    ]
  return (
    <div className='bg-gray-600 w-screen h-screen '>
      <div className='flex justify-center p-24'>
       
     {logo.map(({l1,key})=>(
        <div key={key} className='text-white mr-8 text-2xl cursor-pointer transition-transform transform hover:scale-125'>{l1}</div>
     ))}
</div>
<div className='flex border-2 text-gray-600 w-[300px] lg:w-[900px] items-center ml-14 lg:ml-56 '></div>
<div><p className='text-center text-white pt-16'>© 2018 Nicepage. All rights reserved</p></div>
<div className='text-white text-center pt-[19rem] pb-12 underline underline-offset-4'><a href="https://www.google.com/">Terms and Conditions applied</a></div>
    </div>
  )
}
