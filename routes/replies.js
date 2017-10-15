var express = require('express');
var bodyParser = require('body-parser');
var Models = require('../models');
var router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', function(req, res) {
  res.send("Hello world");
});

module.exports = router;