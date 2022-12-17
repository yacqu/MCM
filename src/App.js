import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Navbar2 from './components/navbar/Navbar2';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import About from './components/pages/About';
import Donate from './components/pages/Donate';
import MasjidConstruction from './components/pages/MasjidConstruction';



const App = () => {
  return (
    <Router>
    {/* establishes the navbar */}
      <Navbar2 />
    <Routes>
      {/* establishes where each url leads to  */}
      <Route path='/' element={<Home/>}  />
      <Route path='/services' element={<Services/>}  />
      <Route path='/about' element={<About/>}  />
      <Route path='/donate' element={<Donate/>}  />
      <Route path='/masjid-construction' element={<MasjidConstruction/>}  />
    </Routes>
    </Router>

  );
}

export default App;
