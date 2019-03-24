/**
 ** create by liujw on 2019/3/19 22:30
 **
 */
const db = require("../db");
const Schema=db.Schema;
const sortSchema=new Schema({
    name: String,
    img: String,
    index: Number,
    leavel:Number,
    children:[{
        type:Schema.Types.ObjectId,
        ref:'sort'
    }]
});
const sort=db.model('sort',sortSchema);
module.exports=sort;