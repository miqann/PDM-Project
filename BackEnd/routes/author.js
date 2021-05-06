var express = require('express');
var router = express.Router();
var controlAuthor = require('../Controllers/author');
/* GET users listing. */
router.get('/', controlAuthor.getAuthor);

module.exports = router;