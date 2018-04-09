/**
 * Created by w on 2018/4/8.
 */
const cluster = require('cluster');
const OS = require('os');

let workers = [];  //存储所有的子进程

const masterProcess = () => {
  console.info(`一共有${OS.cpus().length}个核心`);
  console.info(`master主进程${process.pid}启动`);

  for (let i = 0; i < OS.cpus().length; i++) {
    console.info(`正在Fork子进程${i}`);
    const worker = cluster.fork();

    workers.push(worker);
    worker.on('message', message => {
      console.info(`主进程${process.pid}收到${JSON.stringify(message)}
          来自${worker.process.pid}`);
    })
  }

  workers.forEach(worker => {
    console.info(`主进程${process.pid}发消息给子进程${worker.process.pid}`);
    worker.send(`msg:来自主进程的消息${process.pid}`)
  }, this)
};

const child_process = () => {
  console.info(`Worker子进程${process.pid}启动并退出`);

  process.on('message', message => {
    console.info(`Worker子进程${process.pid}收到消息${JSON.stringify(message)}`)
  });

  console.info(`Worker子进程${process.pid}发消息给主进程`);
  process.send({msg: `来自子进程的消息${process.pid}`});
  console.info(`Worker子进程${process.pid}结束`)
};

if (cluster.isMaster) {
  masterProcess();
} else {
  child_process();
}