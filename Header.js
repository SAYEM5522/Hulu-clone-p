import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTv from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutLineIcon from "@material-ui/icons/PersonOutline";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      {/* header icons  */}
      <div className="header__icons">
        <div className="header__icon header__icon--active">
          <HomeIcon />
          <p> Home</p>
        </div>
        <div className="header__icon">
          <FlashOnIcon />
          <p> Treading</p>
        </div>
        <div className="header__icon">
          <LiveTv />
          <p> Verified</p>
        </div>
        <div className="header__icon">
          <VideoLibraryIcon />
          <p> Collections</p>
        </div>
        <div className="header__icon">
          <SearchIcon />
          <p> Search</p>
        </div>
        <div className="header__icon">
          <PersonOutLineIcon />
          <p> Account</p>
        </div>
      </div>
      <img
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        alt=""
      />
    </div>
  );
}

export default Header;
