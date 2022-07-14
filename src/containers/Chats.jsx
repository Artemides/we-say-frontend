import React from "react";
import { Chat } from "./Chat";
import "../styles/Chats.css";
import avatar from "../assets/images/profile.webp";
export const Chats = ({ chats }) => {
  return (
    <section className="chats-container">
      <h2>Chat</h2>
      {chats.map((user) => (
        <Chat user={user} avatar={avatar} status={user.status} key={user.id}/>
      ))}
    </section>
  );
};
