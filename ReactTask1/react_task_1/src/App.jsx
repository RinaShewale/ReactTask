import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Mainpage from './components/Mainpage';
import About from './components/Pages/About';


function App() {
  return (
    <main>
        <Nav />
   


    <Routes>
      <Route path="/" element={  <Mainpage />} />
    <Route path="/About" element={<About />} />

    </Routes>
    </main>
  );
}

export default App;
