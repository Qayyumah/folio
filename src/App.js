import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
      <Router>
        <div className='App'>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/portfolio" element={<Portfolio/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
