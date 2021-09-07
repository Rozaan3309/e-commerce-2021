const router = require('express').Router()
const cartController = require('../controller/cartController')

router.get('/getAll', cartController.getAll)
router.get('/getOne/:id', cartController.getOne)
router.post('/addCart', cartController.checkAllBody, cartController.addCart)
router.put('/update/:id', cartController.update)
router.delete('/delete/:id', cartController.delete)

module.exports = router