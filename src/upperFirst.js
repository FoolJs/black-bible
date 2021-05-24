const first = require('./_toUpperFirst'),
    forEach = require('./forEach'),
    isArray = require('./isArray'),
    isMap = require('./isMap'),
    isPlainObject = require('./isPlainObject'),
    isString = require('./isString');

/**
 *
 * @module upperFirst
 *
 * @description 将字符串或一个集合中的字符串首字母大写，
 *
 * 该方法会递归一个集合的所有深度，将集合的所有字符串转化为首字母大写形式
 *
 *
 * @param {String | Array | Object | Map} target 想要首字母大写的字符串或集合
 * @returns {String | Array | Object | Map} 转化完成的字符串或集合
 *
 * @example
 *
 * let arr = ['aaa', {name: 'davi'}, 20];
 *
 * // ['Aaa', {name: 'Davi'}, 20];
 *console.log(_.upperFirst(arr));
 *
 */
function upperFirst(target) {
    let result = null;

    if (isString(target)) {
        result = first(target);
    } else if (isArray(target)) {
        result = forEach(target, (item, index) => {
            target[index] = upperFirst(item);
        });
    } else if (isPlainObject(target)) {
        result = forEach(target, (value, key) => {
            target[key] = upperFirst(value);
        });
    } else if (isMap(target)) {
        result = forEach(target, (value, key) => {
            target.set(key, upperFirst(value));
        });
    } else {
        result = target;
    }

    return result;
}

module.exports = upperFirst;
