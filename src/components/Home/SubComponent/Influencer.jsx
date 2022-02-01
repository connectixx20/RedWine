import { motion } from "framer-motion";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation,Autoplay } from "swiper";

import "swiper/css/pagination";
import "swiper/css/navigation";

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

    const breakpoints={
        400:{
            slidesPerView:2
        },
        700:{
            slidesPerView:3
        },
        1400:{
            slidesPerView:4
        }
    }
    return (
        <div className='redwine__home-influencer'>
            <div className="redwine__home-influencer__title">
                <motion.h1 initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>Influencer</motion.h1>
            </div>

            <div className="redwine__home-influencer__content">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    autoplay={true}
                    modules={[Pagination, Navigation,Autoplay]}
                    speed={600}
                    className="mySwiper"
                    breakpoints={breakpoints}
                >
                    {influencerData.map((d,i) => (
                        <SwiperSlide key={d.name}>
                            <motion.div className="redwine__home-influencer__content-card" initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:1.4,delay: i<2 ? i+0.3 : 0.3}} viewport={{once: true}}>
                                <Image src={d.img} width={400} height={550} objectFit="cover" />
                                <motion.div className="inner" whileHover={{opacity:1}} transition={{duration:1}}>
                                    <h1>{d.name}</h1>
                                    <p>{d.media}</p>
                                </motion.div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Influencer;
