import React from "react";
import "../styles/ProfileIcon.css";

export const ProfileIcon = ({ image, size, status = "offline" }) => {

  return (
    <figure className={`profile-container profile-container--${size}`}>
      <img className="profile-image" src={image} alt="profile" />
      <span className={`profile-status profile-status--${status}`}></span>
    </figure>
  );
};
