import React from "react";
import "../styles/Contacts.css";
import { Contact } from "./Contact";
import defaultAvatar from "../assets/images/default.png";
export const Contacts = ({ contacts }) => {
  return (
    <section className="contacts-container">
      {contacts.map((user) => (
        <Contact 
          user={user} 
          avatar={user.avatar} 
          key={user._id} />
      ))}
    </section>
  );
};
