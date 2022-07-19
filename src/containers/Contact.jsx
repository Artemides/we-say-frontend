import axios from "axios";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { ProfileIcon } from "../components/ProfileIcon";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "../styles/Contact.css";
export const Contact = ({ user, avatar }) => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleAddContact = async () => {
    const payload = {
      otherUserId: user._id,
    };
    await axios
      .post(`${auth.API_URL}/chats`, payload, {
        headers: { Authorization: `Bearer ${auth.token}` },
      })
      .then((response) => {
        if (response.data?.exist) {
          toast.success(`Ya estás en contacto con ${user.name}`);
        } else {
          toast.success(`${user.name} añadido`);
        }
        navigate(`/messages/${response.data._id}`, {
          state: {
            user,
            avatar,
          },
        });
      })
      .catch((err) => toast.error(err.response.data.message));
  };
  return (
    <article className="contact-container" onClick={() => handleAddContact()}>
      <ProfileIcon image={avatar} size="small" status={"offline"} />
      <section className="contact-name">
        <p>{user.name}</p>
      </section>
      <Toaster position="top-right" autoClose={3000} />
    </article>
  );
};
