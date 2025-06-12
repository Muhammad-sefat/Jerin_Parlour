import { ScrollRestoration } from "react-router";
import HomeBanner from "../../components/homeComponents/HomeBanner";
import HomeService from "../../components/homeComponents/HomeService";
import CurtomerBanner from "../../components/homeComponents/CurtomerBanner";

const Home = () => {
  return (
    <>
      <ScrollRestoration />
      <HomeBanner />
      <HomeService />
      <CurtomerBanner />
    </>
  );
};

export default Home;
