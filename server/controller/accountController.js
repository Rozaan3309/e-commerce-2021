require('dotenv').config()
const { Account, Item, Cart } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class AccountController {
   static register (req, res, next) {

      const {name, email, password} = req.body

      Account.create({name, email, password})
      .then((data) => {
         res.status(201).json({
            message: "Register Success!",
            result: data
         })
      })
      .catch((err) => {
         res.status(500).json({
            message: 'Internal Server Error',
            result: err,
         })
      })
   }

   static login (req, res, next) {

      const {email, password} = req.body

      Account.findOne({where: {
         email: email,
         isAdmin: false
      }})
      .then((data) => {
         bcrypt.compare(password, data.password)
         .then((isHashed) => {
            if (!isHashed) {
               res.status(200).json({
                  message: "Wrong Email or Password"
               })
            } else {
               jwt.sign({
                  id: data.id,
                  name: data.name,
                  email: data.email,
                  isAdmin: data.isAdmin
               }, process.env.SECRET_KEY, 
               (err, token) => {
                  if (err) {
                     console.log('error creating a token', err)
                  } else {
                     res.status(200).json({
                        message: "Login success!",
                        token
                     })
                  }
               })
            }
         })
      })
      .catch((err) => {
         res.status(404).json({
            message: "User not found",
            log: err
         })
      })

   }

   static getAll (req, res, next) {
      Account.findAll({
         attributes: ['id', 'name', 'email', 'isAdmin'],
         include: [Item]
      })
      .then((data) => {
         res.status(200).json({
            message: "get Data success",
            result: data
         })
      })
      .catch((err) => {
         res.status(500).json({
            message: "Internal Server Error",
            log: err
         })
      })
   }

   static getOne (req, res, next) {
      const accountId = req.params.id

      Account.findOne({
         where: {
            id: accountId
         },
         attributes: ['id', 'name', 'email', 'isAdmin'],
         include: [Item]
      })
      .then((data) => {
         res.status(200).json({
            message: "get Data success",
            result: data
         }) 
      })
      .catch((err) => {
         res.status(500).json({
            message: "Internal Server Error",
            log: err
         })
      })
   }

   static update (req, res, next) {

      const {name, email, password} = req.body
      const accountId = req.params.id
      Account.findOne({where:{id:accountId, isAdmin: false}})
      .then((data) => {
         data.update({name, email, password}, {where: {id: accountId}})
         .then((updated) => {
            res.status(200).json({
               message: "update Data success",
               result: updated
            }) 
         })
         .catch((err) => {
            res.status(500).json({
               message: "Internal Server Error",
               log: err
            })
         })
      })
      .catch((err) => {
         res.status(500).json({
            message: "Internal Server Error",
            log: err
         })
      })
   }

   static delete (req, res, next) {
      const accountId = req.params.id

      Account.destroy({where: {id: accountId}})
      .then((data) => {
         res.status(200).json({
            message: "delete Data success",
            result: data
         }) 
      })
      .catch((err) => {
         res.status(500).json({
            message: "Internal Server Error",
            log: err
         })
      })
   }
}

module.exports = AccountController