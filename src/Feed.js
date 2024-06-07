import React from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import userAvatar2 from './Avatar.jpg';
import userImage2 from './image.jpg';
import userImage from './image2.jpeg';
import userAvatar from './avatar2.jpg';

function Feed() {
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
      text="COLD PALMER...!!!"
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
