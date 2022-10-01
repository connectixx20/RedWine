import { motion } from 'framer-motion'
import { BsInstagram } from "react-icons/bs"
import { MdOutlineDeveloperMode } from "react-icons/md"
import { AiOutlineYoutube } from 'react-icons/ai'
import Digital from './Digital'
import Link from 'next/link'


const Services = () => {
    const services = [
        {
            id: 1,
            name: "Influencer Marketing",
            info: "Quite possibly the earliest mover in the force to be reckoned with promoting space, we have more than seven years of ability in happy creation, relationship building and execution showcasing through powerhouses.",
            icon: <BsInstagram color='#961313' size={40} />,
            link: "influencer"
        },
        {
            id: 2,
            name: "Youtube Marketing",
            info: "YouTube showcasing is a cycle to advance your business through recordings on your YouTube channel. It comprises of various strides, from the structure, as well as marking, of your YouTube channel to delivering recordings for it to run a YouTube promotion crusade.",
            icon: <AiOutlineYoutube color='#961313' size={50} />,
            link: "youtube"
        },
        {
            id: 3,
            name: "Digital Media Marketing",
            info: "We comprehend your objective market, contest and your item/administration contributions to convey areas of strength for a term system for you. We articulate a definite guide for our clients that adjusts them and their accomplices to the 10,000 foot view.",
            icon: <Digital />,
            link: "social"
        },
        {
            id: 4,
            name: "Software Development",
            info: "We comprehend your objective market, contest and your item/administration contributions to convey areas of strength for a term system for you. We articulate a definite guide for our clients that adjusts them and their accomplices to the 10,000 foot view.",
            icon: <MdOutlineDeveloperMode size={50} color="#961313" />,
            link: "software"
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
            opacity: 1
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
            <motion.div className="content" variants={contentVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {
                    services.map((item) => (
                        <Link href={`/services#${item.link}`} passHref key={item.id}>
                            <motion.div className="content__card" key={item.id} variants={cardVarient} >
                                <div className="icon">
                                    {item.icon}
                                </div>
                                <h2>{item.name}</h2>
                                <p>{item.info}</p>
                            </motion.div>
                        </Link>
                    ))
                }
            </motion.div>
        </div>
    )
}

export default Services