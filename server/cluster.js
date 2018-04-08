/**
 * Created by w on 2018/4/8.
 */
const cluster = require('cluster');
const OS = require('os');

// console.log(OS.cpus());

const masterProcess = () => {
  console.info(`一共有${OS.cpus().length}个核心`);
  console.info(`master主进程${process.pid}启动`);

  for (let i = 0; i < OS.cpus().length; i++) {
    console.info(`正在Fork子进程${i}`);
    cluster.fork();
  }

  process.exit();
};

const child_process = () => {
  console.info(`Worker子进程${process.pid}启动并退出`);
  process.exit();
};

if (cluster.isMaster){
  masterProcess();
}else {
  child_process();
}