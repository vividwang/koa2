/**
 * Created by w on 2018/4/2.
 */
const cp = require('child_process');
const { resolve } = require('path');

(async ()=>{
  const script = resolve(__dirname,'./tasks/trailer-list.js');
  const child_p = cp.fork(script,[]);
  let invoked = false;//标识进程是否被执行过

  child_p.on('error',err=>{
    if (invoked) return ;

    invoked = true;
    console.log(err);
  });

  child_p.on('exit',code=>{
    if (invoked) return;

    let err = code === 0 ? null :new Error('exit code: ' +code);

    console.log(err);
  });

  child_p.on('message',data=>{
    let result = data.result;

    console.log(result);
  })
})();