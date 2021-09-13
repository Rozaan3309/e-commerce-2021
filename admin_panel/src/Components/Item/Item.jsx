import React, {} from 'react'
import './style.css'

const Item = (props) => {

   const {
      item,
      type
   } = props

   if (type === "head") {
      return (
         <div id="itemHeadContainer">
            <h2>Thumbnail</h2>
            <h2>Name</h2>
            <h2>Stock</h2>
            <h2>Price</h2>
            <h2>Actions</h2>
         </div>
      )

   } else {
      return (
         <div id="itemContainer">
            <img src={item.thumbnail} width="100px"/>
            <h2>{item.name}</h2>
            <p>{item.stock}</p>
            <p>{item.price}</p>
         </div>
      )
   }
}

export default Item