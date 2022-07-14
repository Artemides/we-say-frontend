import React from "react";
import "../styles/Contacts.css";
import { Contact } from "./Contact";
import Avatar from "../assets/images/profile.webp";
export const Contacts = ({ contacts }) => {
  return (
    <section className="contacts-container">
      {contacts.map((user) => (
        <Contact user={user} avatar={Avatar} key={user.id} />
      ))}
    </section>
  );
};
