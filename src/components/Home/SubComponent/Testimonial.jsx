import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import Image from "next/image";

const Testimonial = () => {
    const [width, setwidth] = useState(0);

    const data = [
        {
            id: 1,
            img: "https://res.cloudinary.com/redwine/image/upload/v1643723869/Home/photo-1570612861542-284f4c12e75f_olvy7k.jpg",
            name: "Jhon McAffe",
            vid: "aWJgIETz-Kk",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aperiam minus quis illum quam optio vitae, id dolorum maxime ipsum consequatur numquam beatae officia consectetur animi commodi alias nesciunt aspernatur!",
            company: "McAffee"
        },
        {
            id: 2,
            img: "https://res.cloudinary.com/redwine/image/upload/v1643723869/Home/photo-1570612861542-284f4c12e75f_olvy7k.jpg",
            name: "Dark Seid",
            vid: "UfuJ3D5NnJU",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aperiam minus quis illum quam optio vitae, id dolorum maxime ipsum consequatur numquam beatae officia consectetur animi commodi alias nesciunt aspernatur!",
            company: "McAffee"
        },
        {
            id: 3,
            img: "https://res.cloudinary.com/redwine/image/upload/v1643723869/Home/photo-1570612861542-284f4c12e75f_olvy7k.jpg",
            name: "Jhon McAffe",
            vid: "aWJgIETz-Kk",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aperiam minus quis illum quam optio vitae, id dolorum maxime ipsum consequatur numquam beatae officia consectetur animi commodi alias nesciunt aspernatur!",
            company: "McAffee"
        },
        {
            id: 4,
            img: "https://res.cloudinary.com/redwine/image/upload/v1643723869/Home/photo-1570612861542-284f4c12e75f_olvy7k.jpg",
            name: "DarkSeid",
            vid: "UfuJ3D5NnJU",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aperiam minus quis illum quam optio vitae, id dolorum maxime ipsum consequatur numquam beatae officia consectetur animi commodi alias nesciunt aspernatur!",
            company: "McAffee"
        },
        {
            id: 5,
            img: "https://res.cloudinary.com/redwine/image/upload/v1643723869/Home/photo-1570612861542-284f4c12e75f_olvy7k.jpg",
            name: "Jhon McAffe",
            vid: "aWJgIETz-Kk",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aperiam minus quis illum quam optio vitae, id dolorum maxime ipsum consequatur numquam beatae officia consectetur animi commodi alias nesciunt aspernatur!",
            company: "McAffee"
        },
        {
            id: 6,
            img: "https://res.cloudinary.com/redwine/image/upload/v1643723869/Home/photo-1570612861542-284f4c12e75f_olvy7k.jpg",
            name: "Jhon McAffe",
            vid: "UfuJ3D5NnJU",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aperiam minus quis illum quam optio vitae, id dolorum maxime ipsum consequatur numquam beatae officia consectetur animi commodi alias nesciunt aspernatur!",
            company: "McAffee"
        },
    ]
    const [selectedData, setSelectedData] = useState(data[0]);

    useEffect(() => {
        setwidth(window.innerWidth)
    }, [width, selectedData])

    console.log({ selectedData })

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
            <div className="redwine__home-testimonial__title">
                <motion.h1 initial={{ x: width < 700 ? -100 : -500, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1.4 }} viewport={{ once: true }}>What People Says</motion.h1>
                <motion.span initial={{ width: 0, opacity: 0 }} whileInView={{ width: width < 700 ? 140 : 170, opacity: 1 }} transition={{ duration: 1.4, delay: 2, type: "spring", stiffness: 300 }} viewport={{ once: true }}></motion.span>
            </div>
            <div className="redwine__home-testimonial__content">
                <div className="redwine__home-testimonial__content-upper">
                    <motion.div className="title" initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1.4}}>
                        <h1>{selectedData?.name}</h1>
                        <p style={{color:"#961313",fontWeight:"bold"}}>-{selectedData?.company}</p>
                        <p>{selectedData?.info}</p>
                    </motion.div>
                    <motion.div className="video" initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1.4}}>
                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${selectedData?.vid}`} title="YouTube video player" frameBorder="0" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </motion.div>
                </div>
                <div className="redwine__home-testimonial__content-lower">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        // autoplay={{ delay: 3000, disableOnInteraction: true }}
                        modules={[Pagination, Navigation, Autoplay]}
                        speed={600}
                        navigation
                        className="mySwiper"
                        breakpoints={breakpoints}
                    >
                        {data.map((d) => (
                            <SwiperSlide key={d.name} onClick={() => setSelectedData(d)} >
                                <motion.div className={`card ${selectedData.id === d.id && "card-show"}`} initial={{x:50,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay: d.id <6 ? d.id  * 0.3:  0.3}}>  
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
