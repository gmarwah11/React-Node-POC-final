const express = require('express');
const router = express.Router();

router.use('/user', require('./user/index'));

module.exports = router;