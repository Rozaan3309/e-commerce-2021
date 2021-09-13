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
         <Sidebar checkLogin={checkLogin} />
         <div id="listContainer">
            <Item type={"head"}/>
            {
               items.map((item, key) => {
                  return (
                     <Item key={key} item={item}/>
                  )
               })
            }
         </div>
      </div>
   )
}

export default Main