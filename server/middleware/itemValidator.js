const addItem = (req, res, next) => {
   console.log(req.userData)

   const {name, thumbnail, price, stock} = req.body
   if (!name || !thumbnail || !price || !stock) {
      next({name: "REQUIRED_DATA_NOT_FOUND"})
   } else if (typeof name !== 'string' || typeof thumbnail !== 'string' || typeof price !== 'number' || typeof stock !== 'number') {
      next({name: "UNPROCESSABLE_DATA"})
   } else {
      next()
   }
}

const checkId = (req, res, next) => {
   if (!req.params.id) {
      next({name: "REQUIRED_DATA_NOT_FOUND"})
   } else if (typeof req.params.id !== "string"){
      next({name: "UNPROCESSABLE_DATA"})
   } else {
      next()
   }
}

module.exports = {
   addItem,
   checkId
}