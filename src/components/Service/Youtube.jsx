import Image from 'next/image'
import React from 'react'


import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ImageUrl } from '../../../lib/client';

SwiperCore.use([Navigation])

const swiperConfig = {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
        clickable: true,
    },
    loopFillGroupWithBlank: true,
    navigation: true,
    style: { height: 300, paddingTop: 30 },
    breakpoints: {
        600: {
            slidesPerView: 2,
            slidesPerGroup: 2
        },
        850: {
            slidesPerView: 3,
            slidesPerGroup: 3
        },
        1200: {
            slidesPerView: 4,
            slidesPerGroup: 4
        },
        1500: {
            slidesPerView: 5,
            slidesPerGroup: 5
        },
        2200: {
            slidesPerView: 6,
            slidesPerGroup: 6
        }
    }
}

const channerlImage = [
    {
        id: 0,
        name: "Ranveer Allabadia",
        img: "https://res.cloudinary.com/redwine/image/upload/v1663156760/Redwine/channels/4syhBAa6d4sK_J8YxhRFHDyARee3qoR2bUtGMtRDyyVncFn41bSHUDf-FNmvcu3TD2JwowD8sA_s498-c-k-c0x00ffffff-no-rj_rgvj5b.jpg"
    },
    {
        id: 1,
        name: "Divine",
        img: "https://res.cloudinary.com/redwine/image/upload/v1663156835/Redwine/channels/5wrdyz0HczrcCtinh-zwHrlXbwXu2CgzyTGh3pVg7lvaFLei6Fpa0FFaAgMp0t8mgHkA1o3vHg_s800-c-k-c0x00ffffff-no-rj_jnpf4f.jpg"
    },
    {
        id: 2,
        name: "Raftaar",
        img: "https://res.cloudinary.com/redwine/image/upload/v1663156902/Redwine/channels/gh3YWZdrh1_l-OlQih7CWDj7txFdYkLEQO-MPm2XuygRigt-gxVDa4_38PUeyBPv6NLTV09-g5I_s800-c-k-c0x00ffffff-no-rj_hfhwxt.jpg"
    },
    {
        id: 3,
        name: "Science Of Universe",
        img: "https://res.cloudinary.com/redwine/image/upload/v1663157016/Redwine/channels/AMLnZu9YLTnAJwK4af-VLU9Ai_kuWq2DEsfDBD-ze73jcw_s800-c-k-c0x00ffffff-no-rj_kldqst.jpg"
    },
    {
        id: 4,
        name: "Ranveer Allabadia",
        img: "https://res.cloudinary.com/redwine/image/upload/v1663156760/Redwine/channels/4syhBAa6d4sK_J8YxhRFHDyARee3qoR2bUtGMtRDyyVncFn41bSHUDf-FNmvcu3TD2JwowD8sA_s498-c-k-c0x00ffffff-no-rj_rgvj5b.jpg"
    },
    {
        id: 5,
        name: "Divine",
        img: "https://res.cloudinary.com/redwine/image/upload/v1663156835/Redwine/channels/5wrdyz0HczrcCtinh-zwHrlXbwXu2CgzyTGh3pVg7lvaFLei6Fpa0FFaAgMp0t8mgHkA1o3vHg_s800-c-k-c0x00ffffff-no-rj_jnpf4f.jpg"
    },
    {
        id: 6,
        name: "Raftaar",
        img: "https://res.cloudinary.com/redwine/image/upload/v1663156902/Redwine/channels/gh3YWZdrh1_l-OlQih7CWDj7txFdYkLEQO-MPm2XuygRigt-gxVDa4_38PUeyBPv6NLTV09-g5I_s800-c-k-c0x00ffffff-no-rj_hfhwxt.jpg"
    },
    {
        id: 7,
        name: "Science Of Universe",
        img: "https://res.cloudinary.com/redwine/image/upload/v1663157016/Redwine/channels/AMLnZu9YLTnAJwK4af-VLU9Ai_kuWq2DEsfDBD-ze73jcw_s800-c-k-c0x00ffffff-no-rj_kldqst.jpg"
    },
]


const contentItem = [
    {
        id: 0,
        name: "YouTube Channel Creation",
        img: "https://res.cloudinary.com/redwine/image/upload/v1663140845/Redwine/Design_team-amico_c8v8e2.png",
        content: "At Social Work space, our YouTube promotions specialists break down the crowd and make a custom YouTube channel to add the hint of diversion to showcasing. We likewise help with making a Brand Record on Google to convey you a more all encompassing internet based presence. With a Brand Record, being an approved client, you can sign in and deal with various records."
    },
    {
        id: 1,
        name: "Target Users",
        img: "https://res.cloudinary.com/redwine/image/upload/v1663140845/Redwine/Generating_new_leads-rafiki_iefm6n.png",
        content: "Focusing on clients is basic to really advance a YouTube channel and increment the brand’s compass. Rely on our YouTube Showcasing specialists to focus on your clients. We make invigorating substance according to interests, search examples, and socioeconomics to direct people to a YouTube channel. We additionally advance recordings for Web optimization for upgrade on web crawlers."
    },
    {
        id: 2,
        name: "Video Content Creation",
        img: "https://res.cloudinary.com/redwine/image/upload/v1663140845/Redwine/Content_creator-amico_zk0bog.png",
        content: "Frequently called the best YouTube promotions office in India, we make excellent recordings with our YouTube showcasing administrations. It incorporates item exhibits, tributes, instructional exercises, thought pioneer interviews, contextual analyses, etc. We share them on the channel, flow site, and web search tools for brand advancement and helping site traffic."
    },
    {
        id: 3,
        name: "Measure the Performance",
        img: "https://res.cloudinary.com/redwine/image/upload/v1663140844/Redwine/Site_Stats-bro_uasfwg.png",
        content: "Considered as a real part of the best YouTube showcasing specialist co-ops, we oversee and screen the advancement of YouTube channels for your particular objectives. It very well may be developing supporters, expanding video perspectives and likes, and distinguishing what works for you. We give month to month reports simplifying it for you to perceive the speed of development of the YouTube channel."
    },
    {
        id: 4,
        name: "YOUTUBE MONETIZATION SERVICES",
        img: "https://res.cloudinary.com/redwine/image/upload/v1663140845/Redwine/App_monetization-amico_uvq1iq.png",
        content: "Might it be said that you are searching for the best YouTube channel adaptation administrations to accomplish your watch time and endorsers on your youtube channel? Then, at that point, look no farther than DigiBrood to assist you with adapting your channel and convert your ability and income.  <br /><br /> We are a main youtube adaptation specialist co-op that can assist with putting your recordings before a great many clients and assist you with working on your possibilities making a viral YouTube crusade. We pursue marking your channel to guarantee to establish a positive climate for your recordings on youtube."
    },
    {
        id: 5,
        name: "Increase your sales with our content marketing skills.",
        img: "https://res.cloudinary.com/redwine/image/upload/v1663141303/Redwine/Generating_new_leads-amico_vvjcwb.png",
        content: "It is vital to have pertinent substance in order to draw in clients. As the patterns are changing, conventional showcasing is turning out to be less and incapable. Content promoting is the present and the fate of advertising. We are consistently prepared to assist you with making a fantastic content for your site to make more leads."
    },
    {
        id: 6,
        img: "https://res.cloudinary.com/redwine/image/upload/v1663141303/Redwine/Safe-pana_dm7g0r.png",
        name: "Let's Secure Your Content with our services ",
        content: "Protect your content on Youtube and all Social Platforms with services included with content copyright <br /><br />Content Distribution (Audio/ Video)  <br /><br />Claim distribute & monetize your content with us across all the platforms"
    },
    {
        id: 7,
        name: "YOUTUBE PRODUCTION",
        img: "https://res.cloudinary.com/redwine/image/upload/v1663141303/Redwine/Videographer-amico_nh1gck.png",
        content: "Over 150 million people subscribe to the channels and properties operated and managed by Redwine Digital. One of the biggest Spiritual YouTube channels is owned and run by Redwine Digital, which also oversees channels in the Film, TV, Documentaries, Music, Kids, Food, Lifestyle, Comedy, and other verticals. <br /><br />For a variety of OTT platforms, Redwine Digital is also actively involved in creating original television shows and films. "
    },
    {
        id: 8,
        name: "YOUTUBE VIDEO PROMOTION",
        img: "https://res.cloudinary.com/redwine/image/upload/v1663141303/Redwine/Media_player-pana_dyfp6f.png",
        content: "Your promotion effort can be measured in a different way using YouTube promotion. Even though the images and content are static, a video can provide entertainment and training in a speedier and, for certain clients, more engaging method. It can be fine to try to develop a video that is in line with your business image and see what kind of feedback you get, even if it’s not something you’ve initially accomplished with your Facebook page. <br /><br /> You can advertise your films on various advertising networks by using our services for YouTube video promotion. If you’re seeking for YouTube promotion ideas, check out our most recent blog post on how to start a YouTube channel. Create your YouTube channel today by selecting the niche that best suits you. <br /><br /> The internet is flooded with content in the day and age we live in. Unfortunately, becoming a great YouTuber, creative, or videographer isn’t the only path to success. Because now it’s also a competition of whose YouTube videos are better promoted. 500 hours of video are uploaded to YouTube every day, which has increased competition and forced content producers to market their channels and films as effectively as they can. The following are some methods creators can advertise their videos:"
    },
    {
        id: 9,
        name: "Search Engine Optimization (SEO)",
        img: "https://res.cloudinary.com/redwine/image/upload/v1663146653/Redwine/Google_sitemap-amico_kofdwv.png",
        content: "“Search Engine Optimization” (SEO) is a term. Most often, creators overlook the fact that YouTube serves as a search engine. Actually, it has 50% more searches than Yahoo, making it the second-largest search engine worldwide. When users seek an answer to an issue, they search YouTube for advice, how-to manuals, and other information. What keywords will help producers rank their YouTube videos at the top isn’t something that can be determined in advance. However, some reverse engineering can facilitate the procedure."
    },
]
const Youtube = ({ channel }) => {

    return (
        <div className="redwine__service-youtube" id='youtube'>
            <div className="title">
                <div className="title__text">
                    <Image src={"https://res.cloudinary.com/redwine/image/upload/v1664612374/Redwine/youtube_wzv6s6.png"} width={50} height={50} />
                    <h1>  Youtube Marketing</h1>
                </div>
                <p>With our exceptionally innovative and vital methodology we separate your YouTube rivals.</p>
            </div>
            <div className="content">
                {
                    contentItem.map((item) => (
                        <div className={`content__item ${(item.id + 1) % 2 === 0 ? "reverse" : ""}`} key={item.id} >
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
                <div className="content__slider">
                    <div className="title">
                        <h1>SAMPLE CHANNELS IN THE NETWORK</h1>
                    </div>
                    <Swiper
                        {...swiperConfig}
                        className="mySwiper"
                    >
                        {
                            channel?.map((item) => (
                                <SwiperSlide key={item.name}>
                                    <div className="desktop__tech">
                                        <Image {...ImageUrl(item?.image)} alt={item.name} width={300} height={300} objectFit="contain" />
                                        <p>{item.name}</p>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Youtube