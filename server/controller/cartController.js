require('dotenv').config()
const { Cart, Item, Account } = require('../models')

class CartController {
   static addCart (req, res, next) {

      const {AccountId, ItemId, quantity} = req.body

      Cart.findOne({where: {AccountId, ItemId}})
      .then((data) => {
         if (data) {
            data.update(
               {quantity: Number(quantity)+data.quantity},
               {where: {AccountId, ItemId}
            })
            .then((result) => {
               res.status(201).json({
                  message: "update cart success!",
                  result: result
               })      
            })
            .catch((err) => {
               res.status(500).json({
                  message: 'Internal Server Error',
                  result: err,
               })
            })
         } else {
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

   static update (req, res, next) {
      const {AccountId, ItemId} = req.params
      const {quantity} = req.body

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

   static delete (req, res, next) {
      // const cartId = req.params.id
      const {AccountId, ItemId} = req.params

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

   static deleteAll (req, res, next) {
      // const cartId = req.params.id
      const {AccountId} = req.params

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

module.exports = CartController