import React from 'react';
import './index.css';
import Navbar from './components/Navbar';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Herosection';
import CardSection from './components/Card';
import ContactInfo from './components/Contactinfo';
import Pizzas from './components/pages/Carte';

function App() {
  return (
    <>
      
      <Router>
      <Navbar />
      <Routes>
        
        <Route path="/Carte" element={<Pizzas/>} />
        
      </Routes>
    </Router>

         
      
       <Hero/>
       <CardSection/>
       <ContactInfo/>
    
  
    </>
  );
}

export default App;
