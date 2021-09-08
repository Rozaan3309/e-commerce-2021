const router = require('express').Router()
const accountController = require('../controller/accountController')
const adminController = require('../controller/adminController')
const validator = require('../middleware/accountValidator')

router.get('/getAll', accountController.getAll)
router.get('/getOne/:id', validator.checkId , accountController.getOne)
router.post('/register', validator.register, accountController.register)
router.post('/login', validator.login, accountController.login)
router.post('/adminLogin', validator.login, adminController.adminLogin)
router.put('/update/:id', validator.checkId, accountController.update)
router.delete('/delete/:id', validator.checkId, accountController.delete)

module.exports = router