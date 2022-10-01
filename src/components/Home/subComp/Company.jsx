import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';
import Image from 'next/image';
import { ImageUrl } from '../../../../lib/client';
import "swiper/css"

const Company = ({ companies }) => {
    
    return (
        <div className="redwine__home-company">
            <Swiper
                slidesPerView={5}
                spaceBetween={10}
                autoplay={{ delay: 3000, disableOnInteraction: true }}
                modules={[Autoplay]}
                speed={600}
                className="mySwiper"
            >
                {
                    companies?.map(item => (
                        <SwiperSlide key={item?.name}>
                            <div className="item" key={item?.name}>
                                {/* <Image src={"https://res.cloudinary.com/redwine/image/upload/v1662973727/5359861_oa4rhq.png"} width={150} height={100} /> */}
                                <Image {...ImageUrl(item?.image)} width={150} height={100} objectFit="contain" />
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    )
}

export default Company