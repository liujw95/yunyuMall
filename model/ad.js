/**
 ** create by liujw on 2019/3/18 14:10
 **
 */

const db = require("../db");
const adSchema=db.Schema({
    tapUrl:String,
    imgUrl:String,
    desc:String,
    available:Boolean
});
const ad=db.model('Ad',adSchema);
module.exports=ad;
