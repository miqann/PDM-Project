var express = require('express');
var router = express.Router();
var controllAccount = require('../Controllers/AccountControl');
/* GET author listing. */
router.get('/search', controllAccount.searchAccount);
module.exports = router;