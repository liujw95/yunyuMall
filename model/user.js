/**
 ** create by liujw on 2019/3/23 0:42
 **
 */
require('../model/order');
const db = require("../db");
const Schema=db.Schema;
const userSchema=new Schema({
    userInfo:new Schema({
        nickName:String,
        avatarUrl:String,
        gender:{
            type:String,
            set:function (value) {
                return value==1?'男':value==2?'女':'未知'
            }
        },
        country:String,
        province:String,
        city:String,
        language: String
    }),
    openid:String,
    adress:[
        new Schema({

        })
    ]
});
const user=db.model('user',userSchema);
module.exports=user;