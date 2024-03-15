import React from "react";
import Avatar from "./Avatar.jpg";
import "./Post.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

function Post({
  displayName,
  username,
  verified,
  text,
  image,
  avatar,
}) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar} alt="User Avatar" />
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
            <p>{username} Abzi</p>
          </div>
        </div>
        {image && <img src={avatar} alt="Posted Image" />} 
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Post;
