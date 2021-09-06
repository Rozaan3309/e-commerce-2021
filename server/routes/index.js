const router = require('express').Router()
const account = require('./accountRoutes')
const item = require('./itemRoutes')
const cart = require('./cartRoutes')

router.use('/api/account/', account)
router.use('/api/item/', item)
router.use('/api/cart/', cart)

module.exports = router