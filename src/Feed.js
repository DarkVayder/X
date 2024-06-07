import React from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import userAvatar2 from './Avatar.jpg'; // DarkVayder's avatar
import userImage2 from './image.jpg';    // DarkVayder's image
import userImage from './image2.jpeg';   // Endeavor's image
import userAvatar from './avatar2.jpg';  // Endeavor's avatar

function Feed() {
  console.log('userAvatar2:', userAvatar2);
  console.log('userAvatar:', userAvatar);

  return (
    <div className='feed'>
      <div className='feed__header'>
        <h2>Your Feed</h2>
      </div>

      <TweetBox />

      <Post
        displayName="DarkVayder"
        username="Jay"
        verified={true}
        text="Acuna Matata...!!!"
        avatar={userAvatar2}
        userImage={userImage2}
      />

      <Post
        displayName="Endeavor"
        username="Jay"
        verified={false}
        text="Acuna Matata"
        avatar={userAvatar}
        userImage={userImage}
      />
    </div>
  );
}

export default Feed;
