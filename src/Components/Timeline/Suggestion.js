import React from 'react'
import "./Suggestion.css"
import { Avatar } from '@material-ui/core'

function Suggestion() {
  return (
    <div className='suggestions'>
      <div className='suggestions_title'>Suggestions for you</div>
      <div className='suggestions_usernames'>

        <div className='suggestion_username'>
          <div className='username_left'>
            <span className='avatar'>
              <Avatar>I</Avatar>
            </span>
            <div className='username_info'>
              <span className='username'>Irvene</span>
              <span className='relation'>New to Instagram</span>
            </div>
          </div>
          <button className='follow_button'>Follow</button>
        </div>

        <div className='suggestion_username'>
          <div className='username_left'>
            <span className='avatar'>
              <Avatar>P</Avatar>
            </span>
            <div className='username_info'>
              <span className='username'>Patricia</span>
              <span className='relation'>New to Instagram</span>
            </div>
          </div>
          <button className='follow_button'>Follow</button>
        </div>

        <div className='suggestion_username'>
          <div className='username_left'>
            <span className='avatar'>
              <Avatar>O</Avatar>
            </span>
            <div className='username_info'>
              <span className='username'>Osie825</span>
              <span className='relation'>New to Instagram</span>
            </div>
          </div>
          <button className='follow_button'>Follow</button>
        </div>

        <div className='suggestion_username'>
          <div className='username_left'>
            <span className='avatar'>
              <Avatar>X</Avatar>
            </span>
            <div className='username_info'>
              <span className='username'>X48jo</span>
              <span className='relation'>New to Instagram</span>
            </div>
          </div>
          <button className='follow_button'>Follow</button>
        </div>
      </div>
    </div>
  )
}

export default Suggestion