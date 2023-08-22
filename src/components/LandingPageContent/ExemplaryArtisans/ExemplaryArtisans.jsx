import Button from "../../UI/Button";
import React from "react";
import { icons } from "../../../assets";
import person1 from "../../../assets/person_1.png";
import person2 from "../../../assets/person_2.png";
import person3 from "../../../assets/person_3.png";

const ExemplaryArtisans = () => {
  const artisansData = [
    {
      image: person1,
      name: "Adeniyi Obinna",
      job: "Logistics & Delivery Driver",
    },
    {
      image: person2,
      name: "Laura Cole",
      job: "Painter & Interior Decorator",
    },
    {
      image: person3,
      name: "Ahmadi Taiwo",
      job: "Caterer/Personal Chef",
    },
  ];
  return (
    <section className="container mx-auto flex flex-col justify-evenly mt-24 p-8">
      <h2 className="text-sm text-grey text-center mb-2">EXEMPLARY ARTISANS</h2>
      <h3 className="text-center text-3xl font-semibold mb-4">
        Discover Top Artisans
      </h3>

      <div className="mt-4 basis-[15%] flex flex-col gap-4 w-full self-center justify-evenly md:flex-row  x-gap-6 ">
        {artisansData.map((artisan) => (
          <div className=" relative flex flex-col gap-2 items-center border border-lightGrey rounded-2xl py-8 px-24">
            <div className="mb-4 self-center">
              <img src={artisan.image} alt="" />
              <p className="p-2 bg-yellow100 font-medium rounded-lg absolute top-8 right-3">
                &#8358;2500/hr
              </p>
            </div>

            <div className="self-center basis-[6%] text-2xl font-dark font-semibold">
              <p>{artisan.name}</p>
            </div>

            <p className="text-center font-inter font-normal text-sm leading-[22.4px]">
              {artisan.job}
            </p>

            <p className="flex items-center text-center font-inter font-normal space-y-1 ">
              <img className="inline-block mr-1" src={icons.star} alt="" />

              <p className="text-sm leading-[22.4px] mr-2">5.0/5 </p>
              <span className="mt-2 text-grey text-sm leading-[22.4px]">
                (120 jobs done)
              </span>
            </p>

            <p className="text-center font-inter font-normal text-sm leading-[22.4px]">
              <img className="inline-block mr-1" src={icons.map} alt="" />
              <span>Lekki, Lagos</span>
            </p>

            <a
              href=""
              className="mt-6 font-semibold text-lg text-blue500 font-inter"
            >
              Hire me
            </a>
          </div>
        ))}
      </div>
      <Button className="self-center mt-8 text-blue500 border border-solid border-blue500 font-semibold text-lg">
        View all artisans
      </Button>
    </section>
  );
};

export default ExemplaryArtisans;
