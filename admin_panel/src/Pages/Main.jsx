import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../Styles/Main.css'

import Sidebar from '../Components/Sidebar/Sidebar'
import Item from '../Components/Item/Item'

const Main = (props) => {

   const {
      checkLogin
   } = props

   const [items, setItems] = useState([])
   const [updateData, setUpdateData] = useState({
      name: "",
      stock: 0,
      price: 0,
      thumbnail: ""
   })
   const [btnText, setBtnText] = useState("")

   useEffect(() => {
      fetchItems()
   }, [])

   const fetchItems = () => {
      axios({
         url: "http://localhost:4000/api/item/getAll",
         method: "GET"
      })
      .then((response) => {
         console.log(response)
         setItems(response.data.result)
      })
      .catch((err) => {
         console.log(err)
      })
   }

   return (
      <div id="mainContainer">
         <Sidebar 
            fetchItems={fetchItems}
            btnText={btnText}
            updateData={updateData}
            setData={setUpdateData}
            setBtnText={setBtnText}
            checkLogin={checkLogin}
         />
         <div id="listContainer">
            <Item type={"head"}/>
            {
               items.map((item, key) => {
                  return (
                     <Item setData={setUpdateData} setBtnText={setBtnText} key={key} item={item}/>
                  )
               })
            }
         </div>
      </div>
   )
}

export default Main