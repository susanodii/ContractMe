import React from "react";
import { icons } from "../../assets";
import job from "../../assets/job_done.png";
import Button from "../UI/Button";

const CompletedJobs = () => {
  const jobDoneDetails = [
    {
      title: "Interstate Factory to retail delivery",
      description:
        " Truck delivery of perishable goods from FarmFresh Factory(Lagos state) to retailers... ",
    },
    {
      title: "Interstate Factory to retail delivery",
      description:
        " Truck delivery of perishable goods from FarmFresh Factory(Lagos state) to retailers... ",
    },
    {
      title: "Interstate Factory to retail delivery",
      description:
        " Truck delivery of perishable goods from FarmFresh Factory(Lagos state) to retailers... ",
    },
    {
      title: "Interstate Factory to retail delivery",
      description:
        " Truck delivery of perishable goods from FarmFresh Factory(Lagos state) to retailers... ",
    },
  ];

  return (
    <section className="border-b-2 border-lightGrey pb-6 mb-6">
      <div>
        <p className="text-lg font-medium mb-4">
          <span>Completed Jobs</span>
          <span className="text-grey">(129)</span>
        </p>
      </div>

      {jobDoneDetails.map((detail) => (
        <div className="flex items-center gap-[3.88rem] mb-4">
          <div className="flex items-center gap-4">
            <img
              className="w-[7.88rem] h-[7.63rem] object-cover"
              alt=""
              src={job}
            />
            <div className="flex flex-col items-start gap-2">
              <p className="text-lg font-medium ">{detail.title}</p>
              <p className="text-base font-inter">{detail.description}</p>
              <div className="flex items-center gap-2 text-sm">
                <img
                  className="w-[1.5rem] h-[1.5rem] "
                  alt=""
                  src={icons.map}
                />
                <span className="text-sm font-inter">Lagos - Ibadan</span>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden flex py-4 px-[1.25rem] items-center justify-center text-dark border-[2px] border-solid border-dark">
            <p className="text-lg font-semibold">VIEW PROJECT</p>
          </div>
        </div>
      ))}

      <div className="text-center">
        <Button
          className="cursor-pointer bg-[transparent] border border-solid border-blue500 text-blue500 font-semibold self-center  mb-8 "
          autoFocus
        >
          View all projects
        </Button>
      </div>
    </section>
  );
};

export default CompletedJobs;
