var express = require('express');
var router = express.Router();
var controllQuery = require('../Controllers/QueryControl.js');
/* GET author listing. */
router.get('/search', controllQuery.usingQuery);
module.exports = router;