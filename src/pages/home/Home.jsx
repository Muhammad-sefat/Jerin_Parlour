import { ScrollRestoration } from "react-router";
import HomeBanner from "../../components/homeComponents/HomeBanner";
import HomeService from "../../components/homeComponents/HomeService";
import CurtomerBanner from "../../components/homeComponents/CurtomerBanner";
import Testimonials from "../../components/homeComponents/Testimonials";
import ContactForm from "../../components/homeComponents/ContactForm";

const Home = () => {
  return (
    <>
      <ScrollRestoration />
      <HomeBanner />
      <HomeService />
      <CurtomerBanner />
      <Testimonials />
      <ContactForm />
    </>
  );
};

export default Home;
