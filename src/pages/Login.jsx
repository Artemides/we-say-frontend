import React,{useRef} from "react";
import {useNavigate,Link} from 'react-router-dom';
import "../styles/Login.css";
import {useAuth} from '../hooks/useAuth';
import {Toaster,toast} from 'react-hot-toast';
const Login = () => {
  const formLogin=useRef(null);
  const navigate=useNavigate();
  const auth=useAuth();
  const handleSubmit =async (e) => {
    e.preventDefault();
    const formaData=new FormData(formLogin.current);
    const payload={
      email: formaData.get("email"),
      password: formaData.get("password")
    };
    toast.promise(auth.login(payload),{
      loading:"Iniciando Sesión...",
      success:"Inicio de Sesión Exitoso",
      error:"Error al Iniciar Sesión"
    }).then((response)=>{
      if(response.data?.user?.once){
        navigate("/profile");
      }else{
        navigate('/home');
      }
    }).catch(err=>{
      toast.error(err.message);
    })
  };
  return (
    <section className="login-container">
      <Link className="login-to-signin" to="/signin">
        <small>Registrate</small>
      </Link>
      <h3>Iniciar Sesión</h3>
      <form className="login-form" action="" ref={formLogin}>
        <input
          className="login-email"
          type="text"
          name="email"
          id=""
          placeholder="correo"
        />
        <input
          className="login-password"
          type="password"
          name="password"
          placeholder="contraseña"
        />
        <input
          className="login-submit"
          type="submit"
          value={"Ingresar"}
          onClick={handleSubmit}
        />
        <a className="login-forgot--password" href="/">
          <small>¿Olvidaste tu contraseña?</small>
        </a>
      </form>
      {}
      <Toaster
        position="top-center" 
        reverseOrder={false}
      />
    </section>
  );
};

export default Login;
