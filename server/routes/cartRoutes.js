const router = require('express').Router()
const cartController = require('../controller/cartController')
const validator = require("../middleware/cartValidator")

router.get('/getAll', cartController.getAll)
router.get('/getAllFromAccount/:AccountId', validator.checkAccountId, cartController.getAllFromAccount)
router.get('/getOne/:AccountId/:ItemId', validator.checkAllId, cartController.getOne)
router.post('/addCart', validator.addCart, cartController.addCart)
router.put('/update/:AccountId/:ItemId', validator.checkAllId, cartController.update)
router.delete('/delete/:AccountId/:ItemId', validator.checkAllId, cartController.delete)
router.delete('/deleteAll/:AccountId/', validator.checkAccountId, cartController.deleteAll)

module.exports = router