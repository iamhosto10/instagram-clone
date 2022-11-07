import React from "react";
import Instagram from "../assets/instagram.png";
import Arrowdown from "../assets/arrowdown.png";
import Search from "../assets/search.png";
import { Heade } from "../Cover/cover.elements";

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
      </div>
    </Heade>
  );
}

export default Header;
