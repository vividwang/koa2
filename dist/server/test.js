'use strict';

/**
 * Created by w on 2018/4/4.
 */
var assert = require('assert');
var num = 1.23656;
var str = String(Math.round(num * 100)).split('');
str.splice(1, 0, '.');
str = Number(str.join(''));
assert.equal(str, 1.24);
//# sourceMappingURL=test.js.map