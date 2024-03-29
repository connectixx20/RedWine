import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import Image from "next/image";
import { testimonialData as data } from "../../../../db/data";
import { urlFor, ImageUrl } from "../../../../lib/client";

const Testimonial = ({ testimonial }) => {
    const [width, setwidth] = useState(0);
    const [selectedData, setSelectedData] = useState(testimonial[0]);

    useEffect(() => {
        setwidth(window.innerWidth)
    }, [width, selectedData])


    const breakpoints = {
        900: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1600: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        2300: {
            slidesPerView: 4,
            spaceBetween: 30
        },

    }

    console.log({ testimonial })
    return (
        <div className='redwine__home-testimonial'>
            <div className="title">
                <div className="title__inner">
                    <h1>Testimonial</h1>
                    <motion.div className="line" initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1 }} viewport={{ once: true }} />
                </div>
                <div className="showcase"></div>
            </div>
            <div className="redwine__home-testimonial__content">
                {/* <div className="redwine__home-testimonial__content-upper">
                    <motion.div className="title" initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1.4 }} viewport={{ once: true }}>
                        <h1>{selectedData?.name}</h1>
                        <p style={{ color: "#961313", fontWeight: "bold" }}>{selectedData?.company}</p>
                        <p>{selectedData?.content}</p>
                    </motion.div>
                    <motion.div className="video" initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1.4 }} viewport={{ once: true }}>
                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${selectedData?.youtueb_url}`} title="YouTube video player" frameBorder="0" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </motion.div>
                </div> */}
                <div className="redwine__home-testimonial__content-lower">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        modules={[Pagination, Navigation, Autoplay]}
                        speed={600}
                        navigation
                        className="mySwiper"
                        breakpoints={breakpoints}
                    >
                        {testimonial.map((d) => (
                            <SwiperSlide key={d.name} onClick={() => setSelectedData(d)} >
                                <div className={`card`} >
                                    <div className="video" >
                                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${d.youtube_url}`} title="YouTube video player" frameBorder="0" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;