const mongoose = require("mongoose"); //引入mongoose
mongoose.connect("mongodb://localhost:27017/yymall", {useNewUrlParser:true}, function(err){
    if(err){
        console.log('Connection Error:' + err)
    }else{
        console.log('connected!')
    }

}) //连接到mongoDB的todo数据库
//该地址格式：mongodb://[username:password@]host:port/database[?options]
//默认port为27017

const db = mongoose.connection;
db.on('error', function callback() { //监听是否有异常
    console.log("Connection error");
});

module.exports = mongoose;