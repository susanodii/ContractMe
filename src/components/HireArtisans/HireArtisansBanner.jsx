import React from "react";

const HireArtisansBanner = () => {
  return (
    <section className="w-full h-[21.13rem] overflow-hiddenz bg-[url('~/src/assets/hire_artisan_bg.png')] bg-cover bg-no-repeat bg-[top] text-[3.5rem] mt-28 md:mt-6">
      <div className="flex flex-col h-full justify-center items-center">
        <p className="leading-[4.2rem] text-white font-semibold">
          Hire Artisans
        </p>
        <p className="text-lg font-inter text-white">
          Find the best artisan for your needs
        </p>
      </div>
    </section>
  );
};

export default HireArtisansBanner;
