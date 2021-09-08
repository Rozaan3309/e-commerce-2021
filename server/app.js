require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 4001
const routes = require('./routes')
const errorHandler = require('./middleware/errorHandler')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/', routes)
app.use(errorHandler)

app.listen(port, () => {
   console.log("The server is totally fine! It's on port " + port)
})