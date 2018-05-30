var express = require('express');
var router = express.Router();

palModels = require('../models/palette.js')

/* get ONE pal palette by it's id */
router.get('/:id', (req, res, next) => {
  palModels.getOne(req.params.id)
    .then(pal => {
      res.json({pal:pal});
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({err:err})
    })
});

/* GET all the pal palettes */
router.get('/', (req, res, next) => {
  palModels.showAll()
    .then(pals => {
      res.json({pals:pals});
    })
    .catch(err =>{
      console.log(err)
      res.status(500).json({err:err})
    })
});


module.exports = router;
