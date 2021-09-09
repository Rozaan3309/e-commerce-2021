require('dotenv').config()
const { Item, Account} = require('../models')

class ItemController {
   static addItem (req, res, next) {

      const {name, thumbnail, price, stock} = req.body

      Item.create({name, thumbnail, price, stock})
      .then((data) => {
         res.status(201).json({
            message: "add item success!",
            result: data
         })
      })
      .catch((err) => {
         next({
            name: "ERROR_INTERNAL",
            log: err
         })
      })
   }

   static getAll (req, res, next) {
      Item.findAll()
      .then((data) => {
         res.status(200).json({
            message: "get Data success",
            result: data
         })
      })
      .catch((err) => {
         console.log("kena error")
         res.status(500).json({
            message: "Internal Server Error",
            log: err
         })
      })
   }

   static getOne (req, res, next) {
      const itemId = req.params.id

      Item.findOne({
         where: {id: itemId},
         include: [Account]
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

      const {name, thumbnail, price, stock} = req.body
      const itemId = req.params.id

      Item.findOne({where:{id:itemId}})
      .then((data) => {
         data.update({name, thumbnail, price, stock}, {where: {id: itemId}})
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
      const itemId = req.params.id

      item.destroy({where: {id: itemId}})
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

module.exports = ItemController