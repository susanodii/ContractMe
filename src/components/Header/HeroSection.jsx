import React from "react";
import Button from "../UI/Button";
import frame1 from "../../assets/Frame_348.png";
import frame2 from "../../assets/Frame_349.png";
import frame3 from "../../assets/Frame_350.png";
import frame4 from "../../assets/Frame_351.png";
import frame5 from "../../assets/Frame_352.png";
import frame6 from "../../assets/Frame_353.png";
import NaijaStates from "naija-state-local-government";
import { icons } from "../../assets";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  let navigate = useNavigate();

  const searchHandler = () => {
    let destinationPath = "/hire-artisans";
    navigate(destinationPath);
  };

  const allStates = NaijaStates.states();
  return (
    <div className="relative container mx-auto mt-32 mb-20">
      <div className="absolute top-8">
        <img className="mb-4 mr-32" src={frame1} alt="" />
        <img className="mb-4 ml-8" src={frame2} alt="" />
        <img className="mb-4 ml-16" src={frame3} alt="" />
      </div>

      <div>
        <img className=" absolute top-8 left-[89%]" src={frame4} alt="" />
        <img
          className=" absolute top-32 left-[86%] mr-32"
          src={frame6}
          alt=""
        />
        <img
          className=" absolute top-56 left-[80%] mr-1/4 "
          src={frame5}
          alt=""
        />
      </div>

      <div className="container mx-auto px-6 max-w-[80%] flex flex-col gap-6 items-center justify-center  ">
        <h3 className="text-[56px] leading-[67.2px] font-semibold">
          We help Connect <span className=" text-blue500">Artisans</span> with{" "}
          <span className=" text-blue500">SMEs </span>
          and <span className=" text-blue500">Working-Class Individuals</span>
        </h3>
        <p className="font-inter text-base text-dark text-center w-3/4">
          ContractMe is the ultimate platform that connects talented artisans to
          get hired for contract jobs by the perfect set of clients. With the
          safety measures and streamlined hiring process put in place,
          ContractMe remains the best in the game.
        </p>

        <div className="space-x-6">
          <Button className="text-blue500 border border-solid border-blue500 font-semibold text-lg ">
            Join ContractMe
          </Button>
          <Button className="bg-blue500 text-white font-semibold text-lg">
            Post a Job
          </Button>
        </div>

        <div className="relative border rounded-2xl border-lightGrey px-6 py-3 ">
          <img className="inline-block mr-4" src={icons.search} alt="" />
          <input
            className="focus:outline-none focus:border-none"
            type="text"
            placeholder="Try “Logistics” or “Jane Doe”"
          />

          <select
            className="bg-white border-none mr-4 text-lg"
            name="expertise"
            id="expertise"
          >
            <option value=""> Expertise level </option>
          </select>
          <select
            className="bg-white border-none mr-4 text-lg"
            name="state"
            id="state"
          >
            <option value=""> State</option>
            {allStates.map((state) => (
              <option key={state}> {state} </option>
            ))}
          </select>
          <Button
            onClick={searchHandler}
            className="bg-blue500 text-white font-semibold text-lg"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
