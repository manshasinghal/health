import { Banner } from './Banner';
import Navbar from './Navbar';
import React from 'react';
import Sessions from './Sessions';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Charge from './Charge';
import Steps from './Steps';
import Footer from './Footer'
import Appointment from './Appointment';

export default function Home() {
  return (
    <div className='overflow-x-hidden overflow-y-hidden'>
    <Navbar />
    <Banner />
    <Sessions/>
        <Section3 />
        <Section4 />
        <Steps />
        <Section5 />
        <Charge />
        <Appointment />
        <Footer />
      </div>
   
  )
}
