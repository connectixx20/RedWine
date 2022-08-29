import Image from "next/image"
import Link from "next/link"
import { quickLinks, serviceLinks, influencerLinks } from "../../../../db/data"
import { motion } from "framer-motion"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai"

const Footer = () => {
    const socialLink = [
        {
            id: 0,
            name: "Instagram",
            icon: <AiFillInstagram />,
            link: "https://instagram.com"
        },
        {
            id: 1,
            name: "Facebook",
            icon: <FaFacebookF />,
            link: "https://facebook.com"
        },
        {
            id: 2,
            name: "Twitter",
            icon: <AiOutlineTwitter />,
            link: "https://twitter.com"
        },
        {
            id: 3,
            name: "LinkedIn",
            icon: <FaLinkedinIn />,
            link: "https://linkedIn.com"
        },
    ]
    return (
        <div className="redwine__footer">
            <div className="upper">
                <div className="detail">
                    <Image src={"/logo.png"} width={150} height={90} objectFit="contain" />
                    <div className="detail__address">
                        <p>102, 372, Jyoti Chamber, Narshi Matha Street, <br /> Opp Mandvi Bank, Masjid Bunder (east)</p>
                        <p>+91 9948938438</p>
                        <p>info@redwine.digital</p>
                    </div>
                </div>
                <div className="quick">
                    <div className="quick__title">
                        <h2>Quick Link</h2>
                    </div>
                    <div className="quick__content content">
                        {quickLinks.map((item) => (
                            <Link className="item" href={`/${item.url}`}>
                                <motion.a whileTap={{x:5}}>{item.name}</motion.a>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="influencer">
                    <div className="influencer__title">
                        <h2>Influencer</h2>
                    </div>
                    <div className="influencer__content content">
                        {influencerLinks.map((item) => (
                            <Link className="item" href={`/influencer/${item.url}`}>
                                <motion.a whileTap={{x:5}}>{item.name}</motion.a>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="services">
                    <div className="services__title">
                        <h2>Services</h2>
                    </div>
                    <div className="services__content content">
                        {serviceLinks.map((item) => (
                            <Link className="item" href={`/services/${item.url}`}>
                                <motion.a whileTap={{x:5}}>{item.name}</motion.a>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="divider" />
            <div className="lower">
                <div className="copyright">
                    <p>
                        All rights reserved
                        &#169;
                        2022 Redwine Digital
                    </p>
                </div>
                <div className="link">
                    <Link href={"/privacy"}>
                        <motion.a whileTap={{y:-5}}>Privacy Policy</motion.a>
                    </Link>
                    <Link href={"/terms"}>
                        <motion.a whileTap={{y:-5}}>Terms & Condition</motion.a>
                    </Link>
                </div>
                <div className="social">
                    {
                        socialLink.map((item) => (
                            <motion.a className="item" key={item.id} href={item.link} target="__blank" rel="noreferrer" whileTap={{scale:.95}}>
                                {item.icon}
                            </motion.a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Footer