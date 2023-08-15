import React from "react";
import Button from "../UI/Button";

const JobDescription = () => {
  return (
    <section className="container mx-auto px-6 max-w-[80%] flex flex-col items-center justify-center mt-12">
      <p className="rounded-sm bg-blue50 text-blue500 font-medium self-start py-2 px-4 mb-8">
        Your job post{" "}
      </p>

      <h3 className="text-[32px] leading-[38.4px] font-semibold mb-2">
        Skilled heavy-duty driver needed for interstate delivery in Abuja
      </h3>
      <p className="text-lg font-medium mb-4"> LIMA Delicacies- Abuja</p>
      <p className="font-inter text-base text-dark text-center mb-8">
        We are a catering, bistro company, appetizers, main delicacies and
        dessert company that specializes in creating hyperrealistic
        architectural renderings for marketing and landscape architects. We are
        seeking a highly skilled and experienced logistics and driver artisan
        who specializes in hyperrealistic landscaping animations to join our
        team.
      </p>

      <div className="space-x-6">
        <Button className="bg-blue500 text-white font-semibold text-lg">
          Apply on ContractMe
        </Button>
      </div>
    </section>
  );
};

export default JobDescription;
