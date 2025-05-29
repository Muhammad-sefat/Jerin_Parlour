import { ScrollRestoration } from "react-router";
import HomeBanner from "../../components/homeComponents/HomeBanner";

const Home = () => {
  return (
    <>
      <ScrollRestoration />
      <HomeBanner />
    </>
  );
};

export default Home;
