import HeroSection from "../components/Header/HeroSection";
import Process from "../components/LandingPageContent/Process";
import ClientReviews from "../components/LandingPageContent/ClientReviews/ClientReviews";
import WhyUs from "../components/LandingPageContent/WhyUs/WhyUs";
import Brands from "../components/LandingPageContent/Brands/Brands";
import ArtisanCategories from "../components/LandingPageContent/ArtisanCategories/ArtisanCategories";
import GetCertified from "../components/LandingPageContent/GetCertified/GetCertified";
import ExemplaryArtisans from "../components/LandingPageContent/ExemplaryArtisans/ExemplaryArtisans";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <Brands />
      <WhyUs />
      <Process />
      <ArtisanCategories />
      <ExemplaryArtisans />
      <ClientReviews />
      <GetCertified />
    </main>
  );
};
export default HomePage;
