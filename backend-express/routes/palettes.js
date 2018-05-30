var express = require('express');
var router = express.Router();

palModels = require('../models/palette.js')

/* GET home page. */
router.get('/', (req, res, next) => {
  palModels.showAll()
    .then(pals => {
      res.json({pals:pals});
    }).catch(err =>{
      console.log(err)
      res.status(500).json({err:err})
    })
});

module.exports = router;
