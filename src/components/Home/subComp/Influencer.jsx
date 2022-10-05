import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import { motion } from 'framer-motion';
import { ImageUrl } from '../../../../lib/client';
import millify from 'millify';

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css"
import { useSelector } from 'react-redux';

const platformList = [
    {
        id: 0,
        name: "Instagram",
        icon: "/icon/instagram.png"
    },
    {
        id: 1,
        name: "Facebook",
        icon: "/icon/facebook.png"
    },
    {
        id: 2,
        name: "Youtube",
        icon: "/icon/youtube.png"
    },
    {
        id: 3,
        name: "Twitter",
        icon: "/icon/twitter.png"
    },
    {
        id: 4,
        name: "Snapchat",
        icon: "/icon/snapchat.png"
    },
    {
        id: 5,
        name: "LinkedIn",
        icon: "/icon/linkedin.png"
    },
]

const Influencer = ({ influencer }) => {
    const { winWidth } = useSelector(state => state.util)


    const breakpoints = {
        605: {
            slidesPerView: 2
        },
        900: {
            slidesPerView: 3
        },
        1400: {
            slidesPerView: 4
        },
        2000: {
            slidesPerView: 5
        },
        2500: {
            slidesPerView: 6
        },
        3000: {
            slidesPerView: 7
        }
    }

    return (
        <div className="redwine__home-influencer">
            <div className="title">
                <div className="title__inner">
                    <h1>Our Influencers</h1>
                    <motion.div className="line" initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1 }} viewport={{ once: true }} />
                </div>
                <div className="showcase"></div>
            </div>
            <div className="content">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    autoplay={{ delay: 3000, disableOnInteraction: true }}
                    modules={[Pagination, Navigation, Autoplay]}
                    speed={600}
                    className="mySwiper"
                    breakpoints={breakpoints}
                >
                    {influencer?.map((d, i) => (
                        <SwiperSlide key={d.name}>
                            <div className="content__card">
                                <Image {...ImageUrl(d.image)} width={400} height={600} objectFit="cover" />
                                <div className="inner">
                                    <motion.h2 initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: .6 } }} >{d.name}</motion.h2>
                                    <motion.p initial={{ y: 150, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: .8 } }}>{millify(d?.follower)} </motion.p>
                                    <motion.div className="inner__link" initial={{ y: 150, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: .7 } }}>
                                        {
                                            d?.instagram && (
                                                <a className="item" href={`https://instagram/${d.instagram}`} rel='noreferrer' target={"_blank"}>
                                                    <img src="/icon/instagram.png" alt="" />
                                                </a>
                                            )
                                        }
                                        {
                                            d?.facebook && (
                                                <a className="item" href={`https://facebook/${d.facebook}`} rel='noreferrer' target={"_blank"}>
                                                    <img src="/icon/facebook.png" alt="" />
                                                </a>
                                            )
                                        }
                                        {
                                            d?.linkedin && (
                                                <a className="item" href={`https://linkedin/in/${d.linkedin}`} rel='noreferrer' target={"_blank"}>
                                                    <img src="/icon/linkedin.png" alt="" />
                                                </a>
                                            )
                                        }
                                        {
                                            d?.twiter && (
                                                <a className="item" href={`https://twitter/${d.twiter}`} rel='noreferrer' target={"_blank"}>

                                                    <img src="/icon/twitter.png" alt="" />
                                                </a>
                                            )
                                        }
                                    </motion.div>

                                </div>

                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="redwine__influencer-platform" style={{ display: winWidth < 1000 && "block", gridTemplateColumns: winWidth < 1000 && "none", margin: 0 }}>

                {
                    platformList.map(item => winWidth > 1000 && (
                        <div className="redwine__influencer-platform__card" >
                            <Image src={item.icon} width={winWidth < 600 ? 40 : 60} height={winWidth < 600 ? 40 : 60} objectFit="contain" loading="eager" />
                        </div>
                    ))
                }
                {
                    winWidth < 1000 && (
                        <Swiper slidesPerView={2} modules={[Pagination, Navigation, Autoplay]} breakpoints={{ 650: { slidesPerView: 3 } }}>
                            {
                                platformList.map(item => (
                                    <SwiperSlide key={item.id}>
                                        <div className="redwine__influencer-platform__card" style={{ margin: "1rem" }}>
                                            <Image src={item.icon} width={winWidth < 600 ? 40 : 60} height={winWidth < 600 ? 40 : 60} objectFit="contain" loading="eager" />
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    )
                }
            </div>
        </div>
    )
}

export default Influencer