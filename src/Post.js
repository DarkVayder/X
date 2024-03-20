import React from "react";
import { Avatar } from '@mui/material';
import userAvatar from './Avatar.jpg';
import "./Post.css";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import userImage from './image.jpg';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post({ displayName, username, verified, text,
  }) {
    
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={userAvatar} alt="User Avatar" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName} 
              John Doe {" "}
              {verified && <span>
                <VerifiedUserIcon className="post__badge"/>
              </span>} 
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{username} My First  X Clone Post </p>
          </div> 
        </div>
        <p>{text} </p>
        <img src={userImage} alt="Posted Content"/>
        <div className="post__footer">
          <ChatBubbleIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
