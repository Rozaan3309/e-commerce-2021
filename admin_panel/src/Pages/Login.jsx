import React, {useState, useEffect} from 'react'
import "../Styles/Login.css"
import axios from 'axios'

function Login (props) {

   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   useEffect(() => {
      console.log(email, password)
   }, [email, password])

   const adminLogin = (e) => {
      e.preventDefault()
      let style = e.target.style
      style["box-shadow"] = "none"
      setTimeout(() => {
         style["box-shadow"] = "3px 3px 5px rgb(80, 80, 80)"
      }, 100)

      axios(({
         url: "http://localhost:4000/api/account/adminLogin",
         method: "POST",
         data: {
            email,
            password
         }
      }))
      .then((response) => {
         console.log(response.data.token)
         localStorage.setItem("accessToken", response.data.token) 
         props.checkLogin()   
      })
      .catch((err) => {
         console.log(err)
      })
   }

   return (
      <div id="loginContainer">
         <div id="loginFormContainer">
            <h1 id="loginTitle">Login</h1>
            <form id="loginForm" target="#">
               <div id="loginFormItemContainer">
                  <div id="loginFormLeft">
                     <div className="loginFormItem">
                        <label className="loginLabel" htmlFor="email">Email: </label>
                     </div>
                     <div className="loginFormItem">
                        <label className="loginLabel" htmlFor="pass">Password: </label>
                     </div>
                  </div>
                  <div id="loginFormRight">
                     <div className="loginFormItem">
                        <input className="loginInput" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                     </div>
                     <div className="loginFormItem">
                        <input className="loginInput" id="pass" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                     </div>
                  </div>
               </div>
               <div className="loginFormItem">
                  <input id="submitBtn" type="submit" value="Login" onClick={(e) => adminLogin(e)} />
               </div>
            </form>
         </div>
         <div id="loginImageContainer">
            <img id="loginImage" src="https://survplus.id/images/login.svg"  />
         </div>
      </div>
   )
}

export default Login