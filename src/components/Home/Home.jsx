import Intro from "./subComp/Intro"
import Influencer from "./subComp/Influencer"
import Services from "./subComp/Services"
import Testimonial from "./subComp/Testimonial"
import Company from "./subComp/Company"

const Home = ({testimonial,influencer,companies}) => {
  return (
    <div className="redwine__home">
        <Intro />
        <Company companies={companies} />
        <Influencer influencer={influencer} />
        <Services />
        <Testimonial testimonial={testimonial}  />
    </div>
  )
}

export default Home