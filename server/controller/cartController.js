require('dotenv').config()
const { Cart, Item, Account } = require('../models')

class CartController {
   static addCart (req, res, next) {

      const {AccountId, ItemId, quantity} = req.body

      Cart.create({AccountId, ItemId, quantity})
      .then((data) => {
         res.status(201).json({
            message: "add cart success!",
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

   static getAll (req, res, next) {
      Cart.findAll({
         include: [Account, Item]
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

   static getAllFromAccount (req, res, next) {
      const id = req.params.AccountId
      
      Cart.findAll({
         where: {AccountId: id},
         include: [Item],
         attributes: ['id', 'AccountId', "ItemId", "quantity"]
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
      const {AccountId, ItemId} = req.params

      if (!AccountId, ItemId) {
         res.status(422).json({
            message: "Data couldn't be processed"
         })
      } else {
         Cart.findOne({
            where: {
               AccountId, ItemId
            },
            include: [Account, Item]
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
   }

   static update (req, res, next) {
      const {AccountId, ItemId} = req.params
      const {quantity} = req.body

      if (!AccountId || !ItemId) {
         res.status(422).json({
            message: "Data couldn't be processed"
         })
      } else {
         Cart.findOne({
            where:{AccountId:AccountId, ItemId:ItemId},
            include: [Account, Item]
         })
         .then((data) => {
            data.update({AccountId, ItemId, quantity}, {where: {AccountId:AccountId, ItemId:ItemId}})
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

   }

   static delete (req, res, next) {
      // const cartId = req.params.id
      const {AccountId, ItemId} = req.params

      if (!AccountId || !ItemId) {
         res.status(422).json({
            message: "Data couldn't be processed"
         })
      } else {
         Cart.destroy({where:{AccountId:AccountId, ItemId:ItemId}})
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

   static deleteAll (req, res, next) {
      // const cartId = req.params.id
      const {AccountId} = req.params

      if (!AccountId) {
         res.status(422).json({
            message: "Data couldn't be processed"
         })
      } else {
         Cart.destroy({where:{AccountId:AccountId}})
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

   static checkAllBody (req, res, next) {
      const {AccountId, ItemId, quantity} = req.body
      if (!AccountId || !ItemId || !quantity) {
         console.log("failed to validate all body")
         res.status(422).json({
            message: "Unprocessable Data"
         })
      } else {
         console.log("success to validate all body")
         next()
      }
   }
}

module.exports = CartController