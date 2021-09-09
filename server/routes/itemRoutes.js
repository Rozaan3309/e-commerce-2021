const router = require('express').Router()
const itemController = require('../controller/itemController')
const validator = require('../middleware/itemValidator')
const auth = require('../middleware/auth')
const authorization = require('../middleware/authorization')

router.get('/getAll', itemController.getAll)
router.get('/getOne/:id', validator.checkId, itemController.getOne)
router.post('/additem', auth, authorization, validator.addItem, itemController.addItem)
router.put('/update/:id', auth, authorization, validator.checkId, itemController.update)
router.delete('/delete/:id', auth, authorization, validator.checkId, itemController.delete)

module.exports = router