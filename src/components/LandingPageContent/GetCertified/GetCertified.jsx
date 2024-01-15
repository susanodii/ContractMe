import React from "react";
import Button from "../../UI/Button";
import training from "../../../assets/training.png";

const GetCertified = () => {
  return (
    <section className="container mx-auto flex justify-evenly mt-24 p-8">
      <div className="flex flex-col basis-2/4 self-center">
        <h3 className="text-3xl font-semibold mb-2">
          Do you want to become a ContractMe certified Artisan?
        </h3>
        <p className="text-sm text-grey mb-6 w-4/6">
          Signup for our intensive certified skill training for artisans, by
          clicking the button below.
        </p>
        <Button className="w-3/6 text-blue500 border border-solid border-blue500 font-semibold text-lg ">
          Sign up for training
        </Button
        
        >
      </div>

      <div>
        <img src={training} alt="" />
      </div>
    </section>
  );
};

export default GetCertified;
