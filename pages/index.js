import React from "react";
import { client } from "../lib/client";
import { Layout,Home } from "../src";

const Index = ({testimonial,influencer,companies}) => {
  console.log({influencer})
  
  return (
    <Layout title={"Home"} description={"Redwine Home"}>
      <Home testimonial={testimonial} influencer={influencer} companies={companies} />
    </Layout>
  );
};

export async function getServerSideProps(){
  const query=`*[_type == "testimonial"]`
  const testimonial= await client.fetch(query)
  const query2=`*[_type == "influencer" && platform=='All']`
  const influencer= await client.fetch(query2)
  const query3=`*[_type== "company"]`
  const companies=await client.fetch(query3)

  return {
    props:{testimonial,influencer,companies}
  }
}

export default Index;
