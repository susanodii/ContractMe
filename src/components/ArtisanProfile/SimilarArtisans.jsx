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
];

const SimilarArtisans = () => {
  return (
    <section className="flex flex-col justify-evenly">
      <h3 className="text-3xl font-semibold mb-4">Meet Similar Artisans</h3>

      <div className="mt-4 flex justify-between ">
        {similarArtisansData.map((artisan) => (
          <div className=" relative  flex flex-col gap-2 items-center border border-lightGrey rounded-2xl py-8 px-20">
            <div className="mb-4 self-center">
              <img src={artisan.image} alt="" />
              <p className="p-2 bg-yellow100 font-bold rounded-lg absolute top-8 right-5">
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
      <Button className="self-center mt-8 text-blue500 border border-solid border-blue500 font-semibold text-lg">
        View all artisans
      </Button>
    </section>
  );
};

export default SimilarArtisans;
