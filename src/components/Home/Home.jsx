import Intro from "./subComp/Intro"
import Influencer from "./subComp/Influencer"
import Services from "./subComp/Services"
import Testimonial from "./subComp/Testimonial"

const Home = ({testimonial,influencer}) => {
  console.log({home: influencer})
  return (
    <div className="redwine__home">
        <Intro />
        <Influencer influencer={influencer} />
        <Services />
        <Testimonial testimonial={testimonial}  />
    </div>
  )
}

export default Home