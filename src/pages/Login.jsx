import React from 'react'

const Login = () => {
  return (
    <section className="login-container">
        <a className='login-to-signin' href="#">Sign In</a>
        <h3>Log In</h3>
        <form action="">
            <input className='login-email' type="text" name="email" id="" />
            <input className='login-password' type="password" name="password"/>
            <input className='login-submit' type="submit" value={"Log In"}/>
            <a className='login-forgot--password' href="#"><small>Forgot password</small></a>
        </form>
    </section>
  )
}

export default Login