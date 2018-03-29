'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

// promisify(readFile)(r(__dirname,'../package.json')).then(data=>{
//     data = JSON.parse(data);
//
//     console.log(data.name);
//     wfs(r(__dirname,'./name'),String(data.name),'utf8');
// });

var readFileAsync = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(filePath) {
        var data;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _util.promisify)(_fs.readFile)(filePath);

                    case 2:
                        data = _context.sent;


                        data = JSON.parse(data);
                        console.log(data.name);
                        (0, _fs.writeFileSync)((0, _path.resolve)(__dirname, './name'), String(data.name), 'utf8');

                    case 6:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function readFileAsync(_x) {
        return _ref.apply(this, arguments);
    };
}(); /**
      * Created by w on 2018/3/15.
      */
// const Koa = require('koa');
// const app = new Koa();
//
// app.use(async (ctx,next)=>{
//     ctx.body = "<h1>Hello,Koa</h1>";
// });
//
// app.listen(3000,()=>{
//     console.info('App running!');
// });

var _util = require('util');

var _path = require('path');

var _fs = require('fs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log((0, _path.resolve)(__dirname, '../package.json'));

readFileAsync((0, _path.resolve)(__dirname, '../package.json'));
//# sourceMappingURL=index.js.map