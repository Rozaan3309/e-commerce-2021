import React, {} from 'react'
import './style.css'

const Item = (props) => {

   const {
      item,
      type,
      setData,
      setBtnText,
      toggleModal,
      selectedItem,
   } = props

   const clicked = (e) => {
      let style = e.target.style
      style.opacity = "0.5"
      setTimeout(() => {
         style.opacity = "1"
      }, 150)
   }

   const handleUpdate = (e) => {
      clicked(e)
      setData(item);
      setBtnText("Update");
   }
   const handleDelete = (e) => {
      clicked(e)
      toggleModal(true)
      selectedItem(item.id)
   }

   if (type === "head") {
      return (
         <div id="itemHeadContainer">
            <h2 className="itemComponent">Thumbnail</h2>
            <h2 className="itemComponent">Name</h2>
            <h2 className="itemComponent">Stock</h2>
            <h2 className="itemComponent">Price</h2>
            <h2 className="itemComponent">Actions</h2>
         </div>
      )

   } else {
      return (
         <div id="itemContainer">
            <img className="itemComponent" src={item.thumbnail} width="100px"/>
            <p className="itemComponent">{item.name}</p>
            <p className="itemComponent">{item.stock}</p>
            <p className="itemComponent">{item.price}</p>
            <div className="itemComponent">
               <button onClick={(e) => {handleUpdate(e)}} className="CRUDBtn" id="updateBtn">Update</button>
               <button onClick={(e) => {handleDelete(e)}} className="CRUDBtn" id="deleteBtn">Delete</button>
            </div>
         </div>
      )
   }
}

export default Item