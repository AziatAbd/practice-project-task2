import React from "react";
import "./Cards.css";

function Cards(props) {
  return (
    <div className="container" key={props.id}>
      <div className="users-container">
        <div className="wallpaper" style={{backgroundColor: (props.wallpaper)}}></div>
        <img src={props.profilePic} alt="User-avatar" className="user-avatar" />
        <div className="username">
          {props.username}
          <span className="user-id">{props.id}</span>
        </div>
        <span>About</span>
        <div className="user-info">{props.userInfo}</div>
      </div>
    </div>
  );
}

export default Cards;
