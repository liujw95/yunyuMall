/**
 ** create by liujw on 2019/3/22 18:14
 **
 */

var express = require('express');
var router = express.Router();
var qs = require('querystring');
const https = require('https');
const user = require('../model/user');
/* GET login listing. */
router.post('/', function (req, response, next) {
    const jscode=req.body.code,
            userInfo=req.body.userInfo,
    //调用微信code2Session接口
        data =qs.stringify({
            appid:'wxbfb0ff6db82dfcc0',
            secret:'37bdc9e2366ff578e7b8c9fb73d36b4e',
            js_code:jscode,
            grant_type:'authorization_code'
    }),
         options = {
        hostname: 'api.weixin.qq.com',
        port: 443,
        path: '/sns/jscode2session?'+data,
        method: 'GET'
    },
        request= https.request(options, res=>{
            let data='';
            res.setEncoding('utf8');
            res.on('data',  chunk=> {
                data+=chunk;
            });
            res.on('end',()=>{
                let openid=JSON.parse(data).openid;
                user.count({openid:openid},(err,count)=>{
                    if(err)return response.send({
                        err:err
                    });
                    if(count==0){
                        const u =new user({
                            openid:openid,
                            userInfo:userInfo,
                            adress: []
                        });
                        u.save((err)=>{
                            if(err)return response.send({
                                err:err
                            });
                            response.send({
                                openid:openid,
                                userInfo:userInfo
                            });
                        })
                    }
                    else {
                        user.updateOne({openid:openid},{userInfo:userInfo},(err)=>{
                            if(err)return response.send({
                                err:err
                            });
                            response.send({
                                openid:openid,
                                userInfo:userInfo
                            });
                        })
                    }
                });

            });
    });
    request.on('error',err => {
        console.error('error on request: ' + err.message);
    })
    request.end();

});

module.exports = router;