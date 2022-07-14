import React from "react";
import { ProfileIcon } from "../components/ProfileIcon";
import { MdArrowBack } from "react-icons/md";
import Avatar from "../assets/images/profile.webp";
import '../styles/MessagesHeader.css'
export const MessagesHeader = ({user}) => {
  return (
    <div className="messages-header">
      <MdArrowBack className="messages-arrow--back" fill="white" />
      <p>{user.name}</p>
      <ProfileIcon image={Avatar} size="small" status="offline" />
    </div>
  );
};
