var express = require('express');
var router = express.Router();
var registerControl = require('../Controllers/registerControl');

router.post('/',registerControl.registerNew);

module.exports =router;