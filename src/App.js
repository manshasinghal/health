import './App.css';
import React from 'react';
import Home from './components/Home';
import About from "./components/pages/About";
import Blog from "./components/pages/Blog/Blog";
import Contact from "./components/pages/Contact";
import Newsletter from './components/pages/Blog/Newsletter';
import Members from './components/pages/Blog/Members';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {

  return (
    
    <BrowserRouter>
    <div className='overflow-x-hidden overflow-y-hidden'>
    <div>
  </div>
    <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/members' element={<Members/>} />
          <Route path='/newsletter' element={<Newsletter/>} />
        </Routes>
        </div>
       </BrowserRouter>
  );
}

export default App;
