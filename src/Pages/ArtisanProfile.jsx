import ArtisanInfo from "../components/ArtisanProfile/ArtisanInfo";
import ConnectWithArtisan from "../components/ArtisanProfile/ConnectWithArtisan";
import ServicesOffered from "../components/ArtisanProfile/ServicesOffered";
import CompletedJobs from "../components/ArtisanProfile/CompletedJobs";
import ClientsReview from "../components/ArtisanProfile/ClientsReview";
import SimilarArtisans from "../components/ArtisanProfile/SimilarArtisans";

const ArtisanProfile = () => {
  return (
    <section className="w-[80%] mx-auto">
      <ArtisanInfo />
      <ConnectWithArtisan />
      <ServicesOffered />
      <CompletedJobs />
      <ClientsReview />
      <SimilarArtisans />
    </section>
  );
};

export default ArtisanProfile;
