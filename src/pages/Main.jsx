import axios from "axios";
import React, { useEffect, useState,useRef} from "react";
import {toast, Toaster } from "react-hot-toast";
import {IoMdPersonAdd} from 'react-icons/io'
import { SearchBar } from "../components/SearchBar";
import { Chats } from "../containers/Chats";
import { Contacts } from "../containers/Contacts";
import { ProfileContainer } from "../containers/ProfileContainer";
import { useAuth } from "../hooks/useAuth";
import '../styles/Main.css';
export const Main = () => {
  const auth=useAuth();
  const [user, setUser] = useState({});
  const [chats, setChats] = useState([]);
  const [contats,setContacts]=useState([]);
  useEffect(() => {
    (async()=>{

        await axios.post(`${auth.API_URL}/users/my-user`,{},{headers:{'Authorization':`Bearer ${auth.token}`}})
        .then(user=>{
            localStorage.setItem('_id',JSON.stringify(user.data._id));
            setUser(user.data);
        })
        .catch(()=>{
          toast.err("Error al cargar el usuario");
        })
        await axios.get(`${auth.API_URL}/chats/my-chats`,{headers:{'Authorization':`Bearer ${auth.token}`}})
        .then(friends=>{
          setChats(friends.data);
        })
        .catch(()=>{
            toast.err("Error al cargar los amigos");
        })
        await axios.get(`${auth.API_URL}/users`,{headers:{'Authorization':`Bearer ${auth.token}`}})
        .then(users=>{
          setContacts(users.data);
        })
        .catch(()=>{
          toast.error("Error al cargar los usuarios");
        })
    })()
  },[])
  return (
    <section className="chat-page--container">
      <h1>We Say</h1>
      <IoMdPersonAdd className="chat-page--add" fill="white"/>
      <ProfileContainer user={user} />
      <SearchBar />
      <Contacts contacts={contats}/>
      <Chats chats={chats}/>
      <footer><small>this site is by <i>Edmundo Arias Ortiz</i></small></footer>
      <Toaster 
        position="top-right"
        reverseOrder={false}
      />
    </section>
  );
};
