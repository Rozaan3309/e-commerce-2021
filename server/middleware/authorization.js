const authorization = (req, res, next) => {
   const admin = req.userData.isAdmin

   if (admin) {
      next()
   } else {
      next({
         name: "UNAUTHORIZED"
      })
   }
}

module.exports = authorization