const error400 = {
   message: "Bad Request"
}

const error422 = {
   message: "Unprocessable Data"
}

const addCart = (req, res, next) => {
   const {AccountId, ItemId, quantity} = req.body
   if (!AccountId || !ItemId || !quantity) {
      res.status(400).json(error400)
   } else if (typeof AccountId !== 'number' || typeof ItemId !== 'number' || typeof quantity !== 'number') {
      res.status(422).json(error422)
   } else {
      next()
   }
}

const checkAccountId = (req, res, next) => {
   const id = req.params.AccountId

   if (!id) {
      res.status(400).json(error400)
   } else if (typeof id !== "number"){
      res.status(422).json(error422)
   } else {
      next()
   }
}
const checkAllId = (req, res, next) => {
   const accountId = req.params.AccountId
   const itemId = req.params.ItemId
   if (!accountId || !itemId) {
      res.status(400).json(error400)
   } else if (typeof accountId !== "number" || typeof itemId !== "number"){
      res.status(422).json(error422)
   } else {
      next()
   }
}

module.exports = {
   addCart,
   checkAccountId,
   checkAllId
}