
import React from 'react'
import Link from 'next/link'
import SvgComponent from './Animation'
import Infleuncer from './Infleuncer'
import Social from './Social'
import Youtube from './Youtube'
import Software from './Software'

const Service = ({ channel }) => {


    return (
        <div className="redwine__service" >
            <div className="redwine__service-intro">
                <div className="left">
                    <h1 >Lets get to know our services -  Influencer Marketing, Talent Management, Video Production and Social Media Management, all under one roof. </h1>
                    <div className="left__list">
                        <Link href={"/services#youtube"}>
                            <h2> <span style={{ fontSize: "2rem" }}>👉</span>  Youtube Marketing</h2>
                        </Link>
                        <Link href={"/services#social"}>
                            <h2> <span style={{ fontSize: "2rem" }}>👉</span>  Digital Marketing</h2>
                        </Link>
                        <Link href={"/services#influencer"}>
                            <h2> <span style={{ fontSize: "2rem" }}>👉</span>  Influencer Marketing</h2>
                        </Link>
                        <Link href={"/services#software"}>
                            <h2> <span style={{ fontSize: "2rem" }}>👉</span>  Software Developemnt</h2>
                        </Link>
                    </div>

                </div>
                <div className="right">
                    <SvgComponent />
                </div>
            </div>
            <div className="astrodivider"><div className="astrodividermask"></div><span><i>&#10038;</i></span></div>
            <Youtube channel={channel} />
            <div className="astrodivider"><div className="astrodividermask"></div><span><i>&#10038;</i></span></div>
            <Social />
            <div className="astrodivider"><div className="astrodividermask"></div><span><i>&#10038;</i></span></div>
            <Infleuncer />
            <div className="astrodivider"><div className="astrodividermask"></div><span><i>&#10038;</i></span></div>
            <Software />
        </div>
    )
}

export default Service