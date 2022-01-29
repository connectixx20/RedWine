import Link from "react-scroll/modules/components/Link";
import { FiArrowUpRight, FiPlay } from 'react-icons/fi'
import Image from "next/image";
import { motion } from "framer-motion";

const Carousel = () => {
  return (
    <div className="redwine__home-carousel">
      <div className="redwine__home-carousel__detail">
        <motion.div className="redwine__home-carousel__detail-left" initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1.4}} >
          <h1>A Fully Integrated Digital Marketing Agency</h1>
        </motion.div>
        <motion.div className="redwine__home-carousel__detail-right" initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1.4}} >
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. A animi cum illum dolorum! Dolore, a earum omnis maiores esse quo, vitae unde quae modi consequatur in maxime et ea sed?</h4>
          <motion.div >
            <Link href="/about" >
              <p>Explore More <span><FiArrowUpRight /></span></p>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <motion.div className="redwine__home-carousel__image" initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:2}}>
        <Image src={"https://res.cloudinary.com/redwine/image/upload/v1643464160/Home/photo-1606857521015-7f9fcf423740_zlhjwc.jpg"} layout="responsive" width={1920} height={1080} objectFit="cover" />
        <div className="play-button">
          <div className="play-button__circle">
            <FiPlay />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Carousel;