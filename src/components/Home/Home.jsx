import ScrolltoTop from "../scroll/ScrolltoTop";
import { Services,Carousel } from "./SubComponent";

const Home = () => {
  return (
    <div className="redwine__home">
      <ScrolltoTop />
      <Carousel />
      <Services />
    </div>
  );
};

export default Home;
