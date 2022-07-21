import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { toast, Toaster } from "react-hot-toast";
import { IoMdPersonAdd } from "react-icons/io";
import { io } from "socket.io-client";
import { SearchBar } from "../components/SearchBar";
import { Chats } from "../containers/Chats";
import { Contacts } from "../containers/Contacts";
import { ProfileContainer } from "../containers/ProfileContainer";
import { useAuth } from "../hooks/useAuth";
import { useIdle } from "../hooks/useIdle";
import "../styles/Main.css";
export const Main = () => {
  const auth = useAuth();
  const { socket } = auth;
  const [user, setUser] = useState({});
  const [chats, setChats] = useState([]);
  const [contats, setContacts] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const idle=useIdle();
  useEffect(() => {
    (async () => {
      await axios
        .post(
          `${auth.API_URL}/users/my-user`,
          {},
          { headers: { Authorization: `Bearer ${auth.token}` } }
        )
        .then((user) => {
          localStorage.setItem("_id", JSON.stringify(user.data._id));
          setUser(user.data);
          socket.current.emit("user-online", user.data?._id);
        })
        .catch(() => {
          toast.err("Error al cargar el usuario");
        });
      await axios
        .get(`${auth.API_URL}/chats/my-chats`, {
          headers: { Authorization: `Bearer ${auth.token}` },
        })
        .then((friends) => {
          setChats(friends.data);
        })
        .catch(() => {
          toast.err("Error al cargar los amigos");
        });
      await axios
        .get(`${auth.API_URL}/users`, {
          headers: { Authorization: `Bearer ${auth.token}` },
        })
        .then((users) => {
          setContacts(users.data);
        })
        .catch(() => {
          toast.error("Error al cargar los usuarios");
        });
    })();
  }, []);
  useEffect(()=>{
      socket.current.on('online-users',(onlineUsers)=>{
        let {users}=onlineUsers;
        setOnlineUsers(users);
      })
    },[])
  return (
    <section className="chat-page--container">
      <h1>We Say</h1>
      <IoMdPersonAdd className="chat-page--add" fill="white" />
      <ProfileContainer user={user} />
      <SearchBar />
      <Contacts contacts={contats} />
      <Chats chats={chats} onlineUsers={onlineUsers}/>
      <footer>
        <small>
          this site is by <i>Edmundo Arias Ortiz</i>
        </small>
      </footer>
      <Toaster position="top-right" reverseOrder={false} />
    </section>
  );
};
