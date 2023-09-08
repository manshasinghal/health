import React from 'react'
import icon1 from './pictures/icon1.webp';
import icon2 from './pictures/icon2.webp';
import icon3 from './pictures/icon3.webp';
import icon4 from './pictures/icon4.webp';
export default function Steps() {
    const icon =[
          {
            i1:icon1,
            p:"Book a Counselling Plan",
            p2:""
          },
          {
            i1:icon2,
            p:"Choose A Counselor", 
            p2:"& Pick A Time"
           
          },
          {
            i1:icon3,
            p:"Join The Session",
            p2:""
          },
          {
            i1:icon4,
            p:"Reschedule Or Change",
            p2:"Counselor If Needed"
          },

    ]
  return (
    <div className=' bg-red-100 w-screen h-[800px] lg:h-screen mb-8  mt-[14rem] lg:mt-0 lg:mb-0 lg:mt-[-6rem]'>
        
            <div className='flex flex-col text-center lg:pt-32'>
            
                <div className='p-4 text-blue-600'>
                    <p>HOW IT WORKS</p>
                </div>
                <div className='p-2 text-4xl font-extrabold'>
                    <h1> Easy Step to Get Awesome Service</h1>
                
</div>
            <div className='p-4 font-semibold'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p></div>
            </div>
            <div className='flex  flex-col lg:flex-row pl-28 lg:pl-36 pt-8 lg:pt-12'>
            {icon.map(({i1,p,p2})=>(
                <div key={p}>
              <div className='h-[50px] w-[50px] lg:h-[100px] lg:w-[100px] mr-48 '><img src={i1} alt="" /></div>
              <div className='mt-4 font-semibold'><p>{p}</p></div>
              <div className='font-semibold'><p>{p2}</p></div>
              </div>
            ))}
         
        </div>
        </div>
   
  )
}
