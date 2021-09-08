const error400 = {
   message: "Bad Request"
}

const error422 = {
   message: "Unprocessable Data"
}

const addItem = (req, res, next) => {
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
      res.status(400).json(error400)
   } else if (typeof req.params.id !== "string"){
      res.status(422).json(error422)
   } else {
      next()
   }
}

module.exports = {
   addItem,
   checkId
}