import { createContext, useState, useRef } from "react";
import axios from "axios";
import {io} from 'socket.io-client';
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const socket=useRef();
  const [token, setToken] = useState(null);
  const [firstTime, setFirstTime] = useState(true);
  const [avatarSelected, setAvatarSelected] = useState(null);
  const [currentUser, setCurrentUser] = useState(undefined);
  //const API_URL = "https://we-say.herokuapp.com/api/v1";
  const API_URL = "http://localhost:4000/api/v1";
  
  const login = (payload) => {
    return new Promise(async (resolve, reject) => {
      await axios
        .post(`${API_URL}/auth/login`, payload)
        .then((response) => {
          setToken(response.data.token);
          setFirstTime(response.data?.user?.once);
          setCurrentUser(response.data.user?._id);
          localStorage.setItem("token",JSON.stringify(response.data.token));
          socket.current=io(`http://localhost:4000`);
          socket.current.emit("user-online",response.data.user?._id);
          resolve(response);
        })
        .catch((err) => {
          setToken(null);
          localStorage.setItem("token", null);
          reject(err);
        });
    });
  };
  const signin = (payload) => {
    return new Promise(async (resolve, reject) => {
      await axios
        .post(`${API_URL}/users`, payload)
        .then((response) => resolve(response.status))
        .catch((error) => reject(error.response.data));
    });
  };
  const handleSetAvatar = (imageBase64) => {
    return new Promise(async (resolve, reject) => {
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };
      await axios
        .patch(`${API_URL}/users/avatar`, { avatar: imageBase64 }, config)
        .then((response) => {
            resolve(response.status)
        })
        .catch((error) => reject(error.response.data));
    });
  };
  const contextValue = {
    token,
    setToken,
    login,
    signin,
    logout() {
      setToken(null);
    },
    avatarSelected,
    setAvatarSelected,
    handleSetAvatar,
    firstTime,
    currentUser,
    socket,
    API_URL
  };
  
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
