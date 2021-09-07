const router = require('express').Router()
const cartController = require('../controller/cartController')

router.get('/getAll', cartController.getAll)
router.get('/getAllFromAccount/:AccountId', cartController.getAllFromAccount)
router.get('/getOne/:AccountId/:ItemId', cartController.getOne)
router.post('/addCart', cartController.checkAllBody, cartController.addCart)
router.put('/update/:AccountId/:ItemId', cartController.update)
router.delete('/delete/:AccountId/:ItemId', cartController.delete)
router.delete('/deleteAll/:AccountId/', cartController.deleteAll)

module.exports = router