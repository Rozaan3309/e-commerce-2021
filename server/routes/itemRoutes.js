const router = require('express').Router()

router.get('/', (req, res) => {
   res.send("item")
})

module.exports = router