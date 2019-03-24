/**
 ** create by liujw on 2019/3/18 14:10
 **
 */
require('../model/sort');
const db = require("../db");
const Schema = db.Schema;
const shopSchema = new Schema({
    _id: Number,
    title: String,
    subTitle: String,
    images: [String],
    baseMessage: [],
    quantity:Number,
    price: {type: Schema.Types.Decimal128, default: 0},
    props: [new Schema({
        name: String,
        values: []
    })],
    sort:[{
        type:Schema.Types.ObjectId,
        ref:'sort'
    }]


});
const shop = db.model('shop', shopSchema);
module.exports = shop;