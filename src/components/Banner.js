import Banner1 from './pictures/ps-1.jpg';
import Banner2 from './pictures/ps-2.jpg';
import Banner3 from './pictures/ps-3.jpg'
import Banner4 from './pictures/ps-4.webp';
import { useState,useEffect} from 'react';
import './Banner.css'
import React from 'react'
import './Banner.css'; // Import the CSS file for the banner component

export function Banner() {
  const slides = [
    {
        url:Banner1,
        h1:"Get Mental Health Therapy",
        p:"We don’t want to devote all our brainpower to things we do every day, like driving or riding a bike. But that propensity for making things automatic can get in the way of happiness."
        },
    {
        url:Banner2,
        h1:"You Deserve Peace & Freedom",
        p:"Etiam posuere sapien ut luctus vehicula. Aenean non auctor arcu, et tempus arcu. Integer tristique volutpat posuere. Aenean ac lectus ultrices, lacinia leo a volutpat eros curabitur."
    },
    {
        url:Banner3,
        h1:"We are with you!",
        p:"Non ac montes ut est rhoncus letius. Porttitor condimentum vestibulum himenaeos proin iaculis. Luctus feugiat viverra penatibus suscipit dui orci quam vivamus quis."
    },
    {
        url: Banner4,
        h1:"You are not alone.",
        p:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    },
];

  const [currentIndex, setCurrentIndex] = useState(0);

  const gotoSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="banner-container">
<div className=' relative'>
  <div 
    className='w-screen h-[650px] object-cover absolute inset-0 bg-center bg-cover duration-500'
    style={{
        backgroundImage: `url(${slides[currentIndex].url})`,
        opacity: '0.4', 
      }}
     
      
    >
      </div>
      <div className="text-black flex flex-col  lg:py-64 lg:px-52  relative z-1 lg:flex ">
        <h1 className='ml-20 text-4xl font-extrabold nav' >{slides[currentIndex].h1}</h1>
        <p className='mt-4 text-2xl nav'>{slides[currentIndex].p}</p>
      </div>
      </div>
    </div>
  );
}
    