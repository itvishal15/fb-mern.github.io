import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./Post.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";
import AccountCircleIclon from "@material-ui/icons/AccountCircle";

const Mypost = ({ profile, img, user, time, msg }) => {
  
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profile} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{user}</h3>
          <p>{time}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{msg}</p>
      </div>

      <div className="post__image">
        <img
          src={img}
          alt="myimg"
        />
      </div>

      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleIclon />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
};

export default Mypost;
