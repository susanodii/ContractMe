import React from "react";
import { icons } from "../../assets";
import Button from "../UI/Button";
const ClientsReview = () => {
  const clientReviews = [
    {
      reviewer: "FarmFresh Foods",
      rating: "5.0",
      date: "February 18-20, 2023",
      reviewContent:
        "“Ac pharetra sollicitudin quisque convallis mattis. Vitae bibendum sed quis aliquet ut cursus egestas aliquam libero. Massa penatibus ipsum eu habitasse turpis lacus. Ac pharetra sollicitudin quisque convallis mattis. Vitae bibendum sed quis aliquet ut cursus egestas aliquam libero. Massa penatibus ipsum eu habitasse turpis lacus”.",
    },
    {
      reviewer: "FarmFresh Foods",
      rating: "5.0",
      date: "February 18-20, 2023",
      reviewContent:
        "“Ac pharetra sollicitudin quisque convallis mattis. Vitae bibendum sed quis aliquet ut cursus egestas aliquam libero. Massa penatibus ipsum eu habitasse turpis lacus. Ac pharetra sollicitudin quisque convallis mattis. Vitae bibendum sed quis aliquet ut cursus egestas aliquam libero. Massa penatibus ipsum eu habitasse turpis lacus”.",
    },
    {
      reviewer: "FarmFresh Foods",
      rating: "5.0",
      date: "February 18-20, 2023",
      reviewContent:
        "“Ac pharetra sollicitudin quisque convallis mattis. Vitae bibendum sed quis aliquet ut cursus egestas aliquam libero. Massa penatibus ipsum eu habitasse turpis lacus. Ac pharetra sollicitudin quisque convallis mattis. Vitae bibendum sed quis aliquet ut cursus egestas aliquam libero. Massa penatibus ipsum eu habitasse turpis lacus”.",
    },
    {
      reviewer: "FarmFresh Foods",
      rating: "5.0",
      date: "February 18-20, 2023",
      reviewContent:
        "“Ac pharetra sollicitudin quisque convallis mattis. Vitae bibendum sed quis aliquet ut cursus egestas aliquam libero. Massa penatibus ipsum eu habitasse turpis lacus. Ac pharetra sollicitudin quisque convallis mattis. Vitae bibendum sed quis aliquet ut cursus egestas aliquam libero. Massa penatibus ipsum eu habitasse turpis lacus”.",
    },
  ];
  return (
    <section className="pb-6 ">
      <p className="text-lg font-medium mb-4">Clients Review (5.0)</p>
      {clientReviews.map((review) => (
        <div className="flex flex-col items-start justify-start gap-2 mb-8">
          <p className="text-lg font-medium">FarmFresh Foods</p>
          <div className="flex flex-col justify-start gap-2">
            <div className="flex  gap-1">
              <img
                className="w-[1.34rem] h-[1.3rem] shrink-0"
                alt=""
                src={icons.star}
              />
              <img
                className="w-[1.34rem] h-[1.3rem] shrink-0"
                alt=""
                src={icons.star}
              />
              <img
                className="w-[1.34rem] h-[1.3rem] shrink-0"
                alt=""
                src={icons.star}
              />
              <img
                className="w-[1.34rem] h-[1.3rem] shrink-0"
                alt=""
                src={icons.star}
              />
              <img
                className="w-[1.34rem] h-[1.3rem] shrink-0"
                alt=""
                src={icons.star}
              />

              <span className="text-base">{review.rating}</span>
              <span className="text-base text-grey">{review.date} </span>
            </div>
            <p className="text-sm font-inter text-dark w-5/6">
              {review.reviewContent}
            </p>
          </div>
        </div>
      ))}

      <div className="text-center">
        <Button
          className="cursor-pointer bg-[transparent] border border-solid border-blue500 text-blue500 font-semibold mb-8 "
          autoFocus
        >
          View all projects
        </Button>
      </div>
    </section>
  );
};

export default ClientsReview;
