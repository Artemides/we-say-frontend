import React from "react";
import "../styles/Login.css";
const Login = () => {
  return (
    <section className="login-container">
      <a className="login-to-signin" href="#">
        Sign In
      </a>
      <h3>Log In</h3>
      <form className="login-form" action="">
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
        <input className="login-submit" type="submit" value={"Submit"} />
        <a className="login-forgot--password" href="#">
          <small>Forgot password</small>
        </a>
      </form>
    </section>
  );
};

export default Login;
