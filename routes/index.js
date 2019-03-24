const express = require('express');
const ad = require('../model/ad');
const special = require('../model/special');
const router = express.Router();

/* GET ad. */
router.get('/index', function(req, res, next) {
  let index = {};
  let getAd=ad.find({available:true}).exec((err,ads)=> {
    if(err){
      console.error(err);
    }
    index.ad=ads;
    special.find().populate('shops').exec((err,specials)=> {
      if(err){
        console.error('err：'+err);
      }

      index.special=specials;
      res.send(index);
    });
  });
});



module.exports = router;
