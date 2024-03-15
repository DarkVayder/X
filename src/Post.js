import React from "react";
import Avatar from "./Avatar.jpg";
import "./Post.css";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

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
          {image && <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgithub.com%2Fcoil-kt%2Fcoil%2Fissues%2F540&psig=AOvVaw2hsQxdBoeABf5j1I67Z2Hl&ust=1710593173761000&source=images&cd=vfe&opi=89978449&ved=0CBMQjhxqFwoTCPj047yR94QDFQAAAAAdAAAAABAE" title="posted content"/>}
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Post;
