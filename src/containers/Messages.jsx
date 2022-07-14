import React, { useEffect, useRef } from "react";
import "../styles/Messages.css";
import { Message } from "./Message";
export const Messages = () => {
  const lastMessageRef = useRef(null);
  const messages = [
    {
      id: 1,
      text: "HOla amigos, para el dia de hoy deben de iniciar su camara",
      at: "12:24pm",
      type: "my-message",
    },
    {
      id: 2,
      text: "HOla joven",
      at: "12:24pm",
      type: "other-message",
    },
    {
      id: 3,
      text: "jajaj estoy viejo",
      at: "12:24pm",
      type: "my-message",
    },
    {
      id: 4,
      text: "manito",
      at: "12:24pm",
      type: "my-message",
    },
    {
      id: 5,
      text: "habla good. F.Profe no tenemos camara, porfa solo audio no seas malo ",
      at: "12:24pm",
      type: "other-message",
    },
    {
      id: 6,
      text: "habla good. F.Profe no tenemos camara, porfa solo audio no seas malo ",
      at: "12:24pm",
      type: "other-message",
    },
    {
      id: 7,
      text: "habla good. F.Profe no tenemos camara, porfa solo audio no seas malo ",
      at: "12:24pm",
      type: "other-message",
    },
    {
      id: 8,
      text: "habla good. F.Profe no tenemos camara, porfa solo audio no seas malo ",
      at: "12:24pm",
      type: "other-message",
    },
    {
      id: 9,
      text: "habla good. F.Profe no tenemos camara, porfa solo audio no seas malo ",
      at: "12:24pm",
      type: "other-message",
    },
    {
      id: 10,
      text: "habla good. F.Profe no tenemos camara, porfa solo audio no seas malo ",
      at: "12:24pm",
      type: "other-message",
    },
    {
      id: 11,
      text: "habla good. F.Profe no tenemos camara, porfa solo audio no seas malo ",
      at: "12:24pm",
      type: "other-message",
    },
    {
      id: 12,
      text: "habla good. F.Profe no tenemos camara, porfa solo audio no seas malo ",
      at: "12:24pm",
      type: "other-message",
    },
    {
      id: 13,
      text: "habla good. F.Profe no tenemos camara, porfa solo audio no seas malo ",
      at: "12:24pm",
      type: "other-message",
    },
    {
      id: 14,
      text: "habla good. F.Profe no tenemos camara, porfa solo audio no seas malo ",
      at: "12:24pm",
      type: "my-message",
    },
    {
      id: 15,
      text: "habla good. F.Profe no tenemos camara, porfa solo audio no seas malo ",
      at: "12:24pm",
      type: "other-message",
    },
    {
      id: 16,
      text: "habla good. F.Profe no tenemos camara, porfa solo audio no seas malo ",
      at: "12:24pm",
      type: "my-message",
    },
  ];

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <section className="messages-container">
      <div className="messages-body">
        {messages.map((message) => (
          <Message message={message} key={message.id} />
        ))}
        <div ref={lastMessageRef} />
      </div>
    </section>
  );
};
