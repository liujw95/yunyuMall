/**
 ** create by liujw on 2019/3/19 22:13
 **
 */
var express = require('express');
var router = express.Router();

const shop = require('../model/shop');

/* GET users listing. */
router.get('/', function (req, res, next) {
    let search;
    if (req.query.search) {
        search = req.query.search.replace(/(^\s*)|(\s*$)/g, "");
    } else {
        search = '裙'
    }
    let query, str = '';
    if (search.length > 1) {
        for (let w of search) {
            str += w + '.*'
        }
        query = new RegExp(str, 'i');
    } else {
        query = new RegExp(search, 'i');
    }

    shop.find({title: {$regex: query}}).exec((err, doc) => {
        if (err) return console.error(err);
        res.send({shops: doc});
    })

});

module.exports = router;

