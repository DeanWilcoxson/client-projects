import React from "react";
import Landing from "./components/global/landing-page";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Automotive from './components/parent/Automotive';
import Residential from './components/parent/Residential';
import Commercial from './components/parent/Commercial';
import Error from './components/global/error'

const App = () => {
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/automotive' element={<Automotive />} />
          <Route path='/commercial' element={<Commercial />} />
          <Route path='/residential' element={<Residential />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
