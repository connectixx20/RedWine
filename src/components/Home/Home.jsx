import ScrolltoTop from "../scroll/ScrolltoTop";
import { Services,Carousel,Influencer,Testimonial } from "./SubComponent";


const Home = () => {
  return (
    <div className="redwine__home">
      <ScrolltoTop />
      <Carousel />
      <Influencer />
      <Services />
      <Testimonial />
    </div>
  );
};

export default Home;
