import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion'
import { useEffect, useState } from "react";
import { FaTimes, FaAlignRight, FaPlus, FaMinus, FaCaretLeft } from 'react-icons/fa'

const Navbar = () => {
    const [subMenu, setSubMenu] = useState(null);
    const [width, setWidth] = useState(0);
    const links = [
        {
            id: 0,
            name: "About",
            redirect: "about"
        },
        {
            id: 1,
            name: "Influencer",
            redirect: "influencer",
            isSubmenu: true,
            className: "submenu1",
            subLink: [
                {
                    mame: "Linkedin",
                    redirect: "influencer/linkedin"
                },
                {
                    mame: "Facebook",
                    redirect: "influencer/facebook"
                },
                {
                    mame: "Instagram",
                    redirect: "influencer/instagram"
                },
                {
                    mame: "Youtube",
                    redirect: "influencer/youtube"
                },
            ]
        },
        {
            id: 2,
            name: "Contact",
            redirect: "contact"
        },
        // {
        //     id: 3,
        //     name: "Register",
        //     redirect: "register"
        // },
        {
            id: 3,
            name: "Services",
            redirect: "Services",
            isSubmenu: true,
            className: "submenu2",
            subLink: [
                {
                    mame: "Social Media Marketing",
                    redirect: "services/social"
                },
                {
                    mame: "Youtube Marketing",
                    redirect: "services/youtube"
                },
                {
                    mame: "Software Development",
                    redirect: "services/software"
                },

            ]
        },
    ]

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [width, subMenu])
    const data = links[subMenu]

    const [openHamburger, setOpenHamburger] = useState(false);
    const [changeplus, setChangeplus] = useState(false);

    const hamburgerhandler = () => {
        setOpenHamburger(true)
        setSubMenu(null)
    }


    useEffect(() => {

    }, [changeplus, openHamburger])
    console.log({ openHamburger })
    return (
        <header className="redwine__navbar">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ ease: "easeIn", duration: .3 }} className="redwine__navbar-logo" whileHover={{ scale: 1.1 }} >
                <Link passHref href={"/"}>
                    <Image src={"https://res.cloudinary.com/dykwfe4cr/image/upload/v1642744232/logo_upg6p6.png"} width={width < 600 ? 250 : 300} height={width < 600 ? 150 : 200} objectFit="cover" />
                </Link>
            </motion.div>
            <div className="redwine__navbar-hamburger">
                {
                    !openHamburger ? (
                        <motion.div className="redwine__navbar-hamburger__lines" onClick={hamburgerhandler} whileTap={{ transition: { type: "spring", stiffness: 300 } }} >
                            <FaAlignRight />
                        </motion.div>

                    ) : (
                        <div className="redwine__navbar-hamburger__cross" onClick={() => setOpenHamburger(false)} whileTap={{ transition: { type: "spring", stiffness: 300 } }} >
                            <FaTimes />
                        </div>
                    )
                }
            </div>
            {(width < 850 ? openHamburger : true) && (
                <motion.ul className="redwine__navbar-links" transition={{ staggerChildren: 3 }}  >
                    {links.map((d, i) => (
                        <motion.li className="redwine__navbar-links__item" key={d.name} onMouseOver={() => setSubMenu(d.id)} onMouseOut={() => data?.isSubmenu ? null : setSubMenu(null)} initial={{ x: -40 }} animate={{ x: 0 }} >
                            <>
                                <motion.div className="item" onMouseOver={() => d?.id === data?.id && setChangeplus(true)} onMouseOut={() => setChangeplus(false)} >
                                    {/* {width < 850 & d.isSubmenu && (
                                    <p>
                                        {changeplus ? (<FaMinus />) : (
                                            <FaPlus />
                                            )}
                                            </p>
                                )} */}
                                    <motion.div whileHover={{ scale: 1.2, y: -5, x: width < 850 ? -15 : 0 }} transition={{ type: 'spring', stiffness: 300 }}>
                                        <Link href={`/${d.redirect}`} passHref>
                                            <h2>
                                                {d.name}
                                            </h2>
                                        </Link>
                                    </motion.div>
                                    {width < 850 && (
                                        <p>
                                            <FaCaretLeft />
                                        </p>
                                    )}
                                    {data?.id === d.id ? (
                                        <div className="bottom__line">
                                            <motion.span initial={{ x: -10 }} animate={{ x: 0, speed: 100 }} transition={{ duration: .001 }}  ></motion.span>
                                        </div>
                                    ) : null}
                                </motion.div>
                                {data?.isSubmenu & data?.id === d.id ? (
                                    <motion.ul className={`${data.className} animate__animated animate__zoomIn`} transition={{ type: "spring", duration: 2 }} onMouseIn={() => setSubMenu(d.id)}>
                                        {data.subLink.map((d) => (
                                            <li>
                                                <motion.div whileHover={{ scale: 1.1, y: -5, x: width < 850 ? -15 : 15, color: '#D12FEB' }} transition={{ type: 'spring', stiffness: 100 }} >
                                                    <Link passHref href={`/${d.redirect}`}>
                                                        <h3>{d.mame}</h3>
                                                    </Link>
                                                </motion.div>
                                                {width < 850 && (
                                                    <p>
                                                        <FaCaretLeft />
                                                    </p>
                                                )}
                                            </li>
                                        ))}
                                    </motion.ul>
                                ) : null}
                            </>
                        </motion.li>
                    ))}
                    {
                        width<850 && (
                            <motion.div className="redwine__navbar-links__register" initial={{scale:0}} animate={{scale:1}} whileTap={{scale:1.1}}>
                                <Link href={"/register"} passHref>
                                    <h3>Register</h3>
                                </Link>
                            </motion.div>

                        )
                    }
                </motion.ul>
            )}
            <motion.div className="redwine__navbar-register" animate={{ x: [0, -20, 20, -20, 20, 0] }} whileHover={{ scale: 1.2, color: "#ffffff", background: "black", outlineColor: "#D12FEB" }} transition={{ type: 'spring' }}>
                <Link href={"/register"} passHref>
                    <h2>Regis<span>ter</span></h2>
                </Link>
            </motion.div>
        </header>
    );
};

export default Navbar;
