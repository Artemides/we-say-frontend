import React from "react";
import { Chat } from "./Chat";
import "../styles/Chats.css";
export const Chats = ({ chats,onlineUsers}) => {

  return (
    <section className="chats-container">
      <h2>Chat</h2>
      { chats.map((chat) => (
        <Chat
          key={chat._id}
          user={chat.users}
          message={chat.messages}
          avatar={
            chat.users.avatar
          }
          chatId={chat._id}
          online={onlineUsers.includes(chat.users?._id) ? "online" : "offline"}
        />
      ))}
    </section>
  );
};
