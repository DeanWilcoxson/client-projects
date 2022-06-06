import React from "react";
import Landing from "./components/global/landing-page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Automotive from "./components/parent/Automotive";
import Residential from "./components/parent/Residential";
import Commercial from "./components/parent/Commercial";
import Footer from "./components/global/footer";

const App = () => {
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/automotive" element={<Automotive />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/residential" element={<Residential />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
