const express = require('express');
const router = express.Router();

router.use('/account', require('./userAccount'));

module.exports = router;