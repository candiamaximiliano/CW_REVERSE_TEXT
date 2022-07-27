const router = require('express').Router()
const getReverseText = require('../controllers/reverseTextController')

router.get('/iecho', getReverseText)

module.exports = router
