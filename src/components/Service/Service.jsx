import { motion } from 'framer-motion'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setShowRegister } from '../../../redux/slices/util'
import SvgComponent from './Animation'
import Infleuncer from './Infleuncer'
import Social from './Social'
import Youtube from './Youtube'

const Service = () => {
    const dispatch = useDispatch()

    return (
        <div className="redwine__service" >
            <div className="redwine__service-intro">
                <div className="left">
                    <h1>Lorem ipsum dolor  adipisicing elit. Sint explicabo reiciendis ipsum <br /> pariatur praesentium saepe </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque distinctio asperiores reprehenderit itaque aliquam laboriosam, ad maiores, deserunt quae sequi sapiente minus et magni harum! Pariatur cumque eligendi velit eaque.</p>

                    <motion.div className="register" whileTap={{ scale: .97 }} onClick={() => dispatch(setShowRegister(true))}>
                        <h3>Register</h3>
                    </motion.div>
                </div>
                <div className="right">
                    <SvgComponent />
                </div>
            </div>
            <div className="astrodivider"><div className="astrodividermask"></div><span><i>&#10038;</i></span></div>
            <Youtube />
            <div className="astrodivider"><div className="astrodividermask"></div><span><i>&#10038;</i></span></div>
            <Social />
            <div className="astrodivider"><div className="astrodividermask"></div><span><i>&#10038;</i></span></div>
            <Infleuncer />
        </div>
    )
}

export default Service