import { createContext, useState } from "react";
import axios from "axios";
export const AuthContext = createContext();
const API_URL = "http://localhost:4000/api/v1";
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [firstTime, setFirstTime] = useState(true);
  const [avatarSelected, setAvatarSelected] = useState(null);
  const login = (payload) => {
    return new Promise(async (resolve, reject) => {
      await axios
        .post(`${API_URL}/auth/login`, payload)
        .then((response) => {
          setToken(response.data.token);
          setFirstTime(response.data?.user?.once);
          localStorage.setItem("token",JSON.stringify(response.data.token));
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
    login,
    signin,
    logout() {
      setToken(null);
    },
    avatarSelected,
    setAvatarSelected,
    handleSetAvatar,
    firstTime
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
