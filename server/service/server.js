/**
 * Created by w on 2018/4/9.
 */
const koa = require('koa');
const app = new koa();

app.use(async(ctx,next)=>{
  ctx.body = 'First Koa project';
});

app.listen(5000,()=>{
  console.info('App running at port 6000');
});
