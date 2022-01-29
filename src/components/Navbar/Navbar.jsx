import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion'
import { links } from "../../db/data";
import { useEffect, useState } from "react";
import { FaTimes, FaAlignRight, FaCaretLeft } from 'react-icons/fa'

const Navbar = () => {
    const [subMenu, setSubMenu] = useState(null);
    const [width, setWidth] = useState(0);
    const [headerScroll, setHeaderScroll] = useState(0);
    const linkVariant = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5
            }
        }
    }

    const itemVariant = {
        hidden: {
            opacity: 0,
            x: width < 650 ? -50 : 50
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


    const handleScroll = () => {
        const post = window.pageYOffset
        setHeaderScroll(post)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [headerScroll])

    return (
        <header className={`redwine__navbar ${headerScroll > 75 ? "sticky" : ""}`}>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ ease: "easeIn", duration: .3 }} className="redwine__navbar-logo" whileHover={{ scale: 1.1 }} >
                <Link passHref href={"/"}>
                    <Image src={"https://res.cloudinary.com/dykwfe4cr/image/upload/v1642744232/logo_upg6p6.png"} width={width < 600 ? headerScroll > 10 ? 200 : 250 : headerScroll > 10 ? 250 : 300} height={width < 600 ? headerScroll > 10 ? 100 : 150 : headerScroll > 10 ? 100 : 150} objectFit="cover" alt="RedWine" />
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
                <motion.ul className="redwine__navbar-links" variants={linkVariant} initial="hidden" animate="show">
                    {links.map((d, i) => (
                        <motion.li className="redwine__navbar-links__item" key={d.name} onMouseOver={() => setSubMenu(d.id)} onMouseOut={() => data?.isSubmenu ? null : setSubMenu(null)} variants={itemVariant} >
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
                                    <motion.ul className={`${data.className} animate__animated animate__zoomIn`} transition={{ type: "spring", duration: 2 }} variants={linkVariant} initial="hidden" animate="show" onMouseIn={() => setSubMenu(d.id)}>
                                        {data.subLink.map((d) => (
                                            <motion.li key={d.mame} variants={itemVariant}>
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
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                ) : null}
                            </>
                        </motion.li>
                    ))}
                    {
                        width < 850 && (
                            <motion.div className="redwine__navbar-links__register" initial={{ scale: 0 }} animate={{ scale: 1 }} whileTap={{ scale: 1.1 }}>
                                <Link href={"/register"} passHref>
                                    <h3>Register</h3>
                                </Link>
                            </motion.div>

                        )
                    }
                </motion.ul>
            )}
            <motion.div className="redwine__navbar-register" animate={{ x: [0, -20, 20, -20, 20, 0] }} whileHover={{ scale: 1.2, color: "#ffffff", outlineColor: "#D12FEB" }} transition={{ type: 'spring' }}>
                <Link href={"/register"} passHref>
                    <h2>Regis<span>ter</span></h2>
                </Link>
            </motion.div>
        </header>
    );
};

export default Navbar;
