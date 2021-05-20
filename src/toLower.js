const checkedType = require('./checkedType'),
    _toLower = require('./_toLower'),
    forEach = require('./forEach');



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
    let type = checkedType(target),
        result = null;

    switch (type) {
        case 'String':
            result = _toLower(target);
            break;
        case 'Array':
            result = forEach(target, (item, index) => {
                target[index] = toLower(item);
            });
            break;
        case 'Object':
            result = forEach(target, (value, key) => {
                target[key] = toLower(value);
            });
            break;
        case 'Map':
            result = forEach(target, (value, key) => {
                target.set(key, toLower(value));
            });
            break;
        default:
            result = target;
            break;
    }

    return result;
}


module.exports = toLower;
