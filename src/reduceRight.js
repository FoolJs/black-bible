const arrayReduceRight = require('./_arrayReduceRight'),
    mapReduceRight = require('./_mapReduceRight'),
    objectReduceRight = require('./_objectReduceRight'),
    setReduceRight = require('./_setReduceRight'),
    isArray = require('./isArray'),
    isMap = require('./isMap'),
    isSet = require('./isSet'),
    isPlainObject = require('./isPlainObject');

/**
 *
 * @module reduceRight
 *
 * @description rediceRight归并函数
 *
 * reduce函数的反向函数，从反方向开始迭代，对每一项调用函数fn，
 * 函数fn接受4个参数，前一项的值，当前项的值，当前项的索引，对象本身，
 * 若accumulator存在，则从第一项开始迭代，否则，从第二项开始迭代
 * 若fn函数显式的返回false，则终止迭代，返回结果
 *
 * @param {Array | {} | Map | Set} target object
 * @param {Function} fn 对对象每个元素调用的函数
 * @param {any} accumulator 初始值
 * @returns {any} 构建的最终值
 *
 * @example
 *
 * let arr = [0, 1, 2, 3, 4];
 *
 * console.log( _.reduceRight(arr, (pre, cur) => pre + cur) );  // 10
 *
 *
 */
function reduceRight(target, fn, accumulator) {
    let func = null;

    if (isArray(target)) {
        func = arrayReduceRight;
    } else if (isPlainObject(target)) {
        func = objectReduceRight;
    } else if (isMap(target)) {
        func = mapReduceRight;
    } else if (isSet(target)) {
        func = setReduceRight;
    } else {
        return target;
    }

    return func(target, fn, accumulator);
}

module.exports = reduceRight;
