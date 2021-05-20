var express = require('express');
var router = express.Router();
var controlCustomer = require('../Controllers/CustomerControl');
/* GET author listing. */
router.get('/', controlCustomer.getCustomer);
router.get('/search', controlCustomer.searchCustomer);
module.exports = router;