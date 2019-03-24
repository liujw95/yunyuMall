/**
 ** create by liujw on 2019/3/24 17:43
 **
 */
const db = require("../db");
const adSchema=db.Schema({
    shop:{
        type:Schema.Types.ObjectId,
        ref:'shop'
    },
    quantity:Number
});
const ad=db.model('Ad',adSchema);
module.exports=ad;