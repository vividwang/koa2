/**
 * Created by w on 2018/3/15.
 */
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx,next)=>{
    ctx.body = "<h1>Hello,Koa</h1>";
});

app.listen(3000,()=>{
    console.info('App running!');
});