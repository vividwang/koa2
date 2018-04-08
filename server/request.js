/**
 * Created by w on 2018/4/3.
 */
const request = require('request');
const cheerio = require('cheerio');
const loginURI = 'http://msp02-nms.claaiot.com:2999/taizhi/login';
const URI = 'http://msp02-nms.claaiot.com:2999/taizhi/data/getBuildingsMapStatistics?req=%5Bobject%20Object%5D';
const user = 'admin',
  password='123456';

request(URI,(err,res,body)=>{
  if (err){
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
