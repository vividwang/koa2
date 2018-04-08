'use strict';

/**
 * Created by w on 2018/4/2.
 */
var cp = require('child_process');

var _require = require('path'),
    resolve = _require.resolve;

(async function () {
  var script = resolve(__dirname, './tasks/trailer-list.js');
  var child_p = cp.fork(script, []);
  var invoked = false; //标识进程是否被执行过

  child_p.on('error', function (err) {
    if (invoked) return;

    invoked = true;
    console.log(err);
  });

  child_p.on('exit', function (code) {
    if (invoked) return;

    var err = code === 0 ? null : new Error('exit code: ' + code);

    console.log(err);
  });

  child_p.on('message', function (data) {
    var result = data.result;

    console.log(result);
  });
})();
//# sourceMappingURL=crawler.js.map