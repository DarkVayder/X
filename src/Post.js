import React from "react";
import { Avatar } from '@mui/material';
import userAvatar from './Avatar.jpg';
import userImage from './image.jpg';
import "./Post.css";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

function Post({
  displayName,
  username,
  verified,
  text,
  image,
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
              {verified && <span><VerifiedUserIcon className="post__badge"/></span>} 
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{username} John Doe</p>
          </div> 
        </div>
        <p>{text} My First Post </p>
        <img src={userImage} alt="Posted Content"/>
      </div>
    </div>
  );
}

export default Post;
