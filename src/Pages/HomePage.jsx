import ArtisanCategories from "../components/LandingPageContent/ArtisanCategories/ArtisanCategories";
import ClientReviews from "../components/LandingPageContent/ClientReviews/ClientReviews";
import ExemplaryArtisans from "../components/LandingPageContent/ExemplaryArtisans/ExemplaryArtisans";
import HeroSection from "../components/Header/HeroSection";
import Process from "../components/LandingPageContent/Process";
import WhyUs from "../components/LandingPageContent/WhyUs/WhyUs";

// import GetCertified from "../components/LandingPageContent/GetCertified/GetCertified";




// import Brands from "../components/LandingPageContent/Brands/Brands";




const HomePage = () => {
  return (
    <main>
      <HeroSection />
      {/* <Brands /> */}
      <WhyUs />
      <Process />
      <ArtisanCategories />
      <ExemplaryArtisans />
      <ClientReviews />
      {/* <GetCertified /> */}
    </main>
  );
};
export default HomePage;
