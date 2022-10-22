import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { setwinWidth,setShowRegister } from '../../../redux/slices/util'

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { HiMenuAlt3 } from "react-icons/hi"
import Link from 'next/link'
import { useRouter } from 'next/router'
import RegModal from '../Register/modal'

const Navbar = () => {
    const [itemDetail, setItemDetail] = useState({ id: null })
    const dispatch = useDispatch()
    const router = useRouter()
    const { winWidth,form } = useSelector((state) => state.util)
    const [showMobMenu, setShowMobMenu] = useState(false)
    // const [showRegister, setShowRegister] = useState(false)

    const headerRef = useRef()
    const navItem = [
        {
            id: 0,
            name: "Home",
            link: ""
        },
        {
            id: 1,
            name: "About Us",
            link: "about"
        },
        {
            id: 2,
            name: "Influencer",
            link: "influencer",
            isSubmenu: true,
            subItem: [
                {
                    id: 0,
                    name: "LinkedIn Influencers",
                    link: "linkedin"
                },
                {
                    id: 1,
                    name: "Facebook Influencers",
                    link: "facebook"
                },
                {
                    id: 2,
                    name: "Instagram Influencers",
                    link: "instagram"
                },
                {
                    id: 3,
                    name: "Youtube Influencers",
                    link: "youtube"
                },
            ]
        },
        {
            id: 3,
            name: "Contact",
            link: "contact"
        },
        {
            id: 4,
            name: "Services",
            link: "services",
            isSubmenu: true,
            subItem: [
                {
                    id: 0,
                    name: "Youtube Marketing",
                    link: "youtube"
                },
                {
                    id: 1,
                    name: "Digital Marketing",
                    link: "social"
                },
                {
                    id: 2,
                    name: "Influencer Marketing",
                    link: "influencer"
                },
                {
                    id: 3,
                    name: "Website Development",
                    link: "software"
                },
            ]
        },
    ]


    useEffect(() => {
        dispatch(setwinWidth(window.innerWidth))
        
        window.onscroll = (() => {
            if (window.pageYOffset >= 66) {
                headerRef?.current?.classList?.add("sticky")
            } else {
                headerRef?.current?.classList?.remove("sticky");
            }
        })
    }, [])

    useEffect(()=>{

    },[form])


    function isActivePage(item) {
        return router.pathname === `/${item.link}`
    }

    const mobClickHandler = () => {
        setShowMobMenu(item => !item)
        setItemDetail({ id: null })
    }
    return (
        <>
            <header className="redwine__navbar" ref={headerRef} >
                <div className="redwine__navbar-logo">
                    <Image src={"/logo.png"} width={winWidth < 850 ? 130 : 150} height={winWidth < 850 ? 80 : 100} objectFit="contain" loading="eager" />
                </div>
                <div className="redwine__navbar-content">
                    <div className="link" >
                        {
                            navItem.map((item) => (
                                <div className={`link__item ${isActivePage(item) ? "active" : ""}`} key={item.id} onMouseOver={() => setItemDetail({ id: item.id })} onMouseOut={() => !item.isSubmenu && setItemDetail({ id: null })}>
                                    <Link href={`/${item.link}`} >
                                        <motion.h1 whileTap={{ y: -5 }} onMouseOut={() => item.isSubmenu && setItemDetail({ id: null })}>{item.name}</motion.h1 >

                                    </Link>
                                    <div className={`line ${(item.id === itemDetail.id || isActivePage(item)) ? "active" : ""}`} />
                                    <AnimatePresence>

                                        {
                                            (item.isSubmenu && item.id === itemDetail.id) && (
                                                <motion.div className="option" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} onMouseOut={() => item.isSubmenu && setItemDetail({ id: null })}>
                                                    {
                                                        item.subItem.map((subItem) => (
                                                            <Link href={`/${item.link}#${subItem.link}`} key={item.id}>
                                                                <motion.div className="option__item" whileTap={{ x: 5 }}>
                                                                    <h2>{subItem.name}</h2>
                                                                </motion.div>
                                                            </Link>
                                                        ))
                                                    }
                                                </motion.div>
                                            )
                                        }
                                    </AnimatePresence>
                                </div>
                            ))
                        }
                    </div>

                    <motion.div className="register" whileTap={{ scale: .97 }} onClick={() => dispatch(setShowRegister(true))}>
                        <h1>Register</h1>
                    </motion.div>


                    {
                        winWidth < 850 && (
                            <div onClick={mobClickHandler}>
                                {
                                    !showMobMenu ? (
                                        <HiMenuAlt3 size={35} />

                                    ) : (
                                        <AiOutlinePlus size={35} className="cross" />
                                    )
                                }
                            </div>
                        )
                    }

                </div>
                <AnimatePresence>
                    {

                        showMobMenu && (
                            <motion.div className="mob__link" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }}>
                                {
                                    navItem.map((item) => (
                                        <div className="mob__link-item" key={item.id} onClick={() => setItemDetail({ id: itemDetail.id === item.id ? null : item.id })} >
                                            <Link href={`/${item.link}`}>
                                                <motion.h1 whileTap={{ x: 5 }}>{item.name}</motion.h1>
                                            </Link>
                                            {
                                                item.isSubmenu && (
                                                    <>
                                                        {
                                                            itemDetail.id === item.id ? (
                                                                <AiOutlineMinus size={20} />

                                                            ) : (
                                                                <AiOutlinePlus size={20} />
                                                            )
                                                        }
                                                    </>
                                                )
                                            }
                                            {
                                                (item.isSubmenu && item.id === itemDetail.id) && (
                                                    <motion.div className="option" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} >
                                                        {
                                                            item.subItem.map((subItem) => (
                                                                <Link href={`/${item.link}#${subItem.link}`} key={item.id}>
                                                                    <motion.div className="option__item" whileTap={{ x: 5 }}>
                                                                        <h2>{subItem.name}</h2>
                                                                    </motion.div>
                                                                </Link>
                                                            ))
                                                        }
                                                    </motion.div>
                                                )
                                            }
                                        </div>
                                    ))
                                }

                                <motion.div className="mob__link-register" whileTap={{ scale: .96 }} onClick={() => dispatch(setShowRegister(true))}>
                                    <h2>Register</h2>
                                </motion.div>

                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </header>
            <AnimatePresence>

                {
                    form && (
                        <RegModal  />
                    )
                }
            </AnimatePresence>
        </>
    )
}

export default Navbar