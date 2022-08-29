import Intro from "./subComp/Intro"
import Influencer from "./subComp/Influencer"
import Services from "./subComp/Services"
import Testimonial from "./subComp/Testimonial"

const Home = () => {
  return (
    <div className="redwine__home">
        <Intro />
        <Influencer />
        <Services />
        <Testimonial />
    </div>
  )
}

export default Home