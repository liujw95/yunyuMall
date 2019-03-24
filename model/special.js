/**
 ** create by liujw on 2019/3/18 14:10
 **
 */
require('../model/shop');
const db = require("../db");
const Schema=db.Schema;
const specialSchema=new Schema({
    title:String,
    headImg:String,
    available:Boolean,
    shops:[{
        type:Number,
        ref:'shop'
    }]
});
const special=db.model('special',specialSchema);
module.exports=special;