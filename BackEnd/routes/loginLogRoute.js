var express = require('express');
var router = express.Router();
var controllLoginLog = require('../Controllers/LoginLogControl');
/* GET author listing. */
router.get('/search', controllLoginLog.getLog);
module.exports = router;