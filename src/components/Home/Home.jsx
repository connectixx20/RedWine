import ScrolltoTop from "../scroll/ScrolltoTop";
import { Services,Carousel,Influencer } from "./SubComponent";


const Home = () => {
  return (
    <div className="redwine__home">
      <ScrolltoTop />
      <Carousel />
      <Services />
      <Influencer />
    </div>
  );
};

export default Home;
