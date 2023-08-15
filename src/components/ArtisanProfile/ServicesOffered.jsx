import React from "react";

const ServicesOffered = () => {
  return (
    <section className="border-b-2 border-lightGrey pb-6 mb-6">
      <p className="text-lg font-medium mb-4">Services Offered</p>

      <ul className="text-sm  list-disc pl-6">
        <li className="mb-2 pl-2 font-inter">
          Warehousing and order fulfilment.
        </li>
        <li className="mb-2 pl-2 font-inter">Outbound shipping.</li>
        <li className="mb-2 pl-2 font-inter">
          Transport from factory to fulfilment warehouse.
        </li>
        <li className="mb-2 pl-2 font-inter">
          Local and interstate Delivery to customers.
        </li>
      </ul>
    </section>
  );
};

export default ServicesOffered;
