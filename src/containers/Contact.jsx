import React from "react";
import { ProfileIcon } from "../components/ProfileIcon";
import "../styles/Contact.css";
export const Contact = ({ user, avatar }) => {
  return (
    <article className="contact-container">
      <ProfileIcon image={avatar} size="small" status={user.status} />
      <section className="contact-name">
        <p>{user.name}</p>
      </section>
    </article>
  );
};
