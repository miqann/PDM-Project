var express = require('express');
var router = express.Router();
var loginControl = require('../Controllers/loginControl');

router.post('/',loginControl.getLogin);

module.exports =router;