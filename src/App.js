import React from 'react';
import './index.css';
import Navbar from './components/Navbar';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Carte from './components/pages/Carte';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carte" element={<Carte />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
