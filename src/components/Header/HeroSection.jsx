import Button from "../UI/Button";
import NaijaStates from "naija-state-local-government";
import SearchIcon from '@mui/icons-material/Search';
import React from "react";
import frame1 from "../../assets/Frame_348.png";
import frame2 from "../../assets/Frame_349.png";
import frame3 from "../../assets/Frame_350.png";
import frame4 from "../../assets/Frame_351.png";
import frame5 from "../../assets/Frame_352.png";
import frame6 from "../../assets/Frame_353.png";
import { icons } from "../../assets";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  let navigate = useNavigate();



  const allStates = NaijaStates.states();
  
  return (
    <div className="relative container w-full mx-auto mt-32 mb-20 ">
      <div className="hidden md:block absolute top-8">
        <img className="mb-4 mr-32" src={frame1} alt="" />
        <img className="mb-4 ml-8" src={frame2} alt="" />
        <img className="mb-4 ml-16" src={frame3} alt="" />
      </div>

      <div className="hidden md:block">
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

      <div className="containerw-full mx-auto px-6 max-w-[80%] flex flex-col gap-6 items-center justify-center  ">
        <h3 className="text-[56px] leading-[67.2px] font-semibold">
          We help Connect <span className=" text-blue500">Artisans</span> with{" "}
          <span className=" text-blue500">SMEs </span>
          and <span className=" text-blue500">Working-Class Individuals</span>
        </h3>
        <p className="font-inter text-base text-dark text-center w-full md:w-3/4  ">
          ContractMe is the ultimate platform that connects talented artisans to
          get hired for contract jobs by the perfect set of clients. With the
          safety measures and streamlined hiring process put in place,
          ContractMe remains the best in the game.
        </p>

        <div className="flex flex-row gap-6 flex-wrap justify-center w-full">
          <Button className="text-blue500 border border-solid border-blue500 font-semibold text-lg ">
            Join ContractMe
          </Button>
          <Button className="bg-blue500 text-white font-semibold text-lg ">
            Post a Job
          </Button>
        </div>

        <div className=" w-[300px]  h-[80px] border rounded-4xl  rounded-full border-lightGrey lg:w-[700px]   ">
         <div className="flex justify-between items-center   w-full h-full " >
         <input
            className="focus:outline-none focus:border-none w-full   placeholder:uppercase  px-2 py-1  placeholder:text-blue-300 placeholder:italic lg:placeholder:uppercase  lg:px-5 lg:py-2 rounded-full outline-none"
            type="text"
            placeholder="What do you need help with?"
          />

         
          <button
            className="bg-blue500 text-white  rounded-4xl text-lg h-full border-none w-[100px] rounded-r-full"
          >
             <img className="inline-block text-white " src={icons.search} alt="" />
          </button>

         </div>
         

       
        </div>
        
      
      </div>
      
      
    
    </div>
  );
};

export default HeroSection;
