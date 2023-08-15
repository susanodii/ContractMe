import { icons } from "../../assets";

const ConnectWithArtisan = () => {
  const ArtisanDeets = [
    {
      title: "Identity Status",
      status: "Verified",
    },
    {
      title: "Rating",
      status: "Top-rated",
    },
    {
      title: "Job Success",
      status: "99%",
    },
    {
      title: "Jobs Completed",
      status: "129",
    },
    {
      title: "Clients Review ",
      status: "129",
    },
    {
      title: "Contact Me",
      status: "o817****366",
    },
  ];

  return (
    <section className="border-b-2 border-lightGrey pb-6 mb-6">
      <p className="text-lg font-medium mb-4">Connect with Artisan</p>

      <div className="flex flex-row w-full justify-between">
        {ArtisanDeets.map((detail) => (
          <div className="flex">
            <span className="mr-3">
              <img
                className="border rounded-full border-blue500 w-5 h-5 p-1"
                alt=""
                src={icons.tick}
              />
            </span>

            <div>
              <p className="text-base font-inter">{detail.title}</p>
              <p className="text-base font-medium">{detail.status}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConnectWithArtisan;
