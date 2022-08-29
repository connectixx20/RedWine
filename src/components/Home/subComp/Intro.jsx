import Image from 'next/image'
import { motion } from 'framer-motion'

const Intro = () => {
  return (
    <div className="redwine__home-intro">
        <div className="detail">
            <motion.h1 initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1}} >RedWine Degital <br />A Influencer Marketing Company</motion.h1>
            <motion.p initial={{y:40,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae incidunt nam quibusdam. Magnam beatae nobis iste molestiae quia. Cum ea nostrum nemo numquam, esse at perspiciatis ex alias beatae similique?</motion.p>
            <motion.div className="btn" initial={{y:60,opacity:0}} animate={{y:0,opacity:1,transition:{duration:1}}}  whileTap={{scale:0.97}}>
                <h2>Register</h2>
            </motion.div>
        </div>
        <motion.div className="image" initial={{x:50,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1}}>
            <Image src={"https://res.cloudinary.com/dykwfe4cr/image/upload/v1661270661/Social_strategy-bro_ugbbio.png"} width={800} height={550} objectFit="cover" loading="eager" />
        </motion.div>
    </div>
  )
}

export default Intro