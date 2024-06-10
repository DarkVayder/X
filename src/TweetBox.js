import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@mui/material';
import userAvatar from './Avatar.jpg';
import { db } from './firebase'; 
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'; 

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = async (e) => {
    e.preventDefault();

    if (tweetMessage.trim() === "") {
      return; 
    }

    const newPost = {
      displayName: "DarkVayder",
      username: "DarkVayder",
      verified: true,
      text: tweetMessage,
      avatar: userAvatar,
      timestamp: serverTimestamp()
    };

    
    if (tweetImage.trim() !== "") {
      newPost.image = tweetImage;
    }

    await addDoc(collection(db, 'Post'), newPost);

    setTweetMessage("");
    setTweetImage("");
  }

  return (
    <div className='TweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src={userAvatar} alt="User Avatar" />
          <input 
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder='What is happening?!' 
            type='text' 
          />
        </div>
        <div className='tweetBox__ImageInput'>
          <input 
            onChange={(e) => setTweetImage(e.target.value)}
            value={tweetImage}
            placeholder='Place your image URL here!' 
            type='text' 
          />
        </div>
        <Button 
          onClick={sendTweet} 
          type='submit' 
          className="tweetBox__tweetButton"
        >
          Post
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
