const router = require('express').Router()
const itemController = require('../controller/itemController')

router.get('/getAll', itemController.getAll)
router.get('/getOne/:id', itemController.getOne)
router.post('/additem', itemController.checkAllBody, itemController.addItem)
router.put('/update/:id', itemController.update)
router.delete('/delete/:id', itemController.delete)

module.exports = router