import React from 'react'
import { About as AboutComp, Layout } from '../src'

const About = () => {
    return (
        <Layout title={"About"} description={"About Page"}>
            <AboutComp />
        </Layout>
    )
}

export default About