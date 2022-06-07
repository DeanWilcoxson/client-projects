import React from "react";
import Landing from "./components/global/landing-page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Automotive from "./components/parent/Automotive";
import Residential from "./components/parent/Residential";
import Commercial from "./components/parent/Commercial";
import Footer from "./components/global/footer";
import ResidentialGallery from "./components/parent/Residential/ResidentialGallery";
import ResidentialContact from "./components/parent/Residential/ResidentialContact";
import { TopBar } from "./components/global/topbar";

const App = () => {
  return (
    <div>
      <TopBar />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/automotive" element={<Automotive />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/residential" element={<Residential />} />

          {/* RESIDENTIAL ROUTES -- unable to get browserrouter to work on Resi Home, will revisit later */}
          <Route path="/residential/gallery" element={<ResidentialGallery />} />
          <Route path="/residential/contact" element={<ResidentialContact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
