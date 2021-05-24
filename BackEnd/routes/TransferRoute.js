var express = require('express');
var router = express.Router();
var transferControl = require('../Controllers/transferControl');

router.post('/',transferControl.transferNew);

module.exports =router;