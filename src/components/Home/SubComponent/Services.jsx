import { MdDeveloperMode } from 'react-icons/md'
import { FaYoutube } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'
import { motion } from 'framer-motion';
import Digital from './Digital';
import { useState,useEffect } from 'react';

const Services = () => {

    const services = [
        {
            id: 1,
            name: "Software Development",
            info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat inventore earum id. Nihil quisquam quam aliquid maxime aspernatur iste dolorum possimus! Aliquam optio quia quos quasi aut. Eaque, nesciunt enim?",
            icon: <MdDeveloperMode />
        },
        {
            id: 2,
            name: "Youtube Marketing",
            info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat inventore earum id. Nihil quisquam quam aliquid maxime aspernatur iste dolorum possimus! Aliquam optio quia quos quasi aut. Eaque, nesciunt enim?",
            icon: <FaYoutube />
        },
        {
            id: 3,
            name: "Digital Media Marketing",
            info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat inventore earum id. Nihil quisquam quam aliquid maxime aspernatur iste dolorum possimus! Aliquam optio quia quos quasi aut. Eaque, nesciunt enim?",
            icon: <Digital />
        },
    ]

    const introTItle = {
        visible: {
            x: -0,
            opacity: 1,
            transition: {
                duration: 1.4
            }
        },
        hidden: {
            x: -100,
            opacity: 0
        },
    }
    const introDetail = {
        visible: {
            x: -0,
            opacity: 1,
            transition: {
                duration: 1.4
            }

        },
        hidden: {
            x: 100,
            opacity: 0
        },
    }

    const contentVariant = {
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.7
            }
        },
        hidden: {
            opacity: 0
        }
    }

    const cardVarient = {
        visible: {
            y: 0,
            transition: {
                duration: 1.3
            },
            opacity:1
        },
        hidden: {
            y: 100,
            opacity: 0,
        }
    }

    const [width, setWidth] = useState(0);

    useEffect(()=>{
        setWidth(window.innerWidth)
    },[width])

    return (
        <div className='redwine__home-services'>
            <div className="redwine__home-services-intro">
                <motion.div className="redwine__home-services-intro__title" variants={introTItle} whileInView="visible" initial="hidden" viewport={{ once: true }}>
                    <h1>
                        Service We Can
                        <span>Help You</span>
                    </h1>
                </motion.div>
                <motion.div className="redwine__home-services-intro__detail" variants={introDetail} whileInView="visible" initial="hidden" viewport={{ once: true }}>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit perspiciatis delectus itaque at! Assumenda obcaecati asperiores explicabo </p>
                </motion.div>
            </div>
            <motion.div className="redwine__home-services__content" variants={contentVariant} >
                {services.map((d,i) => (
                    <motion.div className="redwine__home-services__content-card" variants={cardVarient} key={d.name} initial="hidden" whileInView={{y:0,opacity:1}} transition={{duration: 1.3 ,delay: i * 0.7 }} >
                        {d.icon}
                        <div className="detail">
                            <h1>{d.name}</h1>
                            <p>{d.info}</p>
                            <motion.div className="detail__redirect" whileHover={{scale:1.2,x:20,y:-5}} style={{cursor:"pointer"}}>
                                <p>Learn More</p>
                                <FiArrowUpRight />
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Services;
