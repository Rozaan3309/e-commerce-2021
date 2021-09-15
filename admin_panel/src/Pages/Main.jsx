import React, {useState, useEffect} from 'react'
import '../Styles/Main.css'

import Sidebar from '../Components/Sidebar/Sidebar'
import Item from '../Components/Item/Item'

const Main = (props) => {

   const {
      items,
      checkLogin,
      toggleModal,
      selectedItem,
      fetchItems,
   } = props

   
   const [updateData, setUpdateData] = useState({
      name: "",
      stock: 0,
      price: 0,
      thumbnail: ""
   })
   const [btnText, setBtnText] = useState("")

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
                     <Item
                        selectedItem={selectedItem}
                        toggleModal={toggleModal}
                        setData={setUpdateData}
                        setBtnText={setBtnText}
                        key={key}
                        item={item}
                     />
                  )
               })
            }
         </div>
      </div>
   )
}

export default Main