import React from 'react'
import "./Post.css"
import { Avatar } from '@material-ui/core';
import MoreIcon from '../../images/More.png';
import Favorite from '../../images/favorite.png';
import Comment from '../../images/Comment.png';
import Send from '../../images/Send.png';
import Bookmark from '../../images/Bookmark.png';

function Post({user, postImage, likes, timestamps}) {
  return (
    <div className='post'>
        <div className='post_header'>
          <div className='post_headerAuthor'>
            <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
            &#8200;&#8200;{user}&#8200;&#8200;<span>{timestamps}</span>
          </div>
          <img src={MoreIcon}/>
        </div>
        <div className='post_image'>
          <img src={postImage} />
        </div>
        <div className='post_footer'>
          <div className='post_footerIcons'>
            <div className='post_iconsMain'>
              <img src={Favorite} className='postIcon'/>
              <img src={Comment} className='postIcon'/>
              <img src={Send} className='postIcon'/>
            </div>
            <div className='post_iconsSave'>
              <img src={Bookmark} className='postIcon2'/>
            </div>
          </div>
          {/* 3.700.500 Likes */}
          {likes} Like
        </div>
    </div>
  )
}

export default Post