import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import {BiCheckCircle} from "react-icons/bi"

const carouselData = [
    {
        id: 0,
        img: "https://images.unsplash.com/photo-1592329347810-258afdd206bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
    },
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1592329347431-0943ca753471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1572270184090-3c5a62939cfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
    },
]

const benefitItems=[
    {
        id:0,
        name:"Increase brand awareness and reach"
    },
    {
        id:1,
        name:"Build credibility and trust"
    },
    {
        id:2,
        name:"Enrich your content strategy"
    },
    {
        id:3,
        name:"Win-win long-term partnerships"
    },
    {
        id:4,
        name:"Boost SEO, ROI, and bottom line"
    },
    {
        id:5,
        name:"Drive purchases decisions"
    },
    {
        id:6,
        name:"Increase sales"
    },
    {
        id:7,
        name:"Cost-effective & Saves Time"
    },
    {
        id:8,
        name:"Unlimited Sharing Potential On Social Platforms"
    },
    {
        id:9,
        name:"Suitable for any Business"
    },
]

const contentItem=[
    {
        id:0,
        name:"DIGITAL BRAND ADVOCATES",
        img:"https://res.cloudinary.com/redwine/image/upload/v1663167294/Redwine/Ambassador-pana_c6filx.png",
        content:"Taking paid brand representatives on friendly to a strong new degree of viability will get you the return for capital invested from brand advocates never seen !"
    },
    {
        id:1,
        name:"Brand Collaboration",
        img:"https://res.cloudinary.com/redwine/image/upload/v1663167295/Redwine/Partnership-bro_sqzolw.png",
        content:"Consistently, individuals come to YouTube to associate with their number one makers, and all the while, they find new items they love. Thus, this sets out an important freedom for brands to contact new crowds on YouTube and cooperate with makers to intensify their message. Throughout the long term, we’ve seen marked content develop on YouTube, on account of the immediate association makers have with their fans."
    },
    {
        id:2,
        name:"Data-Driven and Measurable Influencer Marketing Collaborations",
        img:"https://res.cloudinary.com/redwine/image/upload/v1663167294/Redwine/International_cooperation-bro_szwqik.png",
        content:"We are here to support you in achieving your marketing objectives with influencer marketing partnerships created especially for your business. By creating influencer marketing initiatives that are tailored to your objectives and incorporated into your marketing strategy, we oversee the full partnership process from start to finish."
    },
]

const Infleuncer = () => {

    return (
        <div className='redwine__service-influencer' id='influencer'>
            <div className="title">
                <h1>Influencer Marketing</h1>
                <p>We will delve deeper into the primary advantages of influencer marketing for the business.</p>
            </div>
            <div className="content">
                <div className="content__slider">
                    <Swiper className="mySwiper" autoplay={{delay:3000}} modules={[Autoplay]}>
                        {
                            carouselData.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <Image src={item.img} alt="" width={2500} height={1080} objectFit="cover" />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className="content__data">
                    <p>Redwine Digital is a top influencer marketing company in India that offers the best influencer marketing platform to assist companies and forward-thinking marketers in utilising social media influencers&quot; content for product marketing (service). For the purpose of conducting outstanding influencer marketing campaigns, our influencer marketing professionals connect clients with the top 50,000+ content creators, social media influencers, artists, and bloggers with interested audiences (possible consumers).
                    Social media marketing includes influencer marketing. It consists of endorsements and product/service promotions made by influential people, people, and organisations with a reputed level of social influence in their industry.
                    Influencer marketing is the practise of promoting to, with, and through influencers to reach both your and their target audiences with brand messages. <br /> <br />
                    Though it doesn&quot;t only rely on specific recommendations, influencer marketing is akin to word-of-mouth advertising.
                    Influencers can originate from a variety of sources. Any person, team, organisation, place, or thing has the capacity to have an influence.
                    These content makers often have engaged audiences who follow them. Your business can use buyer personas to advertise to them on various social media platforms in order to broaden its reach, raise brand recognition, and produce new leads for your sales funnel.
                    Influencer marketing can be used as a stand-alone technique or as a way to enhance your other marketing initiatives.
                    We will delve deeper into the primary advantages of influencer marketing for the business.
                    Our way to deal with powerhouse determination is framed from the novel exhibition information accumulated in our CRM from over 100k forces to be reckoned with, which illuminates each choice we make.
                    We join this information with genuine human relationship the board, social first imaginative and system and master following, estimation, improvement and detailing. </p>
                </div>
                <div className="content__ques" style={{marginBottom:"10rem"}}>
                    <div className="content__ques-title">
                        <h2>Top 10 Benefits Of Influencer Marketing</h2>
                    </div>
                    <div className="content__ques-grid">
                        {
                            benefitItems.map(item=>(
                                <div className="item" key={item.name}>
                                    <BiCheckCircle color='green' size={25} />
                                    <h3>{item.name}</h3>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {
                    contentItem.map(item=>(
                        <div className={`content__item ${(item.id + 1) % 2 === 0 ? "reverse" : ""}`} key={item.id} style={{marginBottom:"5rem"}}>
                            <div className="left">
                                <Image src={item.img} width={500} height={500} objectFit="contain" />
                            </div>
                            <div className="right">
                                <div className="right__title">
                                    <h2>{item.name}</h2>
                                </div>
                                <div className="right__content" dangerouslySetInnerHTML={{ __html: item.content }}> 
                                    
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Infleuncer