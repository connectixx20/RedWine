import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Intersection from "../../../utils/Intersection";
import { influencerLinks, serviceLinks, quickLinks } from "../../db/data";

const Footer = () => {
    const [width, setWidth] = useState(0);
    const [inView, setInView] = useState(false);
    const animation=useAnimation()
    
    
    const icons = [
        { 
            id: 1,
            data: <FaInstagram />,
        },
        {
            id: 2,
            data:  <FaFacebook />,
        },
        {
            id: 3,
            data: <FaLinkedin />,
        },
        {
            id: 4,
            data: <FaTwitter />
        }
    ]
    
    const linkVariant = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.7
            }
        }
    }
    
    const itemVariant = {
        hidden: {
            opacity: 0,
            x: 50
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                type: "spring",
                stiffness: 300
            },
        }
        
    }

    useEffect(() => {
        setWidth(window.innerWidth)

        if(inView){
            animation.start("show")
        }
        if(!inView){
            animation.start("hidden")
        }
    }, [width, inView,animation])

    console.log({ inView })
    return (
        <Intersection setInview={setInView}>
            
            <footer className='redwine__footer'>
                <div className="redwine__footer-detail">
                    <Image src={"https://res.cloudinary.com/redwine/image/upload/v1643198813/logo/logo_xb6txg.png"} width={width < 600 ? 120 : 180} height={width < 600 ? 80 : 80} objectFit="contain" alt="RedWine" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores molestias maxime, quod, ad dolorum laborum iure cum aut totam suscipit, voluptatum cumque repellendus eum esse corrupti obcaecati architecto tempora sed!</p>
                    <motion.div className="redwine__footer-detail__social" variants={linkVariant} initial="hidden" animate={animation} >
                        {icons.map((d) => (
                            <motion.a href="#" target="_blank" variants={itemVariant} key={d.id}>
                                <motion.div whileHover={{ x: 5, y: -5, color: "red" }} transition={{ type: "spring", stiffness: 300 }}>
                                    {d.data}
                                </motion.div>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
                <div className="redwine__footer-links">
                    <div className="redwine__footer-links__content">
                        <div className="redwine__footer-links__content-heading">
                            <h3>Quick Links</h3>
                            <span></span>
                        </div>
                        <motion.div variants={linkVariant} initial="hidden" animate={animation}>
                            {quickLinks.map((d) => (
                                <motion.div variants={itemVariant} >
                                    <Link href={`/${d.url}`} key={d.name}>
                                        <motion.h4 whileHover={{ color: "red", x: 20, y: -5, scale: 1.2 }}>{d.name}</motion.h4>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                    <div className="redwine__footer-links__influencer">
                        <div className="redwine__footer-links__influencer-heading">
                            <h3>Influencer</h3>
                            <span></span>
                        </div>
                        <motion.div variants={linkVariant} initial="hidden" animate={animation}>
                            {influencerLinks.map((d) => (
                                <motion.div variants={itemVariant}  key={d.name}>
                                    <Link href={`/${d.url}`} key={d.name}>
                                        <motion.h4 whileHover={{ color: "red", x: 20, y: -5, scale: 1.2 }}>{d.name}</motion.h4>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                    <div className="redwine__footer-links__services">
                        <div className="redwine__footer-links__services-heading">
                            <h3>Services</h3>
                            <span></span>
                        </div>
                        <motion.div variants={linkVariant} initial="hidden" animate={animation}>
                            {serviceLinks.map((d) => (
                                <motion.div variants={itemVariant} >
                                    <Link href={`/${d.url}`} key={d.name}>
                                        <motion.h4 whileHover={{ color: "red", x: 20, y: -5, scale: 1.2 }}>{d.name}</motion.h4>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </footer>
        </Intersection>
    );
};

export default Footer;
