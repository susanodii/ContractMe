import React from "react";
import { icons } from "../../../assets/index";

const WhyUs = () => {
  return (
    <section className="container mx-auto flex flex-col justify-evenly mt-24 p-8">
      <h2 className="text-sm text-grey text-center mb-1">WHY CONTRACT ME</h2>
      <h3 className="text-center text-3xl font-semibold mb-2">
        We Prioritize your Time and Comfort
      </h3>

      <div className="mt-4 basis-[15%] flex gap-6 w-full">
        <div className="flex flex-col gap-2 border border-blue200 rounded-2xl py-8 px-4">
          <div className="w-[18%] mb-4 rounded-lg flex justify-center items-center self-center bg-blue50">
            <span className="py-4 px-4">
              <img src={icons.easy} alt="" />
            </span>
          </div>

          <div className="self-center basis-[6%] text-2xl font-dark font-semibold">
            <span>Easy-to-use platform</span>
          </div>

          <span className="text-center font-inter font-normal text-sm leading-[22.4px]">
            Our platform is designed with an intuitive sure interface, making it
            easy for users to browse , connect with artisans and other business.
          </span>
        </div>

        <div className="flex flex-col gap-2 border border-blue200 rounded-2xl py-8 px-4">
          <div className="w-[18%] mb-4 rounded-lg flex justify-center items-center self-center bg-blue50">
            <span className="py-4 px-4">
              <img src={icons.secure} alt="" />
            </span>{" "}
          </div>

          <div className="self-center basis-[6%] text-2xl font-dark font-semibold">
            <span>Reliable and Secure</span>
          </div>

          <span className="text-center font-inter font-normal text-sm leading-[22.4px]">
            The safety of every user on our platform is our priority. Every
            client and artisan is thoroughly vetted before given access.
          </span>
        </div>

        <div className="flex flex-col gap-2 border border-blue200 rounded-2xl py-8 px-4">
          <div className="w-[18%] mb-4 rounded-lg flex justify-center items-center self-center bg-blue50">
            <span className="py-4 px-4">
              <img src={icons.quality} alt="" />
            </span>
          </div>

          <div className="self-center basis-[6%] text-2xl font-dark font-semibold">
            <span>Proof of Quality</span>
          </div>

          <span className="text-center font-inter font-normal text-sm leading-[22.4px]">
            Our platform offers a diverse range of skilled artisans who will
            always deliver the best and quality client to encourage fair trade.
          </span>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
