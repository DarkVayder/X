import React, { forwardRef } from "react";
import { Avatar } from '@mui/material';
import "./Post.css";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

const Post = forwardRef (({ 
  displayName, 
  username, 
  verified, 
  text,
  image,
  avatar,
  }, ref) => {
    
  return (
    <div className="post" ref={ref}>
      <div className="post__avatar">
        <Avatar src={avatar} alt="User Avatar" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName} {" "}
              {verified && <VerifiedUserIcon className="post__badge"/>} @{username}
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div> 
        </div>
        {image && <img src={image} alt="User Posted" />}
        <div className="post__footer">
          <ChatBubbleIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
});

export default Post;
