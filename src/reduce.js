const arrayReduce = require('./_arrayReduce'),
    objectReduce = require('./_objectReduce'),
    stringReduce = require('./_stringReduce'),
    mapReduce = require('./_mapReduce'),
    setReduce = require('./_setReduce'),
    isArray = require('./isArray'),
    isMap = require('./isMap'),
    isSet = require('./isSet'),
    isPlainObject = require('./isPlainObject'),
    isString = require('./isString');

/**
 * @module reduce
 *
 * @description reduce归并函数
 *
 * 适用于多种类型的归并函数，函数接受四个参数，
 * 前一项的值，当前项的值，当前项的索引，对象本身，函数的返回值会作为第一个
 * 参数自动传给下一项，也可以通过使函数返回false终止迭代
 *
 * @param {Array| String | {} | Map | Set} target obj
 * @param {Function} fn 对目标每一项调用的函数
 * @param {any} accumulator 初始值
 * @returns {any} 函数fn最终的返回值
 *
 * @example
 *
 * let o = {a: 1, b: 2, c: 3};
 *
 * // 6
 * let result = _reduce(o, (cur, pre) => {
 *      return pre + cur;
 * });
 *
 *
 */
function reduce(target, fn, accumulator) {
    let func = null;

    if (isArray(target)) {
        func = arrayReduce;
    } else if (isPlainObject(target)) {
        func = objectReduce;
    } else if (isString(target)) {
        func = stringReduce;
    } else if (isMap(target)) {
        func = mapReduce;
    } else if (isSet(target)) {
        func = setReduce;
    } else {
        return target;
    }

    return func(target, fn, accumulator);
}

module.exports = reduce;
