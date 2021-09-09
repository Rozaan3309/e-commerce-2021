const router = require('express').Router()
const cartController = require('../controller/cartController')
const validator = require("../middleware/cartValidator")
const auth = require('../middleware/auth')
const authorization = require('../middleware/authorization')

router.get('/getAll', auth, authorization, cartController.getAll)
router.get('/getAllFromAccount/:AccountId', auth, validator.checkAccountId, cartController.getAllFromAccount)
router.get('/getOne/:AccountId/:ItemId', auth, validator.checkAllId, cartController.getOne)
router.post('/addCart', auth, validator.addCart, cartController.addCart)
router.put('/update/:AccountId/:ItemId', auth, validator.checkAllId, cartController.update)
router.delete('/delete/:AccountId/:ItemId', auth, validator.checkAllId, cartController.delete)
router.delete('/deleteAll/:AccountId/', auth, validator.checkAccountId, cartController.deleteAll)

module.exports = router