import Image from 'next/image'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import React from 'react';

const Chat = () => {
  return (
    <div className="redwine__chat">

      <div className="redwine__chat-inner" >
        <Tooltip title={<React.Fragment>
          <h2>Chat With Us</h2>
        </React.Fragment>} placement="right">
          <IconButton>
            <a href='https://wa.me/918268949507' target="_blank" rel="noreferrer">
              <Image src={"https://res.cloudinary.com/redwine/image/upload/v1664716751/Redwine/whatsapp_aksguu.png"} width={70} height={70} objectFit={"contain"} />
            </a>
          </IconButton>
        </Tooltip>
      </div>
    </div>
  )
}

export default Chat