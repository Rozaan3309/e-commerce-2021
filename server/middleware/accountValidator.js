const error400 = {
   message: "Bad Request"
}

const error422 = {
   message: "Unprocessable Data"
}

const register = (req, res, next) => {
   const {name, email, password} = req.body
   if (!name || !email || !password) {
      next({name: "REQUIRED_DATA_NOT_FOUND"})
   } else if (typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
      next({name: "UNPROCESSABLE_DATA"})
   } else {
      const checkAt = email.includes('@')
      const checkDot = email.includes('.')

      if (!checkAt || !checkDot) {
         next({
            name: "UNPROCESSABLE_DATA",
            custom: "Email is not in a valid format!"
         })
      } else if (password.length < 6) {
         next({
            name: "UNPROCESSABLE_DATA",
            custom: "Password is too short!"
         })
      } else {
         next()
      }
   }
}
const login = (req, res, next) => {
   const {password, email} = req.body
   if (!password || !email) {
      next({name: "REQUIRED_DATA_NOT_FOUND"})
   } else if (typeof password !== 'string' || typeof email !== 'string') {
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
   register,
   login,
   checkId
}