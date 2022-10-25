import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import { motion } from 'framer-motion';

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css"
import { useDispatch, useSelector } from "react-redux";
import { setShowRegister } from "../../../redux/slices/util";
import { ImageUrl } from "../../../lib/client";
import millify from "millify";


const breakpoints = {
    450: {
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


const genreList = [
    {
        id: 0,
        name: "Fashion & Beauty",
        icon: "/genre/fashion.png"
    },
    {
        id: 1,
        name: "Entertainment & Comedy",
        icon: "/genre/multimedia.png"
    },
    {
        id: 2,
        name: "Travel & Lifestyle",
        icon: "/genre/travel.png"
    },
    {
        id: 3,
        name: "Technology",
        icon: "/genre/technology.png"
    },
    {
        id: 4,
        name: "Motivational",
        icon: "/genre/reward.png"
    },
    {
        id: 5,
        name: "Gaming",
        icon: "/genre/joystick.png"
    },
    {
        id: 6,
        name: "Sports & Fitness",
        icon: "/genre/technology.png"
    },
    {
        id: 7,
        name: "Business & Finance",
        icon: "/genre/budget.png"
    },
    {
        id: 8,
        name: "Dance & Music",
        icon: "/genre/music.png"
    },
    {
        id: 6,
        name: "Food",
        icon: "/genre/dish.png"
    },
]

const Influencer = ({ influencer }) => {
    const dispatch = useDispatch()
    const { winWidth } = useSelector(state => state.util)


    const instaInfluencer = influencer?.filter((item) => item.platform === "Instagram" || item?.platform === "All")
    const linkedinInfluencer = influencer?.filter((item) => item.platform === "LinkedIn" || item?.platform === "All")
    const youtubeInfluencer = influencer?.filter((item) => item.platform === "Youtube" || item?.platform === "All")
    const facebookInfluencer = influencer?.filter((item) => item.platform === "Facebook" || item?.platform === "All")


    return (
        <div className="redwine__influencer">
            <div className="redwine__influencer-intro">
                <div className="upper">
                    <div className="upper__left">
                        <h1>A Fully Integrated Influencer <br /> Marketing Agency</h1>
                    </div>
                    <div className="upper__right">
                        <p>With the help of social media influencers and businesses, Redwine Digital, a well-known influencer marketing platform in India, can craft captivating stories for the promotion of certain products. Our experts connect companies with top content creators, social media influencers, artists, and bloggers to reach and engage millions of customers through remarkable influencer content and marketing campaigns.</p>
                        <motion.div className="register" whileTap={{ scale: .97 }} onClick={() => dispatch(setShowRegister(true))}>
                            <h3>Register</h3>
                        </motion.div>
                    </div>
                </div>
                <div className="lower">
                    <div className="lower__image">
                        <Image src={"https://res.cloudinary.com/redwine/image/upload/v1663226913/Redwine/photo-1587614204968-68ba4b5e0be3_arxwub.jpg"} width={winWidth < 800 ? 1800 : 2500} height={winWidth < 800 ? 1000 : 1000} objectFit="cover" />
                    </div>
                </div>
            </div>
            <div className="redwine__influencer-platform">
                {
                    platformList.map(item => (
                        <div className="redwine__influencer-platform__card" key={item.id}>
                            <Image src={item.icon} width={winWidth < 600 ? 40 : 60} height={winWidth < 600 ? 40 : 60} objectFit="contain" loading="eager" />
                        </div>
                    ))
                }
            </div>

            <div className="redwine__influencer-instagram" id="instagram">
                <div className="title">
                    <h1>Our Top Instagram Influencer</h1>

                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    autoplay={{ delay: 3000, disableOnInteraction: true }}
                    modules={[Pagination, Navigation, Autoplay]}
                    speed={600}
                    className="mySwiper"
                    breakpoints={breakpoints}
                >
                    {instaInfluencer.map((d, i) => (
                        <SwiperSlide key={d.name}>
                            <div className="content__card">
                                <Image {...ImageUrl(d?.image)} width={400} height={600} objectFit="cover" />
                                <div className="inner">
                                    <motion.h2 initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: .6 } }} >{d?.name}</motion.h2>
                                    <motion.p initial={{ y: 150, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: .8 } }}>{millify(d?.follower)} </motion.p>
                                    <motion.div className="inner__link" initial={{ y: 150, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: .7 } }}>
                                        {
                                            d?.instagram && (
                                                <a className="item" href={`https://instagram.com/${d.instagram}/feed`} rel='noreferrer' target={"_blank"}>
                                                    <img src="/icon/instagram.png" alt="" />
                                                </a>
                                            )
                                        }
                                        {
                                            d?.facebook && (
                                                <a className="item" href={`https://facebook.com/${d.facebook}`} rel='noreferrer' target={"_blank"}>
                                                    <img src="/icon/facebook.png" alt="" />
                                                </a>
                                            )
                                        }
                                        {
                                            d?.linkedin && (
                                                <a className="item" href={`https://linkedin.com/in/${d.linkedin}`} rel='noreferrer' target={"_blank"}>
                                                    <img src="/icon/linkedin.png" alt="" />
                                                </a>
                                            )
                                        }
                                        {
                                            d?.twiter && (
                                                <a className="item" href={`https://twitter.com/${d.twiter}`} rel='noreferrer' target={"_blank"}>

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

            <div className="redwine__influencer-instagram" id="linkedin">
                <div className="title reverse">
                    <h1>Our Top LinkedIn Influencer</h1>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    autoplay={{ delay: 3000, disableOnInteraction: true }}
                    modules={[Pagination, Navigation, Autoplay]}
                    speed={600}
                    className="mySwiper"
                    breakpoints={breakpoints}
                >
                    {linkedinInfluencer.map((d, i) => (
                        <SwiperSlide key={d.name}>
                            <div className="content__card">
                                <Image {...ImageUrl(d?.image)} width={400} height={600} objectFit="cover" />
                                <div className="inner">
                                    <motion.h2 initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: .6 } }} >{d?.name}</motion.h2>
                                    <motion.p initial={{ y: 150, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: .8 } }}>{millify(d?.follower)} </motion.p>
                                    <motion.div className="inner__link" initial={{ y: 150, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: .7 } }}>
                                        {
                                            d?.instagram && (
                                                <a className="item" href={`https://instagram.com/${d.instagram}`} rel='noreferrer' target={"_blank"}>
                                                    <img src="/icon/instagram.png" alt="" />
                                                </a>
                                            )
                                        }
                                        {
                                            d?.facebook && (
                                                <a className="item" href={`https://facebook.com/${d.facebook}`} rel='noreferrer' target={"_blank"}>
                                                    <img src="/icon/facebook.png" alt="" />
                                                </a>
                                            )
                                        }
                                        {
                                            d?.linkedin && (
                                                <a className="item" href={`https://linkedin.com/in/${d.linkedin}`} rel='noreferrer' target={"_blank"}>
                                                    <img src="/icon/linkedin.png" alt="" />
                                                </a>
                                            )
                                        }
                                        {
                                            d?.twiter && (
                                                <a className="item" href={`https://twitter.com/${d.twiter}`} rel='noreferrer' target={"_blank"}>

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

            <div className="redwine__influencer-genre">
                <div className="title">
                    <h1>Genre We Support</h1>
                </div>
                <div className="content">
                    {
                        genreList.map(item => (
                            <div className="content__item" key={item.name}>
                                <Image src={item.icon} width={50} height={50} objectFit="contain" />
                                <div className="inner">
                                    <h3>{item.name}</h3>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="redwine__influencer-instagram" id="facebook">
                <div className="title">
                    <h1>Our Top Facebook Influencer</h1>

                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    autoplay={{ delay: 3000, disableOnInteraction: true }}
                    modules={[Pagination, Navigation, Autoplay]}
                    speed={600}
                    className="mySwiper"
                    breakpoints={breakpoints}
                >
                    {facebookInfluencer.map((d, i) => (
                        <SwiperSlide key={d.name}>
                            <div className="content__card">
                                <Image {...ImageUrl(d?.image)} width={400} height={600} objectFit="cover" />
                                <div className="inner">
                                    <motion.h2 initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: .6 } }} >{d?.name}</motion.h2>
                                    <motion.p initial={{ y: 150, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: .8 } }}>{millify(d?.follower)} </motion.p>
                                    <motion.div className="inner__link" initial={{ y: 150, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: .7 } }}>
                                        {
                                            d?.instagram && (
                                                <a className="item" href={`https://instagram.com/${d.instagram}`} rel='noreferrer' target={"_blank"}>
                                                    <img src="/icon/instagram.png" alt="" />
                                                </a>
                                            )
                                        }
                                        {
                                            d?.facebook && (
                                                <a className="item" href={`https://facebook.com/${d.facebook}`} rel='noreferrer' target={"_blank"}>
                                                    <img src="/icon/facebook.png" alt="" />
                                                </a>
                                            )
                                        }
                                        {
                                            d?.linkedin && (
                                                <a className="item" href={`https://linkedin.com/in/${d.linkedin}`} rel='noreferrer' target={"_blank"}>
                                                    <img src="/icon/linkedin.png" alt="" />
                                                </a>
                                            )
                                        }
                                        {
                                            d?.twiter && (
                                                <a className="item" href={`https://twitter.com/${d.twiter}`} rel='noreferrer' target={"_blank"}>

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

            <div className="redwine__influencer-instagram" id="youtube">
                <div className="title reverse">
                    <h1>Our Top Youtube Influencer</h1>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    autoplay={{ delay: 3000, disableOnInteraction: true }}
                    modules={[Pagination, Navigation, Autoplay]}
                    speed={600}
                    className="mySwiper"
                    breakpoints={breakpoints}
                >
                    {youtubeInfluencer.map((d, i) => (
                        <SwiperSlide key={d.name}>
                            <div className="content__card">
                                <Image {...ImageUrl(d?.image)} width={400} height={600} objectFit="cover" />
                                <div className="inner">
                                    <motion.h2 initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: .6 } }} >{d?.name}</motion.h2>
                                    <motion.p initial={{ y: 150, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: .8 } }}>{millify(d?.follower)} </motion.p>
                                    <motion.div className="inner__link" initial={{ y: 150, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: .7 } }}>
                                        {
                                            d?.instagram && (
                                                <a className="item" href={`https://instagram.com/${d.instagram}`} rel='noreferrer' target={"_blank"}>
                                                    <img src="/icon/instagram.png" alt="" />
                                                </a>
                                            )
                                        }
                                        {
                                            d?.facebook && (
                                                <a className="item" href={`https://facebook.com/${d.facebook}`} rel='noreferrer' target={"_blank"}>
                                                    <img src="/icon/facebook.png" alt="" />
                                                </a>
                                            )
                                        }
                                        {
                                            d?.linkedin && (
                                                <a className="item" href={`https://linkedin.com/in/${d.linkedin}`} rel='noreferrer' target={"_blank"}>
                                                    <img src="/icon/linkedin.png" alt="" />
                                                </a>
                                            )
                                        }
                                        {
                                            d?.twiter && (
                                                <a className="item" href={`https://twitter.com/${d.twiter}`} rel='noreferrer' target={"_blank"}>

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
        </div >
    )
}

export default Influencer