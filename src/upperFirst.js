
const checkedType = require('./checkedType'),
    first = require('./_toUpperFirst'),
    forEach = require('./forEach');

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
    let type = checkedType(target),
        result = null;

    switch (type) {
        case 'String':
            result = first(target);
            break;
        case 'Array':
            result = forEach(target, (item, index) => {
                target[index] = upperFirst(item);
            });
            break;
        case 'Object':
            result = forEach(target, (value, key) => {
                target[key] = upperFirst(value);
            });
            break;
        case 'Map':
            result = forEach(target, (value, key) => {
                target.set(key, upperFirst(value));
            });
            break;
        default:
            result = target;
            break;
    }

    return result;
}

module.exports = upperFirst;
