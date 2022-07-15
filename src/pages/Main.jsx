import axios from "axios";
import React, { useEffect, useState } from "react";
import {toast, Toaster } from "react-hot-toast";
import {IoMdPersonAdd} from 'react-icons/io'
import { SearchBar } from "../components/SearchBar";
import { Chats } from "../containers/Chats";
import { Contacts } from "../containers/Contacts";
import { ProfileContainer } from "../containers/ProfileContainer";
import { useAuth } from "../hooks/useAuth";
import '../styles/Main.css';
const API_URL=`http://localhost:4000/api/v1`;
export const Main = () => {
  const auth=useAuth();
  const [avatar, setAvatar] = useState("");
  const [user, setUser] = useState({});
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    (async()=>{
        console.log(auth.token);
        await axios.post(`${API_URL}/users/my-user`,{},{headers:{'Authorization':`Bearer ${auth.token}`}})
        .then(user=>{
            localStorage.setItem('_id',JSON.stringify(user.data._id));
            setAvatar(user.data.avatar);
            setUser(user.data);
        })
        .catch(()=>{
          toast.err("Error al cargar el usuario");
        })
        await axios.get(`${API_URL}/users`,{headers:{'Authorization':`Bearer ${auth.token}`}})
        .then(friends=>{
          setContacts(friends.data);
        })
        .catch(err=>{
            toast.err("Error al cargar los amigos");
        })
    })()
  },[])
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
      <ProfileContainer user={user} />
      <SearchBar />
      <Contacts contacts={chats} />
      <Chats chats={chats} />
      <footer><small>this site is by <i>Edmundo Arias Ortiz</i></small></footer>
      <Toaster 
        position="top-right"
        reverseOrder={false}
      />
    </section>
  );
};
