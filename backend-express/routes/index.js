var express = require('express');
var router = express.Router();

palModels = require('../models/palette.js')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('this is the get route');
});

module.exports = router;
