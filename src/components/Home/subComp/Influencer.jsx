import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import { motion } from 'framer-motion';

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css"

const Influencer = () => {
    const influencerData = [
        {
            id: 1,
            img: "https://res.cloudinary.com/redwine/image/upload/v1643695469/Home/photo-1584998316204-3b1e3b1895ae_bke8rq.jpg",
            name: " Sarah Doe",
            media: "Instagram"
        },
        {
            id: 2,
            img: "https://res.cloudinary.com/redwine/image/upload/v1643695445/Home/photo-1603771628357-a2b2d72c2ea0_cputtk.jpg",
            name: " Sarah Doe",
            media: "Instagram"
        },
        {
            id: 3,
            img: "https://res.cloudinary.com/redwine/image/upload/v1643695469/Home/photo-1584998316204-3b1e3b1895ae_bke8rq.jpg",
            name: " Sarah Doe",
            media: "Instagram"
        },
        {
            id: 4,
            img: "https://res.cloudinary.com/redwine/image/upload/v1643695469/Home/photo-1584998316204-3b1e3b1895ae_bke8rq.jpg",
            name: " Sarah Doe",
            media: "Instagram"
        },
        {
            id: 5,
            img: "https://res.cloudinary.com/redwine/image/upload/v1643695445/Home/photo-1603771628357-a2b2d72c2ea0_cputtk.jpg",
            name: " Sarah Doe",
            media: "Instagram"
        },
        {
            id: 6,
            img: "https://res.cloudinary.com/redwine/image/upload/v1643695469/Home/photo-1584998316204-3b1e3b1895ae_bke8rq.jpg",
            name: " Sarah Doe",
            media: "Instagram"
        },
    ]

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
                    <motion.div className="line" initial={{width:0}} whileInView={{width:"100%"}} transition={{duration:1}}  viewport={{once:true}} />
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
                    {influencerData.map((d, i) => (
                        <SwiperSlide key={d.name}>
                            <div className="content__card">
                                <Image src={d.img} width={400} height={600} objectFit="contain" />
                                <div className="inner">
                                    <motion.h2 initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: .6 } }} >Jocelyn Flores</motion.h2>
                                    <motion.p initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { delay: .3, duration: 1 } }}>Instagram</motion.p>
                                </div>
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Influencer