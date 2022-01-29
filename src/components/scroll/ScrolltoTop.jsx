import { BsArrowUp } from 'react-icons/bs'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { animateScroll, Link } from 'react-scroll'

const ScrolltoTop = () => {
    const [top, setTop] = useState(0);

    const handler = () => {
        const post = window.pageYOffset
        setTop(post)
    }
    useEffect(() => {
        window.addEventListener("scroll", handler)
    }, [top])
    console.log({ top })
    return (
        <>
            {top > 100 ? (
                <motion.div className={`redwine__scrolltotop`} initial={{ y: 100 }} animate={{ y: 0 }} transition={{duration:1}}>
                    <motion.div className="redwine__scrolltotop-circle"  animate={{ y: [0,20,20,-20,-20,0] }} transition={{repeat: Infinity, duration: 2 }} ></motion.div>
                    <motion.div className="redwine__scrolltotop-circle" animate={{ y: [0,20,20,-20,-20,0] }} transition={{repeat: Infinity, duration: 2 }} ></motion.div>
                    <motion.div whileHover={{ scale: 1.2 }}  >
                        <Link onClick={()=>animateScroll.scrollToTop()}>
                            <BsArrowUp />
                        </Link>
                    </motion.div>
                </motion.div>
            ) : null}
        </>
    );
};

export default ScrolltoTop;
