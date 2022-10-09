import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';
import Image from 'next/image';
import { ImageUrl } from '../../../../lib/client';
import "swiper/css"
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const Company = ({ companies }) => {
    const {winWidth}=useSelector(state=>state.util)
    const breakpoint={

        300:{
            slidesPerView:2
        },
        480:{
            slidesPerView:3
        },
        750:{
            slidesPerView:4
        },
        1000:{
            slidesPerView:5
        }
    }
    return (
        <div className="redwine__home-company">
            <div className="title">
                <div className="title__inner">
                <h1>Companies We Worked With</h1>
                    <motion.div className="line" initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1 }} viewport={{ once: true }} />
                </div>
                <div className="showcase"></div>
            </div>
            <Swiper
                slidesPerView={5}
                spaceBetween={10}
                autoplay={{ delay: 3000, disableOnInteraction: true }}
                modules={[Autoplay]}
                speed={600}
                className="mySwiper"
                breakpoints={breakpoint}
            >
                {
                    companies?.map(item => (
                        <SwiperSlide key={item?.name}>
                            <div className="item" key={item?.name}>
                                {/* <Image src={"https://res.cloudinary.com/redwine/image/upload/v1662973727/5359861_oa4rhq.png"} width={150} height={100} /> */}
                                <Image {...ImageUrl(item?.image)} width={ winWidth<600 ? 130  : 150} height={ winWidth<600 ? 70 :100} objectFit="contain" />
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    )
}

export default Company