import React from "react";
import "../styles/ProfileIcon.css";
import { useAuth } from "../hooks/useAuth";

export const ProfileIcon = ({ image, size, status = "offline" }) => {
  const auth = useAuth();
  return (
    <figure className={`profile-container profile-container--${size}`}>
      <img className="profile-image" src={image} alt="profile" />
      <span className={`profile-status profile-status--${status}`}></span>
    </figure>
  );
};
