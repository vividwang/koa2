/**
 * Created by w on 2018/3/30.
 */
const puppeteer = require('puppeteer');
const request = require('request');

(async() => {
  const sleep = async(timer) => {
    return new Promise(resolve => {
      setTimeout(resolve, timer);
    })
  };

  const userAget = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36';
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setUserAgent(userAget);
  await page.goto('http://douban.com', {waitUntil: 'networkidle2'});

  await sleep(3000);

  await page.waitForSelector('.get-more');

  for (let i = 0; i < 30; i++) {
    await sleep(500);
    await page.hover('.get-more');
  }

  let res = await page.evaluate(() => {
    let $ = window.$;

    let items = $('.grid-tweet-media');
    let imgSrc = [];

    if (items.length >= 1) {
      items.each((index, item) => {
        let it = $(item);
        let img = it.find('img').attr('src');

        imgSrc.push(img);
      });
    }
    return {imgSrc: imgSrc};
  });

  for (let i = 0; i < res.imgSrc.length; i++) {
    request(res.imgSrc[i]).pipe(require('fs').createWriteStream(Math.random() + '.png'));
  }
  await browser.close();
})();