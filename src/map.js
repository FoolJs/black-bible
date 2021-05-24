const arrayMap = require('./_arrayMap'),
    objectMap = require('./_objectMap'),
    mapMap = require('./_mapMap'),
    setMap = require('./_setMap'),
    stringMap = require('./_stringMap'),
    numberMap = require('./_numberMap'),
    isArray = require('./isArray'),
    isMap = require('./isMap'),
    isSet = require('./isSet'),
    isPlainObject = require('./isPlainObject'),
    isNumber = require('./isNumber'),
    isString = require('./isString');

/**
 *
 * @module map
 *
 * @description map迭代函数
 *
 * 适用于各种类型的map迭代函数，对集合的每一项调用函数fn，返回函数
 * 的返回值组成的数组
 *
 *
 * @param {Array | Map | Set | String | Number} target obj
 * @param {Function} fn 迭代函数
 * @returns {Array} 函数的返回值组成的数组
 *
 * @example
 *
 * _.map(5, item => item + '号'); // [ '0号', '1号', '2号', '3号', '4号' ]
 *
 * _.map([1, 2, 3, 4, 5], (item, index) => index + '号'); // [ '0号', '1号', '2号', '3号', '4号' ]
 */
function map(target, fn) {
    let func = null;

    if (isArray(target)) {
        func = arrayMap;
    } else if (isPlainObject(target)) {
        func = objectMap;
    } else if (isMap(target)) {
        func = mapMap;
    } else if (isSet(target)) {
        func = setMap;
    } else if (isString(target)) {
        func = stringMap;
    } else if (isNumber(target)) {
        func = numberMap;
    } else {
        return target;
    }

    return func(target, fn);
}

module.exports = map;
