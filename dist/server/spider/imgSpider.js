'use strict';

/**
 * Created by w on 2018/3/30.
 */
var puppeteer = require('puppeteer');
var request = require('request');

(async function () {
  var sleep = async function sleep(timer) {
    return new Promise(function (resolve) {
      setTimeout(resolve, timer);
    });
  };

  var userAget = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36';
  var browser = await puppeteer.launch();
  var page = await browser.newPage();
  await page.setUserAgent(userAget);
  await page.goto('http://douban.com', { waitUntil: 'networkidle2' });

  await sleep(3000);

  await page.waitForSelector('.get-more');

  for (var i = 0; i < 30; i++) {
    await sleep(500);
    await page.hover('.get-more');
  }

  var res = await page.evaluate(function () {
    var $ = window.$;

    var items = $('.grid-tweet-media');
    var imgSrc = [];

    if (items.length >= 1) {
      items.each(function (index, item) {
        var it = $(item);
        var img = it.find('img').attr('src');

        imgSrc.push(img);
      });
    }
    return { imgSrc: imgSrc };
  });

  for (var _i = 0; _i < res.imgSrc.length; _i++) {
    request(res.imgSrc[_i]).pipe(require('fs').createWriteStream(Math.random() + '.png'));
  }
  await browser.close();
})();
//# sourceMappingURL=imgSpider.js.map