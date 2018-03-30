/**
 * Created by w on 2018/3/29.
 */
const puppeteer = require('puppeteer');

(async() => {
    const sleep = async(timer) => {
        return new Promise(resolve => {
            setTimeout(resolve, timer);
        });
    };

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://cn.mobx.js.org/intro/overview.html');
    // await page.screenshot({path: 'example.png'});
    // await page.pdf({path: __dirname + 'example.pdf', format: 'A4'});
    let res = await page.evaluate(() => {
        return {
            text: $('#1-定义状态并使其可观察').text()
        }
    });

    await sleep(3000);
    console.log(res.text);
    await browser.close();
})();