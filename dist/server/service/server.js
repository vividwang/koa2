'use strict';

/**
 * Created by w on 2018/4/9.
 */
var koa = require('koa');
var app = new koa();

app.use(async function (ctx, next) {
  ctx.body = 'First Koa project';
});

app.listen(5000, function () {
  console.info('App running at port 6000');
});
//# sourceMappingURL=server.js.map