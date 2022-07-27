const { Router } = require('express')

const reverseTextRouter = require('./reverseText')

const router = Router()

router.use('/', reverseTextRouter)

module.exports = router
