import React from "react";
import {IoMdPersonAdd} from 'react-icons/io'
import { SearchBar } from "../components/SearchBar";
import { Chats } from "../containers/Chats";
import { Contacts } from "../containers/Contacts";
import { ProfileContainer } from "../containers/ProfileContainer";
import '../styles/Main.css';
export const Main = () => {
  const chats = [
    {
      id: "1",
      name: "Nataly Vera",
      message: "Hola, como estas?",
      status: "online",
      createdAt: "Hoy a las 12:00",
    },
    {
      id: "2",
      name: "Ricardo Salinas",
      message: "Enviame las cuentas",
      status: "online",
      createdAt: "Hoy a las 13:00",
    },
    {
      id: "3",
      name: "Percy",
      message: "Hola manito, llegarás tardes ssssssssssssssss ",
      status: "offline",
      createdAt: "Hoy a las 14:00",
    },
    {
      id: "4",
      name: "Rosalia",
      message: "Estoy bien gracias",
      status: "online",
    },
    {
      id: "5",
      name: "Pedro Ramirez",
      message: "Hola, como estas? ❤️",
      status: "online",
    },
    {
      id: "6",
      name: "Juan Perez",
      message: "Hola, como estas? ❤️",
      status: "online",
    },
    {
      id: "7",
      name: "Juan Perez",
      message: "Hola, como estas? ❤️",
      status: "online",
    },
    {
      id: "8",
      name: "Juan Perez",
      message: "Hola, como estas? ❤️",
      status: "online",
    },
  ];
  return (
    <section className="chat-page--container">
      <h1>We Say</h1>
      <IoMdPersonAdd className="chat-page--add" fill="white"/>
      <ProfileContainer user={chats[0]} />
      <SearchBar />
      <Contacts contacts={chats} />
      <Chats chats={chats} />
      <footer><small>this site is by <i>Edmundo Arias Ortiz</i></small></footer>
    </section>
  );
};
