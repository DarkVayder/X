import React, { useEffect, useState } from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import userAvatar2 from './Avatar.jpg'; 
import userImage2 from './image.jpg';    
import userImage from './image2.jpeg';   
import userAvatar from './avatar2.jpg';  
import { db, collection, onSnapshot } from './firebase';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'Post'), snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()));
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className='feed'>
      <div className='feed__header'>
        <h2>Your Feed</h2>
      </div>

      <TweetBox />

      {posts.map((post, index) => (
        <Post
          key={index}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          userImage={post.userImage}
        />
      ))}

    </div>
  );
}

export default Feed;
