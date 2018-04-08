/**
 * Created by w on 2018/4/3.
 */
const puppeteer = require('puppeteer');

const URI = 'http://msp02-nms.claaiot.com:2999/';
const sleep = async(timer) => {
  return new Promise(resolve => {
    setTimeout(resolve, timer);
  })
};

(async() => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox'],
    dumpio: false
  });
  const page = await browser.newPage();

  await page.goto(URI, {waitUntil: 'networkidle2'});
  await sleep(3000);

  let res = await page.evaluate(() => {
      let text = document.getElement.val();
      let pwd = $(':password').val();

      return {text,pwd}
    }
  );

  await browser.close();

  console.log(res);
})();