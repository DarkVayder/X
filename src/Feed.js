import React from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import userAvatar from './Avatar.jpg';
import userImage from './image.jpg';
import userImage2 from './cole palmer.jpeg';
import userAvatar2 from './avatar2.jpg';

function Feed() {
  return (
    <div className='feed'>
      <div className='feed__header'>
        <h2>For you</h2>
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
