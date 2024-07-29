import React from 'react'
import className from 'classnames';
import { useState,useEffect} from 'react';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';


export default function Mail() {
  const [isSubmit, setIsSubmit] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_os4v5hr',"template_0g5izxn", e.target, 'tAjio6JZShSzTTJ0W')
    .then((result) => {
      toast.success("Appointment booked", { position: "bottom-right"});
      setFormValues(initialValues)
      setIsSubmit(true);
    }, (error) => {
      console.log('Error sending email:', error.text);
    })

   
}

    const InputClasses = className(' w-[250px]  lg:w-[450px] h-[50px] py-4 pl-4 mb-1.5 rounded-lg border-zinc-800 border-[1px] text-black focus:placeholder-top',{});

    const currentTime = new Date().toLocaleTimeString('en-US', { hour12: false });

    const validateTime = (time) => {
      const selectedTime = new Date(`1970-01-01T${time}`);
      if (selectedTime < new Date()) {
        // If selected time is in the past, reset it to the current time
        return currentTime;
      }
      return time;
    }; 
    
    const today = new Date().toISOString().split('T')[0];
    
   const initialValues= {username:"",email:"",subject:"", message:"",time:"",date:""};
   const [formValues, setFormValues] = useState(initialValues);
    // const [formErrors, setFormErrors] = useState({});
   
  
    const handleChange = (e) => {
      const { name, value } = e.target;
    let newValue = value;

    if (name === 'time') {
      newValue = validateTime(newValue);
    }

    setFormValues({ ...formValues, [name]: newValue });
    };
  
    
  
    // const validate = (values) => {
    //   const errors = {};
    //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    //   if (!regex.test(values.email)) {
    //     errors.email = "This is not a valid email format!";
    //   }
    //  else {
    //   errors.email = "";
    //  }
    //   return errors;
    // };
  
    return (
     <>
     
      <form onSubmit={handleSubmit}>
        <div className="px-12 lg:px-32 pt-20">
          <div>
          <p className='font-semibold'>Name</p>
        <input className={InputClasses} 
              type="text"
              name="username"
        placeholder="Your Name" 
              value={formValues.username}
        onChange={handleChange} required/>
          </div>
      

          <div>
          <p className='font-semibold'>Email</p>
        <input className={InputClasses} 
        type="email" 
        name="email"
        placeholder="Email Address" 
        value={formValues.email}
        onChange={handleChange} required/>
          </div>
          
        <div>
        <p className='font-semibold'>Subject</p>
      <input className={InputClasses} 
       type="text" 
       name="subject" 
       placeholder="Subject" 
       value={formValues.subject}   
       onChange={handleChange} required/>
          </div>

        <div className='flex mb-4 mt-0'>
        <div >
        <p className='font-semibold'>Date</p>
        <input className='w-[100px] lg:w-[200px] h-[50px] mr-12 rounded-lg border-zinc-800 border-[1px] p-4 '
        
        type="date"
        id="dateInput"
        placeholder='Date'
        name="date"
        value={formValues.date}
        onChange={handleChange}
        min={today}
      required/>
          </div>
          
          <div >
          <p className='font-semibold'>Time</p>
          <input className='w-[100px] lg:w-[200px] h-[50px] rounded-lg border-zinc-800 border-[1px] p-4'
        type="time"
        id="timeInput"
        name="time"
        value={formValues.time}
        onChange={handleChange}
      />
          </div>
          
        </div>
        <div>
        <p className='font-semibold'>Message</p>
        <input className='w-[250px] lg:w-[450px] h-[200px] py-4 pl-4 mb-1.5 rounded-lg border-zinc-800 border-[1px]' 
        name="message" 
        placeholder="Your Message" 
        type="text"  
        value={formValues.message} 
        onChange={handleChange}  required/>
          </div>
        
     <div>
        <button className='bg-orange-600 border-orange-500 border-2 rounded-2xl p-4 mt-4 ml-6 lg:ml-28 shadow-lg shadow-orange-600 hover:translate-y-[-2px] ease-in duration-300 '>Book an Appointment</button>
        </div>
          </div>
      </form>
  
   
    
    
      </>

  )
}

