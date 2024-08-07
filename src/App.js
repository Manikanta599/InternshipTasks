import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Rform from './components/Rform';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import LogOut from './components/LogOut';
import GetDetails from './components/GetDetails';





function App() {
  
  return(
    <div>
      
      
      <Rform />

      <BrowserRouter>
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getdetails" element={<GetDetails />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/logout" element={<LogOut/>} />
        </Routes>
      </BrowserRouter>
      
    
    </div>
  
  );
}

export default App;
