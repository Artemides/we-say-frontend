import React from "react";
import { Chat } from "./Chat";
import "../styles/Chats.css";
import avatar from "../assets/images/default.png";
export const Chats = ({ chats}) => {
  return (
    <section className="chats-container">
      <h2>Chat</h2>
      { chats.map((chat) => (
        <Chat
          key={chat._id}
          user={chat.users}
          message={chat.messages}
          avatar={
            chat.users?.avatar === ""
              ? avatar
              : `data:image/svg+xml;base64,${chat.users?.avatar}`
          }
          status={"online"}
          chatId={chat._id}
        />
      ))}
    </section>
  );
};
