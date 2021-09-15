import React from "react"
import axios from "axios"
import "./style.css"

function ConfirmModal (props) {
   const {
      customTxt,
      toggleModal,
      selectedItem,
      fetchItems,
   } = props

   const deleteItem = () => {
      axios({
         method: "DELETE",
         url: `http://localhost:4000/api/item/delete/${selectedItem}`,
         headers: {
            authorization: "bearer " + localStorage.getItem("accessToken")
         }
      })
      .then((response) => {
         console.log(response)
         toggleModal(false)
         fetchItems()
      })
      .catch((err) => {
         console.log(err)
      })
   }

   return (
      <div id="modalContainer">
         <div id="modalBox">
            <div className="modalParts" id="modalHead">
               <h2 id="modalTitle">Warning!</h2>
            </div>
            <div className="modalParts" id="modalBody">
               {
                  customTxt ?
                     <p id="modalDesc">{customTxt}</p>
                  :
                     <p id="modalDesc">Are you sure?</p>
               }
            </div>
            <div className="modalParts" id="modalAction">
               <button className="confirmBtn" onClick={() => {deleteItem()}} id="confirmYesBtn">Yes</button>
               <button className="confirmBtn" onClick={() => {toggleModal(false)}} id="confirmNoBtn">No</button>
            </div>
         </div>
      </div>
   ) 
}

export default ConfirmModal