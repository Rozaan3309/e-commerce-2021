import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './style.css'

const Sidebar = (props) => {

   const {
      checkLogin,
      btnText,
      updateData,
      setData,
      setBtnText,
      fetchItems
   } = props

   const [name, setName] = useState("")
   const [stock, setStock] = useState("")
   const [price, setPrice] = useState("")
   const [thumbnail, setThumbnail] = useState("")
   const [buttonText, setButtonText] = useState("Create")

   useEffect(() => {
      setName(updateData.name)
      setStock(updateData.stock)
      setPrice(updateData.price)
      setThumbnail(updateData.thumbnail)
      if (btnText) {
         setButtonText(btnText)
      }
   }, [updateData])

   const logout = () => {
      localStorage.removeItem("accessToken")
      checkLogin()
   }

   const revert = () => {
      setData({
         name: "",
         stock: 0,
         price: 0,
         thumbnail: ""
      });

      setButtonText("Create")
      setBtnText("")
      console.log('revert', buttonText)
   }

   const handleSubmit = (e) => {
      console.log("submit", buttonText)
      e.preventDefault()
      if (buttonText === "Create") {
         axios({
            method: "POST",
            url: `http://localhost:4000/api/item/addItem`,
            headers: {
               authorization: "bearer " + localStorage.getItem("accessToken")
            },
            data: {
               name,
               stock,
               price,
               thumbnail
            }   
         })
         .then((response) => {
            console.log(response)
            fetchItems()
         })
         .catch((err) => {
            console.log(err)
         })
      } else if (buttonText === "Update") {
            axios({
               method: "PUT",
               url: `http://localhost:4000/api/item/update/${updateData.id}`,
               headers: {
                  authorization: "bearer " + localStorage.getItem("accessToken")
               },
               data: {
                  name,
                  stock,
                  price,
                  thumbnail
               }   
            })
            .then((response) => {
               console.log(response)
               fetchItems()
               revert()
            })
            .catch((err) => {
               console.log(err)
            })
      }
   }

   return (
      <div id="sidebarContainer">
         <h1 id="sidebarTitle">Toko Budi Admin Panel</h1>
         <button onClick={() => {logout()}}>Logout</button>
         <form id="multiForm" onSubmit={(e) => handleSubmit(e)}>
            <div id="formItem">
               <label className="multiFormLabel" htmlFor="multiNameInput" >Name: </label>
               <input id="multiNameInput" onChange={(e) => setName(e.target.value)} value={name}/>
            </div>
            <div id="formItem">
               <label className="multiFormLabel" htmlFor="multiStockInput">Stock: </label>
               <input id="multiStockInput" onChange={(e) => setStock(e.target.value)} value={stock}/>
            </div>
            <div id="formItem">
               <label className="multiFormLabel" htmlFor="multiPriceInput">Price: </label>
               <input id="multiPriceInput" onChange={(e) => setPrice(e.target.value)} value={price}/>
               
            </div>
            <div id="formItem">
               <label className="multiFormLabel" htmlFor="multiThumbnailInput">Thumbnail: </label>
               <input id="multiThumbnailInput" onChange={(e) => setThumbnail(e.target.value)} value={thumbnail}/>
            </div>
            <div id="formItem">
               <input id="submitmultiBtn" type="submit" value={buttonText}/>
               {
                  buttonText === "Update" ? <button id="revertBtn" type="button" onClick={() => revert()}>Back to Create</button> : null
               }
            </div>
            
         </form>
      </div>
   )
}

export default Sidebar