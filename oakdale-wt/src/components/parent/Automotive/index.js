import React from "react";
import { VideoBg, HeroBg } from "./../../../video/videoElements.js";
import video from "./../../../video/car-closeup.mp4";

const Automotive = () => {
  return (
    <div>
      <h1>AUTOMOTIVE PARENT</h1>
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </HeroBg>
    </div>
  );
};

export default Automotive;