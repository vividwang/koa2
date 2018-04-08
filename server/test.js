/**
 * Created by w on 2018/4/4.
 */
const assert = require('assert');
let num = 1.23656;
let str = String(Math.round(num * 100)).split('');
str.splice(1, 0, '.');
str = Number(str.join(''));
assert.equal(str, 1.24);
