const errorHandler = ( err, req, res, next ) => {
   let statusCode = 0
   let message = ''
   let log = err.log ? err.log : ""

   if (err.name === "REQUESTED_DATA_NOT_FOUND") {
      statusCode = 404
      message = "Data Not Found"
      if (err.custom) {
         message = err.custom
      }
   } else if (err.name === "REQUIRED_DATA_NOT_FOUND") { //data yang dibutuhkan server tidak ditemukan
      statusCode = 400
      message = "Bad Request"
      if (err.custom) {
         message = err.custom
      }
   } else if (err.name === "UNPROCESSABLE_DATA") {
      statusCode = 422
      message = "Wrong Data Type"
      if (err.custom) {
         message = err.custom
      }
   } else if (err.name === "FORBIDDEN") {
      statusCode = 403
      message = "Unauthenticated"
      if (err.custom) {
         message = err.custom
      }
   } else if (err.name === "UNAUTHORIZED") {
      statusCode = 401
      message = "Unauthorized"
      if (err.custom) {
         message = err.custom
      }
   } else {
      statusCode = 500
      message = "Internal Server Error"
   }

   res.status(statusCode).json({
      message,
      log
   })
}

module.exports = errorHandler