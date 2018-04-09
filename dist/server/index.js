'use strict';

var _util = require('util');

var _path = require('path');

var _fs = require('fs');

// promisify(readFile)(r(__dirname,'../package.json')).then(data=>{
//     data = JSON.parse(data);
//
//     console.log(data.name);
//     wfs(r(__dirname,'./name'),String(data.name),'utf8');
// });

async function readFileAsync(filePath) {
    var data = await (0, _util.promisify)(_fs.readFile)(filePath);

    data = JSON.parse(data);
    console.log(data.name);
    (0, _fs.writeFileSync)((0, _path.resolve)(__dirname, './name'), String(data.name), 'utf8');
} /**
   * Created by w on 2018/3/15.
   */


console.log((0, _path.resolve)(__dirname, '../package.json'));

readFileAsync((0, _path.resolve)(__dirname, '../package.json'));
//# sourceMappingURL=index.js.map