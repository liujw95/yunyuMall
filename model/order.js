/**
 ** create by liujw on 2019/3/23 1:03
 **
 */
const db = require("../db");
require('../model/shop');
const Schema=db.Schema;
const orderSchema=new Schema({
    createTime:{
        type: Date,
        default: Date.now
    },
    state:String,//状态：'未支付'、'已支付'、'已发货'、'已收货'、'已评价'
    evaluation:new Schema({
        evaluation_shop:Number,
        evaluation_logistics:Number,
        detail:String
    }),
    shop:{
        type:Schema.Types.ObjectId,
        ref:'shop'
    }
});
const order=db.model('order',orderSchema);
module.exports=order;