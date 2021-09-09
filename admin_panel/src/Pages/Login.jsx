import React, {} from 'react'
import "../Styles/Login.css"

function Login (props) {



   return (
      <div id="loginContainer">
         <div id="loginImageContainer">
            <img id="loginImage" src="https://survplus.id/images/login.svg"  />
         </div>
         <form id="loginForm" target="#">
            <label htmlFor="email">Email</label>
            <input id="email" type="email"/>
            <label htmlFor="pass">Password</label>
            <input id="pass" type="password"/>
            <input id="submitBtn" type="submit" value="Login" />
         </form>
      </div>
   )
}

export default Login