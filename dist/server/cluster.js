'use strict';

/**
 * Created by w on 2018/4/8.
 */
var cluster = require('cluster');
var OS = require('os');

var workers = []; //存储所有的子进程

var masterProcess = function masterProcess() {
  console.info('\u4E00\u5171\u6709' + OS.cpus().length + '\u4E2A\u6838\u5FC3');
  console.info('master\u4E3B\u8FDB\u7A0B' + process.pid + '\u542F\u52A8');

  var _loop = function _loop(i) {
    console.info('\u6B63\u5728Fork\u5B50\u8FDB\u7A0B' + i);
    var worker = cluster.fork();

    workers.push(worker);
    worker.on('message', function (message) {
      console.info('\u4E3B\u8FDB\u7A0B' + process.pid + '\u6536\u5230' + JSON.stringify(message) + '\n          \u6765\u81EA' + worker.process.pid);
    });
  };

  for (var i = 0; i < OS.cpus().length; i++) {
    _loop(i);
  }

  workers.forEach(function (worker) {
    console.info('\u4E3B\u8FDB\u7A0B' + process.pid + '\u53D1\u6D88\u606F\u7ED9\u5B50\u8FDB\u7A0B' + worker.process.pid);
    worker.send('msg:\u6765\u81EA\u4E3B\u8FDB\u7A0B\u7684\u6D88\u606F' + process.pid);
  }, undefined);
};

var child_process = function child_process() {
  console.info('Worker\u5B50\u8FDB\u7A0B' + process.pid + '\u542F\u52A8\u5E76\u9000\u51FA');

  process.on('message', function (message) {
    console.info('Worker\u5B50\u8FDB\u7A0B' + process.pid + '\u6536\u5230\u6D88\u606F' + JSON.stringify(message));
  });

  console.info('Worker\u5B50\u8FDB\u7A0B' + process.pid + '\u53D1\u6D88\u606F\u7ED9\u4E3B\u8FDB\u7A0B');
  process.send({ msg: '\u6765\u81EA\u5B50\u8FDB\u7A0B\u7684\u6D88\u606F' + process.pid });
  console.info('Worker\u5B50\u8FDB\u7A0B' + process.pid + '\u7ED3\u675F');
};

if (cluster.isMaster) {
  masterProcess();
} else {
  child_process();
}
//# sourceMappingURL=cluster.js.map