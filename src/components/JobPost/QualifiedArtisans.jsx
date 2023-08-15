import React from "react";
import { icons } from "../../assets";
import person1 from "../../assets/person_1.png";
import Button from "../UI/Button";

const similarArtisansData = [
  {
    image: person1,
    name: "Adeniyi Obinna",
    rate: "2500/hr",
    job: "Logistics & Delivery Driver",
  },
  {
    image: person1,
    name: "Adeniyi Obinna",
    rate: "2500/hr",
    job: "Logistics & Delivery Driver",
  },
  {
    image: person1,
    name: "Adeniyi Obinna",
    rate: "2500/hr",
    job: "Logistics & Delivery Driver",
  },
  {
    image: person1,
    name: "Adeniyi Obinna",
    rate: "2500/hr",
    job: "Logistics & Delivery Driver",
  },
  {
    image: person1,
    name: "Adeniyi Obinna",
    rate: "2500/hr",
    job: "Logistics & Delivery Driver",
  },
  {
    image: person1,
    name: "Adeniyi Obinna",
    rate: "2500/hr",
    job: "Logistics & Delivery Driver",
  },
];

const QualifiedArtisans = () => {
  return (
    <section className="container mx-auto flex flex-col justify-evenly mt-28 p-8">
      <h3 className="text-2xl font-medium mb-4 text-center">
        Artisans with relevant requirements
      </h3>

      <div className="mt-4 flex flex-wrap gap-6">
        {similarArtisansData.map((artisan) => (
          <div className=" relative basis-[30%] flex flex-col items-center border border-lightGrey rounded-2xl py-8 px-18">
            <div className="mb-4 self-center">
              <img src={artisan.image} alt="" />
              <p className="p-2 bg-yellow100 font-medium rounded-lg absolute top-8 right-5">
                &#8358;{artisan.rate}
              </p>
            </div>

            <div className="text-center w-full text-2xl font-dark font-semibold">
              <p>{artisan.name}</p>
            </div>

            <p className="text-center font-inter font-normal text-sm ">
              {artisan.job}
            </p>

            <p className="flex items-center text-center font-inter font-normal space-y-1 ">
              <img className="inline-block mr-1" src={icons.star} alt="" />

              <p className="text-sm  mr-2">5.0/5 </p>
              <span className="mt-2 text-grey text-sm ">(120 jobs done)</span>
            </p>

            <p className="text-center font-inter font-normal text-sm ">
              <img className="inline-block mr-1" src={icons.map} alt="" />
              <span>Lekki, Lagos</span>
            </p>

            <a
              href=""
              className="mt-6 font-semibold text-lg text-blue500 font-inter"
            >
              Send Invite
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QualifiedArtisans;
