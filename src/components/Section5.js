import React from 'react'
import psych1 from './pictures/img1.jpg'
import psych2 from './pictures/img2.webp'
import psych3 from './pictures/img3.webp'
import psych4 from './pictures/img4.webp'
import bg from './pictures/bg.jpg'
import { motion } from 'framer-motion';

export default function Section5() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const head = [
    {   
         h1:"",
         p:"Senectus class pellentesque non platea eros. Lacinia ornare eros senectus vel mus. Neque orci consectetuer sollicitudin per amet sodales euismod habitasse adipiscing ad facilisis."
         
    },
  {   
    h1:"Consult Best Psychologists.",
    p:"Top Therapists, Counsellors, Mental Health Experts in India. See the List of Top Psychologists in India. Best Online Psychologist Consultation in India."
    
},
{   
  h1:"Certified & Experienced",
  p:"Get the best online Therapy & Counseling Experience from the Verified Professionals. Top Therapists for your mental health."
  
},

]
  return(
    <div className='flex ' style={{
        backgroundImage: `url(${bg})`,
       
      }}>
    <div className='flex flex-col lg:flex nav'>
    <motion.div
      
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
    <div className='flex  flex-col lg:flex-row '>
    <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
<img className=' lg:w-[1000px] lg:h-[300px] ml-8 mt-4 rounded-lg object-cover' src={psych1} alt="" />
</motion.div>
       <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
        <img className='w-[500px] h-[15rem] ml-8 lg:ml-16 mt-20 rounded-lg lg:w-[800px] lg:h-[300px] 'src={psych2} alt="" />
       </motion.div>
        
        </div>
        </motion.div>
        <div className='flex  flex-col lg:flex-row'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
        <img className='w-[200px] h-[15rem]  lg:w-[600px] lg:h-[300px] ml-8 mt-8 rounded-lg'src={psych3} alt="" />
        </motion.div>
         
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}>
        <img className='w-[500px] h-[15rem]  ml-8 lg:ml-16 mt-12 rounded-lg lg:w-[500px] lg:h-[300px] ' src={psych4} alt="" />
        </motion.div>
        </div>
      
    </div>
     <div className='ml-[-48px] lg:ml-16 p-32'>
    <p className='text-black font-medium text-s mb-8'>MEET OUT PSYCHOLOGIST</p>
    <h1 className='text-black font-extrabold text-4xl mb-8'>Expert and Professional in Psychotherapy.</h1>

   {head.map(({h1,p})=>(
    <div key={h1}>
    <h1 className='text-black font-extrabold text-2xl mt-8 mb-4'>{h1}</h1>
    <p className='text-slate-600 font-medium text-lg'>{p}</p>
    </div>
   ))}
    <button className='bg-orange-500 border-orange-500 border-2 rounded-full p-4 mt-4 ml-8 lg:ml-36 shadow-lg shadow-orange-600 hover:translate-y-[-2px] ease-in duration-300' onClick={handleClick}>
    Learn More
    </button>
    </div> 
  
    </div>
  )
}
