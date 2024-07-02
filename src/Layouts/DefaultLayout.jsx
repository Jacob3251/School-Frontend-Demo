import { useContext } from "react";
import AcedemicSections from "../components/AcedemicSections/AcedemicSections";
// import Branches from "../components/Branches/Branches";
import CtaSection from "../components/CTA/CtaSection";
import Facilities from "../components/Facilities/Facilities";
import GallerySection from "../components/GallerySection/GallerySection";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel";
import HeroCounter from "../components/HeroCounter/HeroCounter";
import NewsEvents from "../components/NewsEvents/NewsEvents";
import Footer from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Navbar/Navbar";
import SiteNotification from "../components/SiteNotification/SiteNotification";
import Testimonials from "../components/Testimonials/Testimonials";
// import { NavigationContext } from "../contexts/MainContext";

const DefaultLayout = () => {
  // const { setShowVideo } = useContext(NavigationContext);
  return (
    <div className="w-full bg-rootColor">
      <SiteNotification />
      <Navbar />
      {/* carousel below */}
      <HeroCarousel></HeroCarousel>
      <HeroCounter></HeroCounter>
      <AcedemicSections></AcedemicSections>
      <Facilities></Facilities>
      <CtaSection></CtaSection>
      <NewsEvents></NewsEvents>
      <GallerySection></GallerySection>
      {/* <Branches></Branches> */}
      <Testimonials></Testimonials>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
