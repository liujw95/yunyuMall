/**
 ** create by liujw on 2019/3/21 14:42
 **
 */
var express = require('express');
var router = express.Router();

const Sort = require('../model/sort');

let sorts=[];


/* GET sort listing. */
router.get('/', function (req, res, next) {
    Sort.find({leavel:1}).populate({
        path: 'children',
        populate: {
            path: 'children'
        }
    }).sort({ index: 'asc'}).exec((err,data)=>{
        if(err) return console.log(err);
        res.send(data);
    });

});

module.exports = router;