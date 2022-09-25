import React from 'react'
import { About as AboutComp, Layout } from '../src'
import { client } from '../lib/client'

const About = ({team}) => {
    
    return (
        <Layout title={"About"} description={"About Page"}>
            <AboutComp team={team} />
        </Layout>
    )
}

export async function getServerSideProps(){
    const query=`*[_type == "team"]`
    const team=await client.fetch(query)

    return {
        props:{team}
    }
}

export default About