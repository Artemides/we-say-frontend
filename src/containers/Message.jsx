import React from "react";
import { ProfileIcon } from "../components/ProfileIcon";
import Avatar from "../assets/images/profile.webp";
import '../styles/Message.css';
export const Message = ({message}) => {
  return (
    <div className={`message-container ${message.type}`}>
      <div className="message-header">
        <h5>{message.at}</h5>
      </div>
      <div className="message-body">
        <p>
          {message.text}
        </p>
      </div>
    </div>
  );
};
