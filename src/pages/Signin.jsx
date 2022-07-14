import React from 'react'
import '../styles/Signin.css'   
const Signin = () => {
  return (
    <div className="signin-container">
        <a className='signin-to-login' href="#">Log In</a>
        <h3>Sign In</h3>
        <form action="" className="signin-form">
            <input type="text" name="username" id="" placeholder='Username' />
            <input type="email" name="email" placeholder='Email@example.com'/>
            <input type="password" name="password" id="" placeholder='Password'/>
            <input type="password" name="password" id="" placeholder='Password'/>
            <input type="submit" value="Sign In" />              
        </form>
    </div>
  )
}

export default Signin