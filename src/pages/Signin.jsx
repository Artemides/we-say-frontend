import React, { useRef } from "react";
import "../styles/Signin.css";
import {Toaster,toast} from 'react-hot-toast';
import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";
const Signin = () => {
  const navigate=useNavigate();
  const formRef = useRef(null);
  const auth=useAuth();
  const handleSubmit=(e)=>{
      e.preventDefault();
      const formdata=new FormData(formRef.current);
      const payload={
        name: formdata.get("username"),
        email: formdata.get('email'),
        password: formdata.get('password')
      }
      toast.promise(auth.signin(payload),{
        loading:"Registrando Usuario...",
        success:"Usuario registrado",
        error: "Error al regitrar"
      })
      .then(()=>{formRef.current.reset();navigate('/')})
      .catch((error)=>{
        toast.error(error.message);
      })
  }
  return (
    <div className="signin-container">
      <Link className="signin-to-login" to="/">
        <small>Iniciar Sesión</small> 
      </Link>
      <h3>Registro</h3>
      <form action="" className="signin-form" ref={formRef}>
        <input type="text" name="username" id="" placeholder="Nombre de usuario" />
        <input type="email" name="email" placeholder="Correo" />
        <input type="password" name="password" id="" placeholder="Contraseña" />
        <input type="password" name="password-2" id="" placeholder="Contraseña" />
        <input type="submit" value="Registrar" onClick={handleSubmit} />
      </form>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
};

export default Signin;
