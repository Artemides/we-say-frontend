import React, { useRef } from "react";
import {useParams} from 'react-router-dom';
import { MdOutlineAttachFile, MdSend } from "react-icons/md";
import "../styles/MessageSender.css";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../hooks/useAuth";
import axios from "axios";
export const MessagesSender = ({user}) => {
  const formRef = useRef(null);
  const {chatId}=useParams();
  const auth=useAuth();
  const handleSendMessage =async  (e) => {
    e.preventDefault();
    const formData= new FormData(formRef.current);
    const payload={
      chat: chatId,
      user: auth.currentUser,
      text: formData.get("text"),
      to: user._id
    }
    await axios.post(`${auth.API_URL}/messages`,payload,{headers:{'Authorization':`Bearer ${auth.token}`}})
    .then(()=>toast.success("Mensaje enviado"))
    .catch(()=>toast.error("Error al enviar el mensaje"))
    .finally(()=>{
      formRef.current.reset();
    })
  };
  return (
    <section className="message-sender-container">
      <MdOutlineAttachFile className="message-sender--icon message-sender--file " />
      <form action="" ref={formRef}>
        <textarea type="text" placeholder="message..." name="text" />
      </form>
      <MdSend 
        className="message-sender--icon message-sender--send" 
        onClick={handleSendMessage}  
      />
      <Toaster
        position="top-right"
        autoClose={1500}
        hideProgressBar={true}
      />
    </section>
  );
};
