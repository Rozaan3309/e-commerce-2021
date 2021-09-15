import React, {useState, useEffect} from 'react'
import axios from 'axios'
import logo from './logo.svg';
import './Styles/App.css';
import Login from "./Pages/Login"
import Main from "./Pages/Main"

import ConfirmModal from "./Components/ConfirmModal/ConfirmModal"

function App() {

  const [items, setItems] = useState([])
  const [isLogin, setIsLogin] = useState(false)
  const [toggleModal, setToggleModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState(0)

  useEffect(() => {
    checkLogin()
  }, [])
  
  const checkLogin = () => {
    let token = localStorage.getItem('accessToken')
    if (token) {
      setIsLogin(true)
      fetchItems()
    } else {
      setIsLogin(false)
    }
  }

  const fetchItems = () => {
    axios({
       url: "http://localhost:4000/api/item/getAll",
       method: "GET"
    })
    .then((response) => {
       console.log(response)
       setItems(response.data.result.reverse())
    })
    .catch((err) => {
       console.log(err)
    })
 }

  return (
    <div className="App">
      {
        toggleModal ? 
          <ConfirmModal fetchItems={fetchItems} selectedItem={selectedItem} toggleModal={setToggleModal}/>
          :
          null
      }
      {
        isLogin ?
          <Main
            items={items}
            toggleModal={setToggleModal}
            selectedItem={setSelectedItem}
            checkLogin={checkLogin}
            fetchItems={fetchItems}  
          />
        :
          <Login checkLogin={checkLogin} />
      }
    </div>
  );
}

export default App;
