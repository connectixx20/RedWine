import { motion } from 'framer-motion'
import { MdOutlineDeveloperMode } from "react-icons/md"
import { AiOutlineYoutube } from 'react-icons/ai'
import Digital from './Digital'


const Services = () => {
    const services = [
        {
            id: 1,
            name: "Software Development",
            info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat inventore earum id. Nihil quisquam quam aliquid maxime aspernatur iste dolorum possimus! Aliquam optio quia quos quasi aut. Eaque, nesciunt enim?",
            icon: <MdOutlineDeveloperMode color='#961313' size={50} />
        },
        {
            id: 2,
            name: "Youtube Marketing",
            info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat inventore earum id. Nihil quisquam quam aliquid maxime aspernatur iste dolorum possimus! Aliquam optio quia quos quasi aut. Eaque, nesciunt enim?",
            icon: <AiOutlineYoutube color='#961313' size={50}  />
        },
        {
            id: 3,
            name: "Digital Media Marketing",
            info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat inventore earum id. Nihil quisquam quam aliquid maxime aspernatur iste dolorum possimus! Aliquam optio quia quos quasi aut. Eaque, nesciunt enim?",
            icon: <Digital />
        },
    ]

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
        <div className="redwine__home-services">
            <div className="title">
                <div className="title__inner">
                    <h1>Our Services</h1>
                    <motion.div className="line" initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1 }} viewport={{ once: true }} />
                </div>
                <div className="showcase"></div>
            </div>
            <motion.div className="content" variants={contentVariant} initial="hidden"  whileInView="visible"  viewport={{once:true}}>
                {
                    services.map((item) => (
                        <motion.div className="content__card" key={item.id} variants={cardVarient} >
                            <div className="icon">
                                {item.icon}
                            </div>
                            <h2>{item.name}</h2>
                            <p>{item.info}</p>
                        </motion.div>
                    ))
                }
            </motion.div>
        </div>
    )
}

export default Services