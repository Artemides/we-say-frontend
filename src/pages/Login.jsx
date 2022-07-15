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
      console.log(auth.firstTime)
      if(response.data?.user?.firstTime){
        navigate("/avatar");
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
        Sign In
      </Link>
      <h3>Log In</h3>
      <form className="login-form" action="" ref={formLogin}>
        <input
          className="login-email"
          type="text"
          name="email"
          id=""
          placeholder="email"
        />
        <input
          className="login-password"
          type="password"
          name="password"
          placeholder="password"
        />
        <input
          className="login-submit"
          type="submit"
          value={"Submit"}
          onClick={handleSubmit}
        />
        <a className="login-forgot--password" href="#">
          <small>Forgot password</small>
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
