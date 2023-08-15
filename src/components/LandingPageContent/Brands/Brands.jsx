import React from "react";
import shopify from "../../../assets/shopify_logo.png";
import google from "../../../assets/google_logo.png";
import honeywell from "../../../assets/honeywell_logo.png";
import beazer from "../../../assets/beazer_logo.png";
import flexport from "../../../assets/flexport_logo.png";

const Brands = () => {
  return (
    <section className="bg-blue50 flex flex-col justify-evenly p-8">
      <h2 className="text-lg text-center mb-4 font-medium">
        Trusted by over 200+ SMEs nationwide
      </h2>

      <div className="flex justify-between">
        <img src={beazer} alt="" />
        <img src={shopify} alt="" />
        <img src={google} alt="" />
        <img src={honeywell} alt="" />
        <img src={flexport} alt="" />
      </div>
    </section>
  );
};

export default Brands;
