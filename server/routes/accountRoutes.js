const router = require('express').Router()
const accountController = require('../controller/accountController')
const adminController = require('../controller/adminController')
const validator = require('../middleware/accountValidator')
const auth = require('../middleware/auth')
const authorization = require('../middleware/authorization')

router.get('/getAll', auth, authorization, accountController.getAll)
router.get('/getOne/:id', auth, validator.checkId , accountController.getOne)
router.post('/register', validator.register, accountController.register)
router.post('/login', validator.login, accountController.login)
router.post('/adminLogin', validator.login, adminController.adminLogin)
router.put('/update/:id', auth, validator.checkId, accountController.update)
router.delete('/delete/:id', auth, authorization, validator.checkId, accountController.delete)

module.exports = router