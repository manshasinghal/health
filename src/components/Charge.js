import React from 'react'
import price from './pictures/price.webp';
import {BiCheck} from 'react-icons/bi';
import {RxCross2} from 'react-icons/rx';
import { Link } from "react-router-dom";
export default function Charge() { 
   
    const line = [
        {
            id:1,
            strong:"Psychiatrist consultations",
            p:" starting at Rs.1000/- for 15 minutes",
            
        },
        {
            id:2,
            strong:"Psychiatrist consultations",
            p:" starting at Rs.1000/- for 25 minutes",
        },
        {
            id:3,
            strong:"Detailed evaluation with psychiatry consultation",
            p:"starting at Rs.2,000/-",
        },
        {
            id:4,
            strong:"Relapse prevention packages",
            p:"at Rs.3,500/-, Rs.5,000/- and Rs. 7,500/- per month",
        },
    ];
    const head =[
        {
            id:1,
            h:"₹3500 / month",
            h1:"Basic Plan",
            icon:<RxCross2/>,
            p:"Weekly Caregiver Sessions",
            icon2:<RxCross2/>,
            p2:"Daily Activities",
            button:"Contact Us"
        },
        {
            id:2,
            h:"₹5000 / month",
            h1:"Basic+Consultation",
            icon:<BiCheck/>,
            p:"Weekly Caregiver Sessions",
            icon2:<RxCross2/>,
            p2:"Daily Activities",
            button:"Contact Us"
        },
        {
            id:3,
            h:"₹7500 / month",
            h1:"Comprehensive Plan",
            icon:<BiCheck/>,
            p:"Weekly Caregiver Sessions",
            icon2:<BiCheck/>,
            p2:"Daily Activities",
            button:"Contact Us"
        }
   
    ]
    const prop = [
        {
            id:1,
            icon:<BiCheck/>,
            p:"1 psychologist Consultations"
        },
        {
            id:2,
            icon:<BiCheck/>,
            p:"1 psychologist Consultations"
        },
        {
            id:3,
            icon:<BiCheck/>,
            p:"Psychological Supervision"
        },
    ]
   
    return (
    <div className=''>
    <div className='flex align-center flex-col text-center mt-28 ls'>
     <h1 className='font-bold text-4xl'>Consulation & Subscription Packages</h1>
    
        <div className=' flex justify-center items-center '>
            <div className='bg-black h-[2px] w-[96px] mt-6 border-2 border-black'></div>
        </div>
        </div>
        <div className='py-20 pl-8 lg:pl-16'>
        <p className='mb-9 text-xl text-red-700'>We offers monthly programs at competitive rates. We also offer Consultations.</p>

        {line.map(({strong,p,id})=>(
            <ul key={id}>
            <li className='text-lg mb-4'>
                <strong className='text-stone-700'>{strong} </strong>
               {p}
            </li>
        </ul>
        ))}
        </div>
        <div className='flex flex-col lg:flex-row px-4 lg:px-12  pb-12 '>
        {head.map(({h1,h,icon,p,icon2,p2,button,id})=>(
            <div key={id} className='pt-8 lg:px-8 pb-8'>
        <div className='w-[350px]  h-[600px] bg-white shadow-lg text-center rounded-lg transition-transform duration-300 transform hover:scale-110 '>
           <div className='text-white text-2xl font-bold relative '
           style={{
        backgroundImage: `url(${price})`,
        opacity:1,

      }}>

        <h1 className='text-center py-16 whitespace-nowrap'>{h}</h1>
        </div>

        <div className=''>
        <h1 className='pt-8  text-3xl font-semibold'>{h1}</h1>
        
        <div>
      {prop.map(({id,icon,p})=>(
        <ul key={id}>
                <li className='pt-4'>
              <div className='h-[2px] mt-1 absolute ml-12'>{icon}</div>
                  <p className=''>{p}</p>
                  </li>
            </ul>
      ))}
       

          <ul>
            <li className='pt-4'>
                <div className='h-[2px] mt-1 absolute ml-12'>{icon}</div>
                <p className='text-lime-500'>{p}</p>
                <div className='h-[2px] mt-1 pt-4 absolute ml-12 '>{icon2}</div>
                <p className='pt-4 text-lime-500'>{p2}</p>
            </li>
          </ul>
          <Link to="/contact">
          <button type="submit" className='bg-orange-500 border-orange-500 border-2 rounded-2xl p-4 mt-8 text-center shadow-lg shadow-orange-600 hover:translate-y-[-2px] ease-in duration-300' >{button}</button>
          </Link>
            
        </div>
       </div>
     
     </div>
   
       </div>
       
    ))}
  
    </div>
    </div>
    
)
    }      
