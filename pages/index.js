import React from "react";
import { client } from "../lib/client";
import { Layout,Home } from "../src";

const Index = ({testimonial,influencer}) => {
  
  
  return (
    <Layout title={"Home"} description={"Redwine Home"}>
      <Home testimonial={testimonial} influencer={influencer} />
    </Layout>
  );
};

export async function getServerSideProps(){
  const query=`*[_type == "testimonial"]`
  const testimonial= await client.fetch(query)
  const query2=`*[_type == "influencer"]`
  const influencer= await client.fetch(query2)

  return {
    props:{testimonial,influencer}
  }
}

export default Index;
