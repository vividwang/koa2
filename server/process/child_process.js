/**
 * Created by w on 2018/3/30.
 */
const {exec} = require('child_process');

let res = exec('echo "The \\$HOME variable is $HOME"');

res.stdout.on('data',data=>{
  console.log(data);
});

res.on('exit',code=>{
  console.log(process.pid);
  console.log('exit',code);
});
