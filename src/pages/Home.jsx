import Brands from "../component/Brands/Brands";
import CallBack from "../component/CallBack/CallBack";
import IndividualProduction from "../component/IndividualProduction/IndividualProduction";
import MainSlider from "../component/MainSlider/MainSlider";
import PortfolioSlider from "../component/PortfolioSlider/PortfolioSlider";
import Principles from "../component/Principles/Principles";
import Scheme from "../component/Scheme/Scheme";
import Statistics from "../component/Statistics/Statistics";
import VideoProcess from "../component/VideoProcess/VideoProcess";

const Home = () => {
  return (
    <>
      <MainSlider />
      <Statistics />
      <Principles />
      <IndividualProduction />
      <VideoProcess />
      <CallBack />
      <Scheme />
      <PortfolioSlider />
      <Brands />
    </>
  );
};

export default Home;
