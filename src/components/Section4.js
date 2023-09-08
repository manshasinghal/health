import React from 'react';
import Consult from './pictures/col1.png'
import therapy from './pictures/col2.png'
import medication from './pictures/col3.png'
import { motion } from 'framer-motion';
import className from 'classnames';

export default function Section4() {
  const finalClassName = className('w-1/3 p-10 mr-10 ml-2 lg:h-1/2 rounded-bl-2xl rounded-l-2xl rounded-br-2xl',{
    " bg-stone-500 ":therapy,
});
const classes = className('w-1/3 p-10 mr-10 h-1/2 rounded-bl-2xl rounded-l-2xl rounded-br-2xl',{
  "bg-zinc-400 ":Consult,
  
});
const classNames = className('w-1/3 p-10 mr-10 h-1/2 rounded-bl-2xl rounded-l-2xl rounded-br-2xl',{
  "bg-orange-300 ":medication,
});
  return (
    
    <div className="flex h-[350px] w-screen pt-8 pl-2  lg:flex nav">
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
    <div className='w-screen flex relative text-white text-center'>
 
      <div className={finalClassName}>
        <img className='w-16 ml-4 lg:w-24 h-24 lg:ml-28 ' src={Consult} alt="" />
        <h1 className='font-bold mt-4 mb-2 text-xl'>Consultation</h1>
        <p className='font-medium'>Vivamus pharetra neque a lacus.<br></br> Aenean blandit euismod.</p>
      </div>
      <div className={classes}  >
      <img className='w-16 ml-4 lg:w-24 h-24 lg:ml-28 ' src={therapy} alt="" />
      <h1 className='font-bold mt-4 mb-2 text-xl'>Therapy</h1>
      <p className='font-medium'>Vivamus pharetra neque a lacus.<br></br> Aenean blandit euismod.</p>
      </div>
      <div className={classNames}>
      <img className='w-24 h-24 lg:ml-24 ' src={medication} alt="" />
      <h1 className='font-bold mt-4 mb-2 text-xl'>Medication</h1>
      <p className='font-medium'>Vivamus pharetra neque a lacus.<br></br> Aenean blandit euismod.</p>
      </div>
     
      </div>
      </motion.div>
      </div>
    
  
  )
}
