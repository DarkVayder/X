import React from "react";
import Avatar from "./Avatar.jpg";
import "./Post.css";

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
      {/* Other post content goes here */}
    </div>
  );
}

export default Post;
