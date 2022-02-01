import { motion } from "framer-motion";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation,Autoplay } from "swiper";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState,useEffect } from "react";

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
    const [show, setShow] = useState(false);
    const [width, setWidth] = useState(0);
    console.log({show})

    useEffect(()=>{
        setWidth(window.innerWidth)
    },[show,width])
    return (
        <div className='redwine__home-influencer'>
            <div className="redwine__home-influencer__title">
                <motion.h1 initial={{ x:  width < 700 ? 100 : 300, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>Influencer</motion.h1>
                <motion.span initial={{width:0,opacity:0}} whileInView={{width:width <700? 80: 130,opacity:1}} transition={{duration:1.4,delay:2,type:"spring",stiffness:300}} viewport={{once: true}}></motion.span>
            </div>
            <div className="redwine__home-influencer__content">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    autoplay={{delay:3000}}
                    modules={[Pagination, Navigation,Autoplay]}
                    speed={600}
                    className="mySwiper"
                    breakpoints={breakpoints}
                >
                    {influencerData.map((d,i) => (
                        <SwiperSlide key={d.name}>
                            <motion.div className="redwine__home-influencer__content-card" initial={{y: width < 700 ? 100 : 300,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:1.4,delay: width < 650 ? i<2 ? i+0.3 : 0.3 : i<4 ? i + 0.3 : 0.3 }} viewport={{once: true}} onMouseOver={()=>setShow(true)} onMouseOut={()=>setShow(false)}>
                                <Image src={d.img} width={400} height={550} objectFit="cover" />
                                <div className="inner" >
                                    <motion.h1 initial={{translateY:100,opacity:0}} whileInView={{translateY:0, opacity:1}}>{d.name}</motion.h1>
                                    <motion.p initial={{translateX:100,opacity:0}} whileInView={{translateX:0, opacity:1}} transition={{duration:1,delay:1,type:"spring" ,stiffness:300}}>{d.media}</motion.p>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Influencer;
