'use strict';

/**
 * Created by w on 2018/4/8.
 */
var cluster = require('cluster');
var OS = require('os');

// console.log(OS.cpus());

var masterProcess = function masterProcess() {
  console.info('\u4E00\u5171\u6709' + OS.cpus().length + '\u4E2A\u6838\u5FC3');
  console.info('master\u4E3B\u8FDB\u7A0B' + process.pid + '\u542F\u52A8');

  for (var i = 0; i < OS.cpus().length; i++) {
    console.info('\u6B63\u5728Fork\u5B50\u8FDB\u7A0B' + i);
    cluster.fork();
  }

  process.exit();
};

var child_process = function child_process() {
  console.info('Worker\u5B50\u8FDB\u7A0B' + process.pid + '\u542F\u52A8\u5E76\u9000\u51FA');
  process.exit();
};

if (cluster.isMaster) {
  masterProcess();
} else {
  child_process();
}
//# sourceMappingURL=cluster.js.map