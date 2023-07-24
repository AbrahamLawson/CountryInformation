import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home />}></Route>
        <Route path="/About" element= {<About />}></Route>
        {/* path="*" fonctionne si jalmais l'url ne correspond à rien de declarer au desus */}
        <Route path="*" element= {<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;