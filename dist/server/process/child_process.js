'use strict';

/**
 * Created by w on 2018/3/30.
 */
var _require = require('child_process'),
    exec = _require.exec;

var res = exec('echo "The \\$HOME variable is $HOME"');

res.stdout.on('data', function (data) {
  console.log(data);
});

res.on('exit', function (code) {
  console.log(process.pid);
  console.log('exit', code);
});
//# sourceMappingURL=child_process.js.map