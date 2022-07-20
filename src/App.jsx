import "./styles/App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
import { MessagesPage } from "./pages/MessagesPage";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import AvatarSeleccion from "./pages/AvatarSeleccion";
import { PrivateRoutes } from "./routers/PrivateRouter";
import { AuthProvider } from "./auth/AuthProvider";
import { ProfileSelection } from "./pages/ProfileSelection";
function App() {
  return (
    <AuthProvider>
      <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route exac path="/home" element={<Main />} />
          <Route exac path="/messages/:chatId" element={<MessagesPage/>} />
          <Route exac path="/avatar" element={<AvatarSeleccion />} />
        </Route>
        <Route exac path="/" element={<Login />} />
        <Route exac path="/signin" element={<Signin />} />
        <Route exac path="/profile" element={<ProfileSelection />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
