import ScrolltoTop from "../scroll/ScrolltoTop";
import Carousel from "./SubComponent/Carousel";

const Home = () => {
  return (
    <div className="redwine__home">
      <ScrolltoTop />
      <Carousel />
    </div>
  );
};

export default Home;
