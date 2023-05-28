import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Herosection';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardSection from './components/Card';
import Carte from './components/pages/Carte';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<div><Hero /><CardSection /></div>} />
          <Route path="/carte" element={<Carte />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
