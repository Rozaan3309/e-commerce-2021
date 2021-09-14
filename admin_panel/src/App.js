import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './Styles/App.css';
import Login from "./Pages/Login"
import Main from "./Pages/Main"

function App() {

  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    checkLogin()
  }, [])

  const checkLogin = () => {
    let token = localStorage.getItem('accessToken')
    if (token) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }

  return (
    <div className="App">
      {
        isLogin ?
          <Main checkLogin={checkLogin} />
        :
          <Login checkLogin={checkLogin} />
      }
    </div>
  );
}

export default App;
