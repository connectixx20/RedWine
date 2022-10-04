import Image from 'next/image'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import React from 'react';
import { useSelector } from 'react-redux';

const Chat = () => {
  const {winWidth}=useSelector(state=>state.util)
  return (
    <div className="redwine__chat">

      <div className="redwine__chat-inner" >
        <Tooltip title={<React.Fragment>
          <h2>Chat With Us</h2>
        </React.Fragment>} placement="right">
          <IconButton>
            <a href='https://wa.me/918268949507' target="_blank" rel="noreferrer">
              <Image src={"https://res.cloudinary.com/redwine/image/upload/v1664716751/Redwine/whatsapp_aksguu.png"} width={ winWidth<500 ? 55 : 70} height={ winWidth<500 ? 55 : 70} objectFit={"contain"} />
            </a>
          </IconButton>
        </Tooltip>
      </div>
    </div>
  )
}

export default Chat