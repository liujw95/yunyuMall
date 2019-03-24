/**
 ** create by liujw on 2019/3/23 21:15
 **
 */
var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET sort listing. */
router.get('/', function (req, res, next) {
    let name=req.query.name;
    const agreement=fs.readFileSync('agreements/'+name+'.txt').toString();
    res.send({agreement:agreement});
});


module.exports = router;