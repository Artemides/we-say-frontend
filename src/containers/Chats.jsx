import React from "react";
import { Chat } from "./Chat";
import "../styles/Chats.css";
import avatar from "../assets/images/default.png";
export const Chats = ({ contacts }) => {
  return (
    <section className="chats-container">
      <h2>Chat</h2>
      { contacts.map((contact) => (
        <Chat
          key={contact._id}
          user={contact.users}
          message={contact.messages}
          avatar={
            contact.users?.avatar === ""
              ? avatar
              : `data:image/svg+xml;base64,${contact.users?.avatar}`
          }
          status={"online"}
        />
      ))}
    </section>
  );
};
