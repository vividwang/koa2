'use strict';

/**
 * Created by w on 2018/4/3.
 */
var request = require('request');
var cheerio = require('cheerio');
var loginURI = 'http://msp02-nms.claaiot.com:2999/taizhi/login';
var URI = 'http://msp02-nms.claaiot.com:2999/taizhi/data/getBuildingsMapStatistics?req=%5Bobject%20Object%5D';
var user = 'admin',
    password = '123456';

request(URI, function (err, res, body) {
  if (err) {
    console.log(err);
  }

  console.log(body);
});

// request.post({uri:loginURI,form:{username:user,password:password}},(err,res,body)=>{
//   if (err){
//     console.log(err);
//   }
//   console.log(res, body);
// });
//# sourceMappingURL=request.js.map