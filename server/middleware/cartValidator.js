const addCart = (req, res, next) => {
   const {AccountId, ItemId, quantity} = req.body
   if (!AccountId || !ItemId || !quantity) {
      next({name: "REQUIRED_DATA_NOT_FOUND"})
   } else if (typeof AccountId !== 'number' || typeof ItemId !== 'number' || typeof quantity !== 'number') {
      next({name: "UNPROCESSABLE_DATA"})
   } else {
      next()
   }
}

const checkAccountId = (req, res, next) => {
   const id = req.params.AccountId

   if (!id) {
      next({name: "REQUIRED_DATA_NOT_FOUND"})
   } else if (typeof id !== "number"){
      next({name: "UNPROCESSABLE_DATA"})
   } else {
      next()
   }
}
const checkAllId = (req, res, next) => {
   const accountId = req.params.AccountId
   const itemId = req.params.ItemId
   if (!accountId || !itemId) {
      next({name: "REQUIRED_DATA_NOT_FOUND"})
   } else if (typeof accountId !== "number" || typeof itemId !== "number"){
      next({name: "UNPROCESSABLE_DATA"})
   } else {
      next()
   }
}

module.exports = {
   addCart,
   checkAccountId,
   checkAllId
}