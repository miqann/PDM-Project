var express = require('express');
var router = express.Router();
var controlCustomer = require('../Controllers/CustomerControl');
/* GET author listing. */
router.get('/', controlCustomer.getCustomer);

module.exports = router;