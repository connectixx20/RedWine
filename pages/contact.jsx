import React from 'react'
import { Layout,Contact as ContactComp } from "../src"

const Contact = () => {
    return (
        <Layout title={"Contact Us"} description={"Redwine Contact Page"}>
            <ContactComp />
        </Layout>
    )
}

export default Contact