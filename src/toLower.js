const _toLower = require('./_toLower'),
    forEach = require('./forEach'),
    isArray = require('./isArray'),
    isMap = require('./isMap'),
    isPlainObject = require('./isPlainObject'),
    isString = require('./isString');

/**
 *
 * @module toLower
 *
 * @description 将一个字符串或集合中的字符串转化为小写形式
 *
 * 会递归一个集合所有的深度，将它们的字符串值全部转化
 *
 *
 * @param {String | Object | Map | Array} target 想要小写的字符串或集合
 * @returns {any}
 *
 * @example
 *
 * let arr = ['AAA', ['BBB', ['CCC']]];
 *
 * //  ['aaa', ['bbb', ['ccc']]];
 * console.log(_.toLower(arr));
 *
 */
function toLower(target) {
    let result = null;

    if (isString(target)) {
        result = _toLower(target);
    } else if (isArray(target)) {
        result = forEach(target, (item, index) => {
            target[index] = toLower(item);
        });
    } else if (isPlainObject(target)) {
        result = forEach(target, (value, key) => {
            target[key] = toLower(value);
        });
    } else if (isMap(target)) {
        result = forEach(target, (value, key) => {
            target.set(key, toLower(value));
        });
    } else {
        result = target;
    }

    return result;
}

module.exports = toLower;
