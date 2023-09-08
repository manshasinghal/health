import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { motion } from 'framer-motion';
import AccordionPages from './AccordionPages';
import { Link } from "react-router-dom";
import pic from './pics/psychiatry.jpg'; 
import pic2 from './pics/doctor.jpg'
import pic3 from './pics/download.jpg'
import './About.css'
export default function About() {
  const help =[
    {
      h:"Depression"
    },
    {
      h:"Anxiety & Stress"
    },
    {
      h:"Grief & loss"
    },
    {
      h:"OCD"
    },
    {
      h:"Bipolar Disorder"
    },
    {
      h:"Trauma"
    },
    {
      h:"Teenage Issue"
    },
    {
      h:"Psychosis"
    },
   
  ]
  return (
    
    <div className='bg-gray-50'>
    
    <div className='mb-0'>
   <Navbar/>
   </div>
   <div className='flex flex-col lg:flex-row justify-between pl-4 lg:p-12'>
   <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -90 },
            visible: { opacity: 1, x: 0 },
          }}
        >
           <div className='w-[350px] lg:w-[500px]'>
      <h1 className='text-xl lg:text-3xl font-bold lg:whitespace-nowrap mr-20 mr-12 mt-12 '>Why Our Mental Health Consultants Are <br></br> The Best  Choice</h1>
      <p className='mt-4 font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque distinctio tempora quisquam ipsa maxime, alias dicta numquam ut tenetur expedita error est ex, ea iste dolorem illum repellat voluptate autem.</p>
      <p className='mt-4 font-semibold'>In risus turpis magna maecenas iaculis magnis urna. Consequat proin tortor tortor gravida amet. Elementum amet fringilla sed varius ut pretium. Sed tellus in ante sit amet auctor ac vel. Mauris quis eget in elementum ullamcorper.</p>
      </div>
        </motion.div>
   
        
        
      <div>

      <img src={pic2} alt="" className='move h-[400px] w-[600px] mt-12 lg:mt-0 mr-4 rounded-3xl'/>
      </div>
    
    </div>
   <div className=''>
 <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, y: 90 },
            visible: { opacity: 1, y: 0 },
          }}
        >
       
<div>
  <div className='text-4xl ml-8 lg:ml-36 font-bold mt-9 text-cyan-900 '>
  <h1 className='mb-20 pt-2'>
  We are Specialized Help For Your Mental Health
  </h1>
  </div>
  <div className='grid grid-cols-2 lg:grid-cols-4 ml-12 lg:ml-28'>
     {help.map(({h})=>(
     
        <div className='bg-pink-950 flex rounded-lg text-white font-medium w-[100px] lg:w-[150px] h-[50px] mb-9 text-center items-center justify-center'>{h}</div>
        
     ))}
  </div>
  <div>
  <Link to="/">
  <button className='bg-orange-600 border-orange-500 border-2 rounded-2xl p-4 mt-2 ml-[105px] lg:ml-[630px] shadow-lg shadow-orange-600 hover:translate-y-[-2px] ease-in duration-300 '>Learn More</button>
 </Link>
 </div>
</div>
</motion.div>
<div className='flex flex-col lg:flex-row justify-between pl-4 p-12 '>
<div>
      <img src={pic} alt="" className='h-[400px] ml-4 lg:ml-0 w-[600px] lg:w-[600px] mt-8 mr-12 rounded-3xl '/>
      </div>
    <div className='max-w-[500px] mr-12 mt-8'>
      <h1 className='text-lg lg:text-3xl font-bold whitespace-nowrap mr-8 '>We help people living with a variety of <br></br>mental health conditions</h1>
      <p className='mt-4 font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque distinctio tempora quisquam ipsa maxime, alias dicta numquam ut tenetur expedita error est ex, ea iste dolorem illum repellat voluptate autem.</p>
      <p className='mt-4 font-semibold'>In risus turpis magna maecenas iaculis magnis urna. Consequat proin tortor tortor gravida amet. Elementum amet fringilla sed varius ut pretium. Sed tellus in ante sit amet auctor ac vel. Mauris quis eget in elementum ullamcorper. Fames hac vitae non diam sit eu sagittis ac. Egestas volutpat aliquet adipiscing fringilla arcu sed neque viverra. Enim sollicitudin turpis non tincidunt congue. Faucibus sit porttitor ipsum lectus. Habitasse faucibus tincidunt sed mauris ultrices. At massa ultricies purus adipiscing.</p>
      </div>
      
    </div>
    <div
  className='mt-8 lg:mt-0 w-[1800px] h-[600px] w-full relative '
  style={{
    backgroundImage: `url(${pic3})`,
    backgroundSize: 'cover'
  }}
></div>
 <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, y: 90 },
            visible: { opacity: 1, y: 0 },
          }}
        >
       
<div className='flex justify-end items-end mt-[-28rem] z-20 relative mr-8 '  >
  <div className='bg-white p-8 h-full flex flex-col w-[400px] h-[200px] border-t-8 border-r-8 border-cyan-300 rounded-3xl'>
      <h1 className='text-4xl font-bold mb-4 font-serif text-cyan-700'>Release your mental health issues and leave a stress-free life!</h1>
      <p className='text-lg mb-4 font-semibold'>Lorem ipsum dolor sit amet consectetur. Viverra in tellus neque tincidunt duis vestibulum nulla sed massa. Habitasse mi malesuada dui sed rutrum ut. Facilisi nulla ultrices sapien vulputate egestas ac faucibus viverra.</p>
      <p className='text-lg font-semibold'>Ipsum proin massa at massa nibh pellentesque gravida egestas tempor. Est rhoncus fusce enim porttitor id gravida rhoncus egestas. Dictum non urna mollis elementum sagittis. Lacus odio elementum non commodo amet justo urna pharetra.</p>
    </div>
  </div>
</motion.div>

 <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, y: 90 },
            visible: { opacity: 1, y: 0 },
          }}
        >
             <div>
   <div>
      <h1 className='flex justify-center text-3xl font-extrabold text-blue-700 mt-24 ml-4 lg:ml-0'>Frequently Asked Questions</h1>
      
      </div>
      <div className='bg-gray-50'>
<AccordionPages/>
</div>
   </div>  
        </motion.div>

        </div>

  <div className='mt-48'><Footer/></div>


</div>

  )
}
