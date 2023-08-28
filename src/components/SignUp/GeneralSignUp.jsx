import Button from "../UI/Button";
import { icons } from "../../assets";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const GeneralSignUp = () => {
  const [checkedPersona, setCheckedPersona] = useState("client");

  
      
    
  
  

  let navigate = useNavigate();
  const routeChange = () => {
    let destinationPath = "";
    if (checkedPersona === "client") {
      destinationPath = "/business-owner-sign-up";
    }
    if (checkedPersona === "artisan") {
      destinationPath = "";
    }
    navigate(destinationPath);
  };

  const radioChangeHandler = (e) => {
    setCheckedPersona(e.target.id);
  };
  return (
    <div className="container mx-auto mt-20 text-2xl text-black-200 ">
      <h2 className="font-bodoni font-extrabold text-blue500 text-3xl">
        ContractMe
      </h2>
      <div className="rounded-2xl  border-[1px] border-lightGrey p-8 mt-14 md:w-[64.44rem] h-[28.94rem] ">
        <h3 className="text-center mb-6 font-inter font-extrabold text-3xl">
          Join as a client or artisan
        </h3>

        <div className="flex items-center flex-col justify-center gap-6 mb-8 md:flex-row">
          <div className="rounded-2xl flex flex-col  py-4 px-4 items-center justify-center border-[1px] border-lightGrey">
            <div className="flex flex-col py-2 px-3 items-start justify-center relative gap-[1rem]">
              <div className="relative rounded-full p-2 bg-blue50 w-12 h-12 shrink-0 ">
                <img
                  className="h-full w-full max-w-full max-h-full"
                  alt=""
                  src={icons.client}
                />
              </div>
              <p className="relative leading-[1.95rem] font-medium w-[16.19rem] ">
                I am a client, hiring for a job.
              </p>
              <input
                onChange={radioChangeHandler}
                className="absolute top-0 right-0 w-6 h-6"
                type="radio"
                name="persona"
                id="client"
              />
            </div>
          </div>

          <div
            className=" rounded-2xl flex flex-col py-4 px-4 items-center justify-center border-[1px] 
          border-lightGrey"
          >
            <div className="flex flex-col py-2 px-3 items-start justify-center relative gap-[1rem]">
              <div className="relative rounded-full p-2 bg-blue50 w-12 h-12 shrink-0">
                <img
                  className="h-full w-fullmax-w-full max-h-full "
                  alt=""
                  src={icons.artisan}
                />
              </div>
              <p className="relative leading-[1.95rem] font-medium flex items-center w-[16.19rem] z-[1]">
                I am an artisan, looking a gig.
              </p>
              <input
                onChange={radioChangeHandler}
                className="absolute top-0 right-0 w-6 h-6"
                type="radio"
                name="persona"
                id="artisan"
              />
            </div>
          </div>
        </div>

        <div className="text-center space-y-2">
          {checkedPersona === "client" ? (
            <Button
              onClick={routeChange}
              className="rounded-lg bg-blue500 leading-[1.38rem] self-center text-lg text-white font-semibold"
            >
              Apply as a client
            </Button>
          ) : (
            <Button
              onClick={routeChange}
              className="rounded-lg bg-blue500 leading-[1.38rem] self-center text-lg text-white font-semibold "
            >
              Apply as an artisan
            </Button>
          )}
          <div className="text-sm mb-8">
            <span>Already have an account? </span>
            <a className="text-base font-medium text-blue500">Sign in</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralSignUp;
