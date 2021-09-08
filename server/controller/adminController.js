require('dotenv').config()
const { Account } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class AdminController {

   static adminLogin (req, res, next) {
      const {email, password} = req.body

      Account.findOne(
         {where: {email}}
      )
      .then((data) => {
         bcrypt.compare(password, data.password)
         .then((same) => {
            if (!same) {
               res.status(404).json({
                  message: "Wrong Email or Password",
               })      
            } else {
               let token = jwt.sign({
                  id: data.id,
                  name: data.name,
                  email: data.email,
                  isAdmin: data.isAdmin
               }, process.env.SECRET_KEY )

               if (!token) {
                  res.status(500).json({
                     message: "Internal Server Error"
                  })
               } else {
                  res.status(200).json({
                     message: "Login Success!",
                     token
                  })
               }
            }
         }) 
      })
      .catch((err) => {
         res.status(404).json({
            message: "Email not recognized",
            log: err
         })
      })

   }

}

module.exports = AdminController