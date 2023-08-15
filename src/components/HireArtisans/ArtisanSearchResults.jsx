import Button from "../UI/Button";
import React from "react";
import { icons } from "../../assets";
import person1 from "../../assets/person_1.png";

const mockResults = [
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

const ArtisanSearchResults = () => {
  return (
    <section className="flex flex-col justify-evenly ">
      <div className="flex items-center justify-start gap-[30.5rem]  text-black ">
        <p className="text-2xl font-medium">200+ Results</p>
        <div className="flex items-center justify-start gap-[0.5rem] text-base text-black-200">
          <span className=" text-base font-inter">Sort</span>

          <div className="rounded-lg box-border py-2 px-4 text-black border-[1px] border-lightGrey">
            <select
              className="bg-white border-none mr-4 text-lg font-medium"
              name="sortBy"
              id="sortBy"
            >
              <option value=""> Top-rated</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-6">
        {mockResults.map((artisan) => (
          <div className="relative flex flex-col gap-2 items-center border border-lightGrey rounded-2xl py-8 px-28">
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

              <p className="text-sm mr-2">5.0/5 </p>
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

export default ArtisanSearchResults;
