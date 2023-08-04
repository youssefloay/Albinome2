import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Herosection';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Carte from './components/pages/Carte';

import Contact from './components/pages/Nouscontacter';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<div><Hero /></div>} />
          <Route path="/carte" element={<Carte />} />
          <Route path='/Nouscontacter' element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
