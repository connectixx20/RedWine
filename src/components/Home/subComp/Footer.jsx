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
            link: "https://instagram.com/redwinedigital?igshid=YmMyMTA2M2Y="
        },
        {
            id: 1,
            name: "Facebook",
            icon: <FaFacebookF />,
            link: "https://www.facebook.com/redwinedigital1"
        },
        {
            id: 2,
            name: "Twitter",
            icon: <AiOutlineTwitter />,
            link: "https://twitter.com/RedWineDigital1?t=beWqFeTD60nkOfOgy73u7g&s=09"
        },
        {
            id: 3,
            name: "LinkedIn",
            icon: <FaLinkedinIn />,
            link: "https://www.linkedin.com/company/redwine-digital"
        },
    ]
    return (
        <div className="redwine__footer">
            <div className="upper">
                <div className="detail">
                    <Image src={"/logo1.png"} width={150} height={90} objectFit="contain" />
                    <div className="detail__address">
                        <p>CRYSTAL PLAZA, New Link Rd, Phase D, Shastri Nagar,<br /> Andheri West, Andheri, Maharashtra 400053 </p>
                        <p>info@redwine.digital <br />Redwinedigital16@gmail.com  </p>
                        <p>+91 82689 49507 </p>
                    </div>
                </div>
                <div className="quick">
                    <div className="quick__title">
                        <h2>Quick Link</h2>
                    </div>
                    <div className="quick__content content">
                        {quickLinks.map((item) => (
                            <Link className="item" href={`/${item.url}`} key={item.name}>
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
                            <Link className="item" href={`/influencer#${item.url}`} key={item.name}>
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
                            <Link className="item" href={`/services#{item.url}`} key={item.name}>
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
                        2018 Redwine Digital
                    </p>
                </div>
                <div className="link">
                    <Link href={"/privacy"}>
                        <motion.a whileTap={{y:-5}}>Privacy Policy</motion.a>
                    </Link>
                    <Link href={"/privacy"}>
                        <motion.a whileTap={{y:-5}}>Legals</motion.a>
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