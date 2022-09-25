import { client } from "../lib/client"
import {Layout,Influencer as InfluencerComp} from "../src"

const Influencer = ({influencer}) => {
  return (
    <Layout title={"Influencer Marketing"} description={"Influencer Marketing"}>
        <InfluencerComp influencer={influencer} />
    </Layout>
  )
}

export async function getServerSideProps(){
  const query=`*[_type == "influencer"]`
  const influencer=await client.fetch(query)

  
  return {
    props:{
      influencer
    }
  }
}

export default Influencer