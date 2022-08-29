import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import Image from "next/image";
import { testimonialData as data } from "../../../../db/data";

const Testimonial = () => {
    const [width, setwidth] = useState(0);
    const [selectedData, setSelectedData] = useState(data[0]);

    useEffect(() => {
        setwidth(window.innerWidth)
    }, [width, selectedData])


    const breakpoints = {
        350: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        750: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1100: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        1550: {
            slidesPerView: 5,
            spaceBetween: 30
        },
        2100: {
            slidesPerView: 6,
            spaceBetween: 50
        },
        2400: {
            slidesPerView: 7,
            spaceBetween: 100
        },

    }
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
                <div className="redwine__home-testimonial__content-upper">
                    <motion.div className="title" initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1.4}} viewport={{once:true}}>
                        <h1>{selectedData?.name}</h1>
                        <p style={{color:"#961313",fontWeight:"bold"}}>{selectedData?.company}</p>
                        <p>{selectedData?.info}</p>
                    </motion.div>
                    <motion.div className="video" initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1.4}} viewport={{once:true}}>
                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${selectedData?.vid}`} title="YouTube video player" frameBorder="0" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </motion.div>
                </div>
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
                        {data.map((d) => (
                            <SwiperSlide key={d.name} onClick={() => setSelectedData(d)} >
                                <motion.div className={`card ${selectedData.id === d.id && "card-show"}`} >  
                                    <Image src={d.img} width={300} height={200} objectFit="contain"  />
                                    <div className="card__title">
                                        <h2>{d.name}</h2>
                                        <p >{d.company}</p>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;