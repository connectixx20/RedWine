import {FaTimes} from 'react-icons/fa'
import { motion } from 'framer-motion';

const Modal = ({vidUrl="",setModal}) => {
  return (
      <div className="redwine__modal"  >
          <motion.div className="redwine__modal-element" >
              <motion.video src={vidUrl} autoPlay muted initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:.4}} />
          </motion.div>
          <motion.div className="redwine__modal-close" onClick={()=>setModal(false)} initial={{x:-200,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:.4}}>
              <FaTimes />
          </motion.div>
      </div>
  );
};

export default Modal;
