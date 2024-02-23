import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@mui/material';

function TweetBox() {
  return (
    <div className='TweetBox'>
        <form>
            <div className='tweetBox__input'>
            <Avatar src="src/Avatar.jpg"></Avatar>
            <input placeholder='What is happening?' type='text'></input>


            </div>
            <Button>Post</Button>
        </form>
    </div>
  )
}

export default TweetBox