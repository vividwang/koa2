'use strict';

/**
 * Created by w on 2018/3/29.
 */
var puppeteer = require('puppeteer');

(async function () {
    var sleep = async function sleep(timer) {
        return new Promise(function (resolve) {
            setTimeout(resolve, timer);
        });
    };

    var browser = await puppeteer.launch();
    var page = await browser.newPage();
    await page.goto('http://cn.mobx.js.org/intro/overview.html');
    // await page.screenshot({path: 'example.png'});
    // await page.pdf({path: __dirname + 'example.pdf', format: 'A4'});
    var res = await page.evaluate(function () {
        return {
            text: $('#1-定义状态并使其可观察').text()
        };
    });

    await sleep(3000);
    console.log(res.text);
    await browser.close();
})();
//# sourceMappingURL=spider.js.map