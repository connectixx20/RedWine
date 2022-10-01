import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { ImageUrl } from '../../../lib/client'

const About = ({ team }) => {
    const { winWidth } = useSelector((state) => state.util)
    const teamItem = [
        {
            id: 0,
            name: "Sanjay Jaiswar",
            pos: "Founder & CEO",
            img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        },
        {
            id: 1,
            name: "Kate Winslet",
            pos: "Cheif Technology Officer",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
        },
        {
            id: 2,
            name: "Floyd Stephens",
            pos: "Cheif Technology Officer",
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        },
        {
            id: 3,
            name: "Sanjay Jaiswar",
            pos: "Founder & CEO",
            img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        },
        {
            id: 4,
            name: "Kate Winslet",
            pos: "Cheif Technology Officer",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
        },
        {
            id: 5,
            name: "Floyd Stephens",
            pos: "Cheif Technology Officer",
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        },
        {
            id: 6,
            name: "Kate Winslet",
            pos: "Cheif Technology Officer",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
        },
        {
            id: 7,
            name: "Floyd Stephens",
            pos: "Cheif Technology Officer",
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        },
    ]

    return (
        <div className='redwine__about'>
            <div className="redwine__about-intro">
                <div className="left">
                    <h1>We build bridges <br /> between <span>companies and <br /> customer</span></h1>
                </div>
                <div className="right">
                    <h2>Redwine Digital is a digital marketing agency that offers access to various media platforms as well as performance services. With the aid of a whole range of performance and advertising solutions, we assist marketers in enhancing their brand image, influencing consumers, and generating income.</h2>
                </div>
            </div>
            <div className="redwine__about-img">
                <Image src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1496&q=80" alt="" width={2500} height={winWidth < 1000 ? 1500 : 1000} objectFit="cover" />
            </div>
            <div className="outer">
                <div className="divider" />
            </div>
            <div className="redwine__about-influencer">
                <div className="title">
                    <div className="title__inner">
                        <h1>Why Choose Us</h1>
                        <motion.div className="line" initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1 }} viewport={{ once: true }} />
                    </div>
                    <div className="showcase"></div>
                </div>
                <div className="semi1" />
                <div className="content">
                    <div className="content__left">
                        <h2>Experience across multiple industries</h2>
                        <p>As a social media marketing company, we have worked with numerous clients from a variety of industries and have seen success.</p>
                        <h2>Ridiculous Association</h2>
                        <p>Unless you insist on contracts or a more prolonged relationship, we can work with you on a monthly basis.</p>
                        <h2>Transparency</h2>
                        <p>With our clients, we are completely open and honest. We never provide reports with erroneous statistics; they are always correct numbers.</p>
                        <h2>We value service.</h2>
                        <p>Healthy working relationships depend on service, thus we follow the rule of listening to our clients, making ourselves available to them, and striving to provide them with the finest service possible</p>
                    </div>
                    <div className="content__right">
                        <Image src={"https://res.cloudinary.com/redwine/image/upload/v1664610983/Redwine/Man_thinking-pana_lxz56k.png"} width={500} height={500} objectFit="contain" />
                    </div>
                </div>
                <div className="semi2" />
            </div>
            <div className="outer">
                <div className="divider" />
            </div>
            <div className="redwine__about-stats">
                <div className="item">
                    <h3>Projects We have completed so far in this journey</h3>
                    <h1>290+</h1>
                </div>
                <div className="item">
                    <h3>Its Been Almost 5+ years in this domain.</h3>
                    <h1>12+</h1>
                </div>
                <div className="item">
                    <h3>Our Influencer Community We gathered till now</h3>
                    <h1>5k+</h1>
                </div>
            </div>
            <div className="redwine__about-team">
                <div className="title">
                    <h1>Meet our <br /> amazing team</h1>
                </div>
                <div className="divider" />
                <div className="content">
                    {
                        team?.map((item) => (

                            <div className="content__card" key={item?._id}>
                                <Image {...ImageUrl(item.image)} width={300} height={350} objectFit="cover" />
                                <h2>{item?.name}</h2>
                                <p>{item?.designation}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default About