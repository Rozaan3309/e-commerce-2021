import React, {} from 'react'
import './style.css'

const Item = (props) => {

   const {
      item,
      type,
      setData,
      setBtnText
   } = props


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
               <button onClick={() => {setData(item); setBtnText("Update") }} className="CRUDBtn" id="updateBtn">Update</button>
               <button className="CRUDBtn" id="deleteBtn">Delete</button>
            </div>
         </div>
      )
   }
}

export default Item