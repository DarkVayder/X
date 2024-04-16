import React from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import userAvatar from './Avatar.jpg';
import userImage from './image.jpg';

function Feed() {
  return (
    <div className='feed'>
      <div className='feed__header'>
        <h2>My Feed</h2>
      </div>

      <TweetBox />

      <Post
        displayName="DarkVayder"
        username="Jay"
        verified={true}
        text="Lets go!!!"
        avatar={userAvatar} 
        userImage={userImage} 
      />

      <Post
        displayName="DarkVayder"
        username="Jay"
        verified={false}
        text="World class 'COLD PALMER'...!!!"
        avatar={userAvatar} 
      />
    </div>
  );
}

export default Feed;
