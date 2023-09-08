import React from 'react'
import {BiVideo} from 'react-icons/bi';
import {AiFillAudio} from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs';
import home from './pictures/home.jpg';
import { motion } from 'framer-motion';
import './Home.css'


export default function Sessions() {
  const sign = [
    {
      id:1,
      icon: <BiVideo/>,
      p:"Video Sessions",
    },
    {
      id:2,
      icon: <AiFillAudio/>,
      p:" Audio Sessions",
    },
    
    {
      id:3,
      icon:   <BsPerson/>,
      p:"Video Sessions",
    },
  ]
  return (
    <div className=' bg-gray-50 '>
    
   
      <div className='flex flex-col lg:flex-row pt-8'>
      
     <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7}}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
        <div className='mr-16  whitespace-nowrap'>
        <div className='ml-4 lg:ml-8'>
      <h1 className='text-base lg:text-2xl font-bold '>Counselling Therapy Sessions With Licensed & <br></br> Verified Experts</h1>
      <p className=' lg:flex font-medium  mt-4 nav'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestias <br></br>nulla pariatur culpa temporibus, quae iste corrupti vitae reiciendis deleniti impedit <br></br>dicta  voluptatibus commodi a, rem animi veritatis velit?</p>
      <p className='lg:flex  font-medium  mt-4 nav'> Quos soluta placeat neque facilis dolorum repellat officiis tempore qui dolores  <br></br>  obcaecati eligendi ea perferendis in doloribus rem atque alias, error enim.</p>
      </div>
      <div className='flex flex-col lg:flex-row ml-24 lg:ml-0 mt-2'>
      {sign.map(({id,icon,p}) =>(
    
    <div key={id} className=' flex mt-8 ml-8 '>
      <div className="">
      <div className='text-2xl  text-orange-400'>{icon}</div>
      <p className=' text-xl'>{p}</p>
      </div>
   
</div>
      ))}
      </div>
      <div className='text-base font-medium mt-8 lg:mt-4 leading-9 ml-8 mb-8 '>
      <p>24/7 Support</p>
      <p>100% Private & Secure Platform</p>
      <p>English And All Regional Indian Languages</p>
      </div>
      </div>
      </motion.div>
    
      <div className=' '>
      <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7}}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
        <div className='mr-0'>
      <img className=" rounded-lg  h-[400px] w-[100%] mb-8 lg:mb-0"src={home} alt="" />
      </div>
      </motion.div>
      </div>
      
      </div>
      </div>
      
  )
}
