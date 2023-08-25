import ArtisanSearchFilters from "../components/HireArtisans/ArtisanSearchFilters";
import ArtisanSearchResults from "../components/HireArtisans/ArtisanSearchResults";
import HireArtisansBanner from "../components/HireArtisans/HireArtisansBanner";

const HireArtisans = () => {
  // const navigate = useNavigate();

  // const onFindWorkTextClick = useCallback(() => {
  //   // Please sync "Find work" to the project
  // }, []);

  // // const onARTISANCARDSContainerClick = useCallback(() => {
  //   navigate("/artisan-profile");
  // }, [navigate]);

  // // const onARTISANCARDSContainer1Click = useCallback(() => {
  //   navigate("/artisan-profile");
  // }, [navigate]);

  // // const onARTISANCARDSContainer2Click = useCallback(() => {
  //   navigate("/artisan-profile");
  // }, [navigate]);

  // const onARTISANCARDSContainer3Click = useCallback(() => {
  //   navigate("/artisan-profile");
  // }, [navigate]);

  // // const onARTISANCARDSContainer4Click = useCallback(() => {
  //   navigate("/artisan-profile");
  // }, [navigate]);

  // const onARTISANCARDSContainer5Click = useCallback(() => {
  //   navigate("/artisan-profile");
  // }, [navigate]);

  // const onLOGOContainerClick = useCallback(() => {
  // Please sync "LANDING" to the project
  // }, []);

  return (
    <div className=" ">
      <HireArtisansBanner />
      <div className="flex container mx-auto gap-7 mt-10">
        <div className="sm:hidden md:block ">

      <ArtisanSearchFilters />
        </div>
        <ArtisanSearchResults />
      </div>
    </div>
  );
};

export default HireArtisans;
