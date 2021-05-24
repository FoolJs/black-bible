const arrayFilter = require('./_arrayFilter'),
    objectFilter = require('./_objectFilter'),
    mapFilter = require('./_mapFilter'),
    setFilter = require('./_setFilter'),
    stringFilter = require('./_stringFilter'),
    numberFilter = require('./_numberFilter'),
    isArray = require('./isArray'),
    isMap = require('./isMap'),
    isSet = require('./isSet'),
    isPlainObject = require('./isPlainObject'),
    isNumber = require('./isNumber'),
    isString = require('./isString');

/**
 *
 * @module filter
 *
 * @description 适用于各种类型的Filter迭代函数
 *
 * 适用于各种类型的Filter迭代函数，对于集合的每一项调用函数，返回函数返回True的
 * 项组成的数组
 *
 * @param {Array | Map | Set | String | Number} target 对象
 * @param {Function} cb 对对象的元素调用的函数
 * @returns {Array} 函数返回true的项组成的数组
 *
 * @example
 *
 * _.filter([1, 2, 3, 4], item => item % 2 === 0);   // [2, 4]
 *
 * _.filter('Jack', char => true);  // ['J', 'a', 'c', 'k']
 *
 * _.filter(5, n => true);   // [0, 1, 2, 3, 4];
 */
function filter(target, cb) {
    let func = null;

    if (isArray(target)) {
        func = arrayFilter;
    } else if (isPlainObject(target)) {
        func = objectFilter;
    } else if (isMap(target)) {
        func = mapFilter;
    } else if (isSet(target)) {
        func = setFilter;
    } else if (isNumber(target)) {
        func = numberFilter;
    } else if (isString(target)) {
        func = stringFilter;
    } else {
        return target;
    }

    return func(target, cb);
}

module.exports = filter;
