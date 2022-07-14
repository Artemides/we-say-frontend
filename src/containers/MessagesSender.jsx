import React from "react";
import { MdOutlineAttachFile, MdSend } from "react-icons/md";
import "../styles/MessageSender.css";
export const MessagesSender = () => {
  return (
    <section className="message-sender-container">
      <MdOutlineAttachFile className="message-sender--icon message-sender--file " />
      <textarea
        type="text"
        placeholder="message..."
      />
      <MdSend className="message-sender--icon message-sender--send"  />
    </section>
  );
};
