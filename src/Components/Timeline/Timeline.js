import React, { useState } from 'react';
import "./Timeline.css";
import Suggestion from './Suggestion';
import Post from './Posts/Post';

function Timeline() {
  const [posts, setPosts] = useState ([
    {
      user: "Zweena_",
      postImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 100.000,
      timestamps: "1d",
    },
      {
        user: "ar07zwn",
        postImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likes: 150.000,
        timestamps: "13h",
      },
      {
        user: "lrz678",
        postImage: "https://images.unsplash.com/photo-1506102383123-c8ef1e872756?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likes: 30.000,
        timestamps: "4d",
      },
      {
        user: "nav0209",
        postImage: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likes: 200.000,
        timestamps: "2h",
      },
  ]);
  return (
    <div className='timeline'>
        <div className='timeline_left'>
          <div className='timeline_post'>
           {posts.map(post => (
              <Post user={post.user} postImage={post.postImage} likes={post.likes} timestamps={post.timestamps}/>
           ))}
          </div>
        </div>
        <div className='timeline_right'>
            <Suggestion/>
        </div>
    </div>
  )
}

export default Timeline