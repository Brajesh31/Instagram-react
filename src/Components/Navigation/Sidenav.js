import React from 'react';
import "./Sidenav.css";
import Home from '../images/home.png';
import SearchIcon from '../images/search.png';
import ExploreIcon from '../images/explore.png';
import Reels from '../images/film.png';
import ChatIcon from '../images/message.png';
import Favorite from '../images/favorite.png';
import Add from '../images/add.png';
import Menu from '../images/menu.png';

function Sidenav() {
  return (
    <div className='sidenav'>
        <img className='sidenav_logo' src='https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png'/>
        <div className='sidenav_buttons'>
            <button className='sidenav_button'>
                <img src={Home}/>
                <span>Home</span>
            </button>
            <button className='sidenav_button'>
                <img src={SearchIcon}/>
                <span>Search</span>
            </button>
            <button className='sidenav_button'>
                <img src={ExploreIcon}/>
                <span>Explore</span>
            </button>
            <button className='sidenav_button'>
                <img src={Reels}/>
                <span>Reels</span>
            </button>
            <button className='sidenav_button'>
                <img src={ChatIcon}/>
                <span>Message</span>
            </button>
            <button className='sidenav_button'>
                <img src={Favorite}/>
                <span>Notification</span>
            </button>
            <button className='sidenav_button'>
                <img src={Add}/>
                <span>Create</span>
            </button>
        </div>
        <div className='sidenav_more'>
          <button className='sidenav_button'>
            <img src={Menu}/>
            <span>More</span>
          </button>
        </div>
    </div>
  )
}

export default Sidenav