'use strict';

/**
 * Created by w on 2018/4/3.
 */
var puppeteer = require('puppeteer');

var URI = 'http://msp02-nms.claaiot.com:2999/';
var sleep = async function sleep(timer) {
  return new Promise(function (resolve) {
    setTimeout(resolve, timer);
  });
};

(async function () {
  var browser = await puppeteer.launch({
    args: ['--no-sandbox'],
    dumpio: false
  });
  var page = await browser.newPage();

  await page.goto(URI, { waitUntil: 'networkidle2' });
  await sleep(3000);

  var res = await page.evaluate(function () {
    var text = document.getElement.val();
    var pwd = $(':password').val();

    return { text: text, pwd: pwd };
  });

  await browser.close();

  console.log(res);
})();
//# sourceMappingURL=fetchData.js.map