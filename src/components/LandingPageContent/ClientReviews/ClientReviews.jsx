import customerAvi from "../../../assets/customer_avi.png";

const ClientReviews = () => {
  return (
    <section className="container mx-auto bg-blue50 flex flex-col justify-evenly p-8 mt-24">
      <h2 className="text-sm text-grey text-center mb-2">WE LOVE FEEDBACKS</h2>
      <h3 className="text-center text-3xl font-semibold mb-4">
        What Our Clients are Saying
      </h3>

      <div className="mt-4 basis-[15%] flex gap-4 w-full">
        <div className="flex flex-col gap-2 bg-white py-[17px] px-4 rounded-2xl">
          <span className=" font-inter font-normal text-sm leading-[22.4px]">
            All the best services that i have ever enjoyed was rendered by the
            talented artisans on ContractMe. They are all very polite, honest
            and diligent.
          </span>

          <div className="flex items-center gap-3.5">
            <span>
              <img src={customerAvi} alt="" className="object-contain" />
            </span>

            <div className="text-sm">
              <p className="font-medium text-base">Adams Mike</p>
              <p className="text-black100 text-sm font-inter">
                CEO Jael Cleaning Service
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 bg-white pt-[17px] px-4 rounded-lg">
          <span className=" font-inter font-normal text-sm leading-[22.4px]">
            All the best services that i have ever enjoyed was rendered by the
            talented artisans on ContractMe. They are all very polite, honest
            and diligent.
          </span>

          <div className="flex items-center gap-3.5">
            <span>
              <img src={customerAvi} alt="" className="object-contain" />
            </span>

            <div className="text-sm">
              <p className="font-medium text-base">Adams Mike</p>
              <p className="text-black100 text-sm font-inter">
                CEO Jael Cleaning Service
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 bg-white pt-[17px] px-4 rounded-lg">
          <span className=" font-inter font-normal text-sm leading-[22.4px]">
            All the best services that i have ever enjoyed was rendered by the
            talented artisans on ContractMe. They are all very polite, honest
            and diligent.
          </span>
          <div className="flex items-center gap-3.5">
            <span>
              <img src={customerAvi} alt="" className="object-contain" />
            </span>

            <div className="text-sm">
              <p className="font-medium text-base">Adams Mike</p>
              <p className="text-black100 text-sm font-inter">
                CEO Jael Cleaning Service
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ClientReviews;
