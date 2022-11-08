import React from "react";
//styled components
import { Heade } from "../Cover/cover.elements";
//assets
import Instagram from "../assets/instagram.png";
import Arrowdown from "../assets/arrowdown.png";
import Search from "../assets/search.png";
import Home from "../assets/Home.png";
import Message from "../assets/message.png";
import Upload from "../assets/upload.png";
import Explore from "../assets/discover.png";
import Hearth from "../assets/hearth.png";
import Profile from "../assets/profile.jpg";

function Header() {
  return (
    <Heade>
      <div className="header-cont">
        {/* left */}
        <div className="left">
          <div className="insta-cont">
            <img src={Instagram} alt="logo" />
          </div>
          <div className="arrow-cont">
            <img src={Arrowdown} alt="arrow" />
          </div>
        </div>
        {/* center */}
        <div className="center">
          <div className="search-cont">
            <img src={Search} alt="search" />
          </div>
          <div className="input-cont">
            <input type="text" placeholder="Search" />
          </div>
        </div>
        {/* right */}
        <div className="right menu-cont">
          <button className="home hidden">
            <img src={Home} alt="Home button" />
          </button>
          <button className="message hidden">
            <img src={Message} alt="message button" />
          </button>
          <button className="upload">
            <img src={Upload} alt="upload button" />
          </button>
          <button className="explore hidden">
            <img src={Explore} alt="explore button" />
          </button>
          <button className="hearth hidden">
            <img src={Hearth} alt="heart button" />
          </button>
          <button className="profile">
            <img src={Profile} alt="profile button" />
          </button>
          <button className="signout">Sign out</button>
        </div>
      </div>
    </Heade>
  );
}

export default Header;
