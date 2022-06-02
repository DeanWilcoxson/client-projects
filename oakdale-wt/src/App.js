import React from "react";
import { VideoBg, HeroBg } from "./video/videoElements.js";
import { Routes, Route, Navigate } from "react-router-dom";
import video from "./video/car-closeup.mp4";

const App = () => {
  return (
    <div>
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </HeroBg>
      <Routes>
        <Route></Route>
      </Routes>
    </div>
  );
};

export default App;
