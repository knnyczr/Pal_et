const express = require('express');
const router = express.Router();
palModels = require('../models/palette.js')

/* this is for deleteing pals */
router.delete('/api/:id', (req,res,next) => {
  // console.log(req.params.id)
  // palModels.destroy(req.params.id)
  // .then((res) => {
  //   res.status(200)
  //   next();
  // })
  // .catch(err => console.log(err))
  res.send(req.path)
});

/* this is to create a new palette */
router.post('/', (req,res,next) => {
  palModels.createOne({
    hex1: req.body.hex1,
    hex2: req.body.hex2,
    hex3: req.body.hex3,
    hex4: req.body.hex4,
    hex5: req.body.hex5,
  })
  .then((res) =>{
    res.locals.palModels = data;
  })
  .then((res) => {
    res.redirect('/api')
    next()
  })
  .then((res) => res.status(200))
  .catch(err => console.log(err))
});

/* get ONE pal palette by it's id */
router.get('/api/:id', (req, res, next) => {
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
