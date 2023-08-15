import Input from "../UI/Input";
import NaijaStates from "naija-state-local-government";
import React from "react";

const ArtisanSearchFilters = () => {
  const allStates = NaijaStates.states();

  return (
    <div className=" box-border border-[1px] border-solid border-lightGrey px-4 py-7">
      <Input
        className="text-sm border-b-[1px] border-grey pb-4 mb-4 font-inter"
        inputClass="w-full text-grey"
        type="text"
        placeholder="Search Artisans..."
      />

      <div className=" w-[21.69rem] h-[25.81rem] overflow-hidden text-base text-black200 border-b-[1px] border-grey pb-4 mb-4">
        <h3 className="text-lg font-medium text-black mb-2">
          Artisans Categories
        </h3>
        <h4 className="text-sm text-black100 font-inter mb-3">POPULAR</h4>

        <ul className="space-y-4">
          <li>
            <input className="mr-3" type="checkbox" name="filter" id="" />
            <label className="text-base font-inter">Logistics</label>
          </li>
          <li>
            <input className="mr-3" type="checkbox" name="filter" id="" />
            <label className="text-base font-inter">Technical</label>
          </li>
          <li>
            <input className="mr-3" type="checkbox" name="filter" id="" />
            <label className="text-base font-inter">Caterer</label>
          </li>
          <li>
            <input className="mr-3" type="checkbox" name="filter" id="" />
            <label className="text-base font-inter">Carpenters</label>
          </li>
          <li>
            <input className="mr-3" type="checkbox" name="filter" id="" />
            <label className="text-base font-inter">Beauty Specialists</label>
          </li>
          <li>
            <input className="mr-3" type="checkbox" name="filter" id="" />
            <label className="text-base font-inter">Hospitality</label>
          </li>
          <li>
            <input className="mr-3" type="checkbox" name="filter" id="" />
            <label className="text-base font-inter">Painters</label>
          </li>
          <li>
            <input className="mr-3" type="checkbox" name="filter" id="" />
            <label className="text-base font-inter">Others</label>
          </li>
        </ul>
      </div>

      <div className=" w-[21.88rem] h-[2.75rem] overflow-hidden">
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
      </div>
    </div>
  );
};

export default ArtisanSearchFilters;
