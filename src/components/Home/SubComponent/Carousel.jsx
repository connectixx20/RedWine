import Link from "react-scroll/modules/components/Link";
import { FiArrowUpRight, FiPlay } from 'react-icons/fi'
import Image from "next/image";
import { motion } from "framer-motion";
import Modal from "../../Modal";
import { useState, useEffect } from "react";

const Carousel = () => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const home=document.querySelector('.redwine__home')

    if(modal){
      home.classList.add("blur")
    }else{
      home.classList.remove("blur")
    }
  }, [modal])
  return (
    <div className="redwine__home-carousel">
      <div className="redwine__home-carousel__detail">
        <motion.div className="redwine__home-carousel__detail-left" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.4 }} >
          <h1>A Fully Integrated Digital Marketing Agency</h1>
        </motion.div>
        <motion.div className="redwine__home-carousel__detail-right" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.4 }} >
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. A animi cum illum dolorum! Dolore, a earum omnis maiores esse quo, vitae unde quae modi consequatur in maxime et ea sed?</h4>
          <motion.div>
            <Link href="/about" >
              <p>Explore More <span><FiArrowUpRight /></span></p>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <motion.div className="redwine__home-carousel__image" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.4 }}>
        <Image src={"https://res.cloudinary.com/redwine/image/upload/v1643463860/Home/photo-1562835155-1fa627c69744_ux2r2u.jpg"} layout="responsive" width={1920} height={1080} objectFit="cover" />
        <div className="play-button" onClick={() => setModal(true)}>
          <div className="play-button__circle">
            <FiPlay />
          </div>
        </div>
      </motion.div>
      {
        modal && (
          <Modal vidUrl="https://res.cloudinary.com/redwine/video/upload/v1643032209/samples/sea-turtle.mp4" setModal={setModal} />
        )
      }
    </div>
  );
};

export default Carousel;