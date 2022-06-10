import React from "react";
import { Parent } from "../index.js";
import { AutoData } from "./../data";
// import { VideoBg, HeroBg } from "./../../../video/videoElements.js";
// import video from "./../../../video/car-closeup.mp4";

const Automotive = () => {
  console.log(AutoData);

  return <Parent data={AutoData} />;
};

export default Automotive;
// <HeroBg>
//   <VideoBg autoPlay loop muted src={video} type="video/mp4" />
// </HeroBg>
