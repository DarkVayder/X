import React, { useEffect, useState } from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import { db, collection, onSnapshot } from './firebase';
import FlipMove from 'react-flip-move';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'Post'), snapshot => {
      const postData = snapshot.docs.map(doc => doc.data());
      setPosts(postData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className='feed'>
      <div className='feed__header'>
        <h2>Your Feed</h2>
      </div>

      <TweetBox />

      <FlipMove>
        {posts.map(post => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            userImage={post.userImage}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
