import React, {useState, useEffect} from 'react'
import './style.css'

const Sidebar = (props) => {

   const logout = () => {
      localStorage.removeItem("accessToken")
      props.checkLogin()
   }

   return (
      <div id="sidebarContainer">
         <h1 id="sidebarTitle">Toko Budi Admin Panel</h1>
         <button onClick={() => {logout()}}>Logout</button>
         <form id="addForm">
            <div id="formItem">
               <label className="addFormLabel" htmlFor="addNameInput">Name: </label>
               <input id="addNameInput"/>
            </div>
            <div id="formItem">
               <label className="addFormLabel" htmlFor="addStockInput">Stock: </label>
               <input id="addStockInput"/>
            </div>
            <div id="formItem">
               <label className="addFormLabel" htmlFor="addPriceInput">Price: </label>
               <input id="addPriceInput"/>
               
            </div>
            <div id="formItem">
               <label className="addFormLabel" htmlFor="addThumbnailInput">Thumbnail: </label>
               <input id="addThumbnailInput"/>
            </div>
            <div id="formItem">
               <input id="submitAddBtn" type="submit"/>
            </div>
            
         </form>
      </div>
   )
}

export default Sidebar