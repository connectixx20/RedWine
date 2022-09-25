import React from 'react'
import { client } from '../lib/client'
import { Layout,Service } from '../src'

const Services = ({channel}) => {
    return (
        <Layout title={"Services"} description={"Services page of Redwine Digital"}>
            <Service channel={channel} />
        </Layout>
    )
}

export async function getServerSideProps(){
    const query=`*[_type == "channel"]`
    const channel=await client.fetch(query)

    return {
        props:{
            channel
        }
    }
}

export default Services