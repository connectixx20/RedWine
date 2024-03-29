import Image from 'next/image'
import { motion } from 'framer-motion'
import { setShowRegister } from '../../../../redux/slices/util'
import { useDispatch } from 'react-redux'

const Intro = () => {
  const dispatch=useDispatch()

  return (
    <div className="redwine__home-intro">
        <div className="detail">
            <motion.h1 initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1}} >RedWine Digital <br />Digital Marketing And Advertising Agency </motion.h1>
            <motion.p initial={{y:40,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1}}>We&apos;re a digital marketing agency & influencer agency. We pride ourselves in bringing together data-led performance, real human relationships, expert creative strategy, authentic engaging content, and laser-sharp paid media targeting.</motion.p>
            <motion.div className="btn" initial={{y:60,opacity:0}} animate={{y:0,opacity:1,transition:{duration:1}}}  whileTap={{scale:0.97}} onClick={()=>dispatch(setShowRegister(true))}>
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