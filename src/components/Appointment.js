import React from 'react'
import Mail from './Mail';
import {BsHeadphones} from 'react-icons/bs';
import {LuClock3} from 'react-icons/lu';
export default function Appointment() {
    const service =[
        {
          id:1,
            icon : <BsHeadphones/>,
            h1:"Customer Service",
            p:"985-694-0956",
            time:""
        },
        {
          id:2,
            icon : <LuClock3/>,
            h1:"Opening hours",
            p:"Monday – Saturday",
            time:"(10:30 AM – 7:00 PM)",
        },
    ]
  return (

    <div className='flex bg-neutral-200 h-[800px]  w-[1300px] rounded-3xl ml-8 mr-8 mt-2'>
     
      <Mail/>
     
      <div className='p-16 nav'>
      <h1 className='pt-16 text-5xl font-bold mb-8 text-rose-800 '>Need more help?</h1>
      <p className=' font-medium text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>Modi qui architecto  Dolore nihil dolores sequi perspiciatis, <br></br> odit  magni nostrum corporis officiis.</p>
    
    
      {service.map(({id,icon,h1,p,time})=>(
        <div key={id} className='flex'>
        <div className='flex text-black mt-14 text-5xl'>
         {icon}
    </div>
    <div>
        <h1 className='text-4xl font-semibold ml-3 mt-16 text-rose-800'>{h1}</h1>
        <p className='text-2xl font-medium ml-3'>{p}</p>
        <p className='text-xl ml-3'>{time}</p>
        </div>
       
      </div>
      ))}
      
   </div>

    </div>
  )
}
