import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@mui/material';
import userAvatar from './Avatar.jpg';

function TweetBox() {
  return (
    <div className='TweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src={userAvatar} alt="User Avatar"></Avatar>
          <input placeholder='What is happening?!' type='text'></input>
        </div>
        <Button className="tweetBox__tweetButton">Post</Button>
      </form>
    </div>
  );
}

export default TweetBox;
