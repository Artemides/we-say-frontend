import React from "react";
import { ProfileIcon } from "../components/ProfileIcon";
import { MdArrowBack } from "react-icons/md";
import "../styles/MessagesHeader.css";
import { Link } from "react-router-dom";
export const MessagesHeader = ({ user, avatar, status }) => {
  return (
    <div className="messages-header">
      <Link to={"/home"}>
        <MdArrowBack className="messages-arrow--back" fill="white" />
      </Link>
      <small className={`messages-header--${status}`}>{status}</small> 
      <p>{user.name}</p>
      <ProfileIcon image={avatar} size="small" status="offline" />
    </div>
  );
};
