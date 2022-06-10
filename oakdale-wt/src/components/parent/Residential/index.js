import React from "react";
import { Parent } from "../index.js";
import { ResiData } from "../data.js";
import houseTint from "../../../images/HouseTint.jpg";
import Sidebar from "../../global/sidebar";
import ContactFormResidential from "./ContactFormResidential";
import ResidentialGallery from "./ResidentialGallery";

const Residential = () => {
  const links = [
    {
      endpoint: "/contact",
      name: "Contact",
    },
    {
      endpoint: "/residential/gallery",
      name: "Gallery",
    },
  ];

  return <Parent data={ResiData} />;
};

export default Residential;
