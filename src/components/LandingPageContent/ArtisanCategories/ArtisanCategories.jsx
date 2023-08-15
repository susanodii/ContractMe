import React from "react";
import { icons } from "../../../assets";
// import Button from "../../UI/Button";

const ArtisanCategories = () => {

  const categoriesData = [
    {
      icon: icons.logistics,
      title: "Logistic Service",
      snippet: "100+ Artisans",
    },
    {
      icon: icons.technical,
      title: "Technical Service",
      snippet: "100+ Artisans",
    },
    {
      icon: icons.interior,
      title: "Interior Service",
      snippet: "100+ Artisans",
    },
    {
      icon: icons.beauty,
      title: "Beauty Service",
      snippet: "100+ Artisans",
    },
    {
      icon: icons.construction,
      title: "Construction Service",
      snippet: "100+ Artisans",
    },
    {
      icon: icons.hospitality,
      title: "Hospitality Service",
      snippet: "100+ Artisans",
    },
  ];
  return (
    <section className="container mx-auto flex flex-col justify-evenly p-8 mt-24">
      <h2 className="text-sm text-grey text-center mb-2">
        VARIETY OF ARTISANS
      </h2>
      <h3 className="text-center text-3xl font-semibold mb-4">
        Available Categories
      </h3>

      <div className="flex justify-evenly mb-6 py-6 px-14">
        {categoriesData.slice(0, 3).map((category) => (
          <div className="flex items-center gap-3.5">
            <span className="bg-blue50 rounded-full p-4">
              <img src={category.icon} alt="" />
            </span>

            <div className="text-sm">
              <p className="font-medium text-base">{category.title}</p>
              <p className="text-black100 text-sm font-inter">
                {category.snippet}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-evenly py-6 px-14">
        {categoriesData.slice(3, 6).map((category) => (
          <div className="flex items-center gap-3.5">
            <span className="bg-blue50 rounded-full p-4">
              <img src={category.icon} alt="" />
            </span>

            <div className="text-sm">
              <p className="font-medium text-base">{category.title}</p>
              <p className="text-black100 text-sm font-inter">
                {category.snippet}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* <Button
        // onClick={clickHandler}
        className="self-center mt-8 text-blue500 border border-solid border-blue500 font-semibold text-lg"
      >
        View all categories
      </Button> */}
    </section>
  );
};

export default ArtisanCategories;
