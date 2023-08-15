const Process = () => {
  return (
    <section className="container mx-auto bg-blue50 flex flex-col justify-evenly p-8 mt-24">
      <h2 className="text-sm text-grey text-center mb-2">PROCESS</h2>
      <h3 className="text-center text-3xl font-semibold mb-3">
        Here is How It Works
      </h3>

      <div className="flex w-[15%] basis-[4%] gap-7  text-lg ">
        <span
          className="border-b-2 border-blue500
        "
        >
          Clients
        </span>
        <span>Artisans</span>
      </div>

      <div className="mt-4 basis-[15%] flex gap-4 w-full">
        <div className="flex flex-col gap-2">
          <div className="w-[15%] mb-4 rounded-lg flex justify-center items-center bg-white">
            <span className="text-blue500 py-2 px-4 text-3xl font-semibold">
              1
            </span>
          </div>

          <div className=" flex basis-[6%] items-center text-2xl font-dark font-semibold">
            <span>Create &amp; Verify Account</span>
          </div>

          <span className=" font-inter font-normal text-sm leading-[22.4px]">
            Start your journey by creating and verifying your account on our
            platform, this is to ensure we deliver the best services.
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <div className="w-[15%] mb-4 rounded-lg flex justify-center items-center bg-white">
            <span className="text-blue500 py-2 px-4 text-3xl font-semibold">
              2
            </span>
          </div>

          <div className=" flex basis-[6%] items-center text-2xl font-dark font-semibold">
            <span>Post a job &amp; Select Artisans</span>
          </div>

          <span className="font-inter font-normal text-sm leading-[22.4px]">
            Next your post job requirements. Browse available artisans in the
            category, review proposals and send out job invites to the perfect
            matches
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <div className="w-[15%] mb-4 rounded-lg flex justify-center items-center bg-white">
            <span className="text-blue500 py-2 px-4 text-3xl  font-semibold">
              3
            </span>
          </div>

          <div className=" flex basis-[6%] items-center text-2xl font-dark font-semibold">
            <span>Make Payment Deposit</span>
          </div>

          <span className=" font-inter font-normal text-sm leading-[22.4px]">
            After your desired artisan(s) confirm their availability, the next
            important step is to make an deposit of the fees that cover the
            artisan(s) service(s).
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <div className="w-[15%] mb-4 rounded-lg flex justify-center items-center bg-white">
            <span className="text-blue500 py-2 px-4 text-3xl font-semibold">
              4
            </span>
          </div>

          <div className=" flex basis-[6%] items-center text-2xl font-dark font-semibold">
            <span>Enjoy your Service</span>
          </div>

          <span className=" font-inter font-normal text-sm leading-[22.4px]">
            {" "}
            Congratulations!! after you have successfully completed the three
            previous steps, it's time to relax, and enjoy your service.
          </span>
        </div>
      </div>
    </section>
  );
};
export default Process;
