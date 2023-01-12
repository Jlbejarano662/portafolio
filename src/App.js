import React from 'react';
//import react router dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import pages
import Home from './pages/Home';
//import components 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// impor styles
import './App.css'

const App = () => {
  return <div className=''>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </Router>
  </div>;
};

export default App;