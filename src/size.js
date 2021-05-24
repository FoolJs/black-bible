const isArray = require('./isArray'),
    isMap = require('./isMap'),
    isSet = require('./isSet'),
    isPlainObject = require('./isPlainObject'),
    isString = require('./isString');

/**
 *
 * @module size
 *
 * @description 一个集合内元素的数量
 *
 * 对于数组和字符串，为他们的length属性，其他类型的对象，为对象内所有
 * 的可迭代属性的数量
 *
 * @param {Array | String | Object | Map | Set} target 一个集合
 * @returns {Number} 集合内元素的数量
 *
 * @example
 *
 * let o = {name: 'Davi', age: 22};
 *
 * // 2
 * console.log(_.size(o));
 *
 */
function size(target) {
    let len = 0;

    if (isArray(target) || isString(target)) {
        len = target.length;
    } else if (isPlainObject(target)) {
        len = Object.keys(target).length;
    } else if (isMap(target) || isSet(target)) {
        len = Array.from(target.keys()).length;
    } else {
        return target;
    }

    return len;
}

module.exports = size;
