'use strict';

/**
 * Created by w on 2018/4/2.
 */
var puppeteer = require('puppeteer');
var url = 'https://movie.douban.com/tag/#/?sort=S&range=6,10&tags=';

var sleep = async function sleep(timer) {
  return new Promise(function (resolve) {
    setTimeout(resolve, timer);
  });
};

(async function () {
  console.log('start visit the mivie page!');

  var browser = await puppeteer.launch({
    args: ['--no-sandbox'],
    dumpio: false
  });
  var page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });

  await sleep(3000);

  await page.waitForSelector('.more');

  for (var i = 0; i < 1; i++) {
    await sleep(3000);
    await page.click('.more');
  }

  var result = await page.evaluate(function () {
    var $ = window.$;
    var items = $('.list-wp a');
    var links = [];

    if (items.length >= 1) {
      items.each(function (index, item) {
        var it = $(item);
        var doubanId = it.find('div').data('id');
        var title = it.find('.title').text();
        var rate = Number(it.find('.rate').text());
        var poster = it.find('img').attr('src').replace('s_ratio', 'l_ratio');

        links.push({
          doubanId: doubanId,
          title: title,
          rate: rate,
          poster: poster
        });
      });
    }

    return links;
  });

  await browser.close();
  console.log(result);
})();
//# sourceMappingURL=trailer-list.js.map