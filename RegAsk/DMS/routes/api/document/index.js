const express = require("express")
const router = express.Router()

router.use('/document',require('./documents'))

module.exports = router;