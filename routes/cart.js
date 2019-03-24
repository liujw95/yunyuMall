/**
 ** create by liujw on 2019/3/24 17:34
 **
 */
var express = require('express');
var router = express.Router();

const cart = require('../model/sort');
router.get('/', function (req, res, next) {
    Sort.find({leavel:1}).sort({ index: 'asc'}).exec((err,data)=>{
        if(err) return console.log(err);
        res.send(data);
    });

});

module.exports = router;