const router = require('express').Router()
const itemController = require('../controller/itemController')
const validator = require('../middleware/itemValidator')

router.get('/getAll', itemController.getAll)
router.get('/getOne/:id', validator.checkId, itemController.getOne)
router.post('/additem', validator.addItem, itemController.addItem)
router.put('/update/:id', validator.checkId, itemController.update)
router.delete('/delete/:id', validator.checkId, itemController.delete)

module.exports = router