import { MdDeveloperMode } from 'react-icons/md'
import { FaYoutube } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'
import { motion } from 'framer-motion';
import Digital from './Digital';

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
        // {
        //     id: 3,
        //     name: "Digital Media Marketing",
        //     info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat inventore earum id. Nihil quisquam quam aliquid maxime aspernatur iste dolorum possimus! Aliquam optio quia quos quasi aut. Eaque, nesciunt enim?",
        //     icon: <Digital />
        // },
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
            opacity: 1
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
            opacity: 1
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
            <motion.div className="redwine__home-services__content" variants={contentVariant} initial="hidden" whileInView="visible">
                {services.map((d) => (
                    <motion.div className="redwine__home-services__content-card" variants={cardVarient} key={d.name}>
                        {d.icon}
                        <div className="detail">
                            <h1>{d.name}</h1>
                            <p>{d.info}</p>
                            <div className="detail__redirect">
                                <p>Learn More</p>
                                <FiArrowUpRight />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Services;
