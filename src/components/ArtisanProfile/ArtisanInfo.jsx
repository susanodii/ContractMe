import React from "react";
import { icons } from "../../assets";
import person1 from "../../assets/person_1.png";
import Button from "../UI/Button";

const ArtisanInfo = () => {
  return (
    <section className=" items-start flex gap-[8.38rem] border-b-2 border-lightGrey pb-6 mb-6">
      <div className=" flex items-center gap-[1.38rem]">
        <img
          className="rounded-lg w-44 h-[11.14rem] object-cover"
          alt="artisan"
          src={person1}
        />

        <div className="flex flex-col gap-2">
          <p className="text-2xl font-medium">Adeniyi Obinna</p>
          <p className="font-inter text-lg leading-[1.69rem]">
            Logistics & Delivery Driver
          </p>
          <div className="flex items-center gap-2">
            <img
              className="w-[1.5rem] h-[1.5rem] shrink-0"
              alt=""
              src={icons.map}
            />
            <p className="font-inter text-sm ">
              No 18, Crystal Close, Admiralty Lekki, Lagos
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-[1rem]">
        <p className="text-2xl leading-[1.95rem] font-medium">&#8358;2500/hr</p>
        <Button className="bg-blue500 text-white font-semibold text-lg">
          Hire Me
        </Button>
        <Button className="text-blue500 border border-solid border-blue500 font-semibold text-lg ">
          Invite
        </Button>
        <img
          className="border border-grey p-3 rounded w-12 h-12 shrink-0 overflow-hidden"
          alt=""
          src={icons.love}
        />
      </div>
    </section>
  );
};

export default ArtisanInfo;
